<template>
  <div
    class="cell"
    :class="{
      'not-this-month': !isThisMonth,
      'today': isToday,
      'weekend-day': isWeekend
    }"
    @click="onClick">{{ day.getDate() }}</div>
</template>

<script>
import { compareDates } from '@/dateUtils/dateUtils.js'
export default {
  name: 'TDatePickerCell',
  props: {
    day: {
      required: true,
      validator: (v) => v instanceof Date
    },
    month: Number,
    year: Number
  },
  computed: {
    isThisMonth () {
      return this.day.getMonth() === this.month && this.day.getFullYear() === this.year
    },
    isWeekend () {
      // return this.day.getDay() === 6 || this.day.getDay() === 0
      return [0, 6].indexOf(this.day.getDay()) > -1
    },
    isToday () {
      const today = new Date()
      return compareDates(this.day, today)
    }
  },
  methods: {
    onClick () {
      this.$emit('date-picked', this.day)
    }
  }
}


</script>
<style lang="stylus" scoped>
.cell {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .4s ease;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  margin: 1px;
}

.cell:hover {
  background: #efefef;
}
.cell.not-this-month {
  font-weight: normal;
  font-style: italic;
  color: #565656;
}
.cell.today {
  background: lightpink;
}
.weekend-day {
  background: lightblue;
}
.weekend-day.not-this-month {
  background: lighten(lightblue, 50%)
}
.weekend-day.not-this-month:hover {
    background: lighten(lightblue, 90%)
}

</style>