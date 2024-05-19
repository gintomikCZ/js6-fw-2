<template>
  <div class="container">
    <div class="first-row">
      <div class="arrow" @click="yearMinus"><<</div>
      <div class="arrow" @click="monthMinus"><</div>
      <div class="header">{{ header }}</div>
      <div class="arrow" @click="monthPlus">></div>
      <div class="arrow" @click="yearPlus">>></div>
    </div>
    <div class="weekDayNames">
      <div v-for="name in dayNames">{{ name }}</div>
    </div>
    <div class="body">
     <!-- div renderovaný pomocí v-for -->
      <!-- <div class="cell" v-for="dt in days">{{ dt.getDate() }}</div> -->
      <TDatePickerCell v-for="dt in days" :day="dt" :month="month" :year="year" @date-picked="onDatePicked"/>
    </div>
  </div>
</template>

<script>

import { monthNames, weekDayShorts, getNumberOfDays } from '@/dateUtils/dateUtils.js'
import TDatePickerCell from './TDatePickerCell.vue'

export default {
  name: 'TDatePicker',
  props: {
    initialMonth: Number,
    initialYear: Number
  },
  data () {
    return {
      year: this.initialYear,
      month: this.initialMonth,
      dayNames: weekDayShorts
    }
  },
  computed: {
    header () {
      return monthNames[this.month] + ' ' + this.year
    },
    days () {
      const days = []
      const numberOfDays = getNumberOfDays(this.month, this.year)
      for (let i = 1; i <= numberOfDays; i++) {
        days.push(new Date(this.year, this.month, i))
      }
      let firstDay = days[0].getDay() // 0 - 6
      if (firstDay === 0) {
        firstDay = 7
      }
      if (firstDay !== 1) {
        let i = 0
        do {
          days.unshift(new Date(this.year, this.month, -i))
          i += 1
        } while (i < firstDay - 1)
      }
      let lastDay = days[days.length - 1].getDay()
      if (lastDay !== 0) {
        for (let i = 1; i <= (7 - lastDay); i++) {
          days.push(new Date(this.year, this.month, numberOfDays + i))
        }
      }
      return days
    }
  },
  methods: {
    monthPlus () {
      if (this.month === 11) {
        this.month = 0
        this.year += 1
        return
      }
      this.month += 1
    },
    monthMinus () {
      if (this.month === 0) {
        this.month = 11
        this.year -= 1
        return
      }
      this.month -= 1
    },
    yearPlus () {
      this.year += 1
    },
    yearMinus () {
      this.year -= 1
    },
    onDatePicked (payload) {
      this.$emit('date-picked', payload)
    }
  },
  components: { TDatePickerCell }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  width: 280px;
  border: 1px solid red;
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
}
.first-row {
  display: flex;
  height: 30px;
  border-bottom: 1px solid #cdcdcd;
}
.arrow {
  width: 30px;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .4s ease;
  cursor: pointer;
}
.arrow:hover {
  background: #efefef;
}
.header {
  flex-grow: 1;
  display: flex;
    justify-content: center;
    align-items: center;
}
.weekDayNames {
  display: flex;
  height: 30px;
  border-bottom: 1px solid #cdcdcd;
}
.weekDayNames > * {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

</style>