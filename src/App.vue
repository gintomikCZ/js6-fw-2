<template>
  <div class="dtp-container">
    <label for="myDate">pick a date</label>
    <input id="myDate" type="text" @focus="onFocus" readonly/>
    <TDatePicker  v-if="showDatePicker" :initialMonth="4" :initialYear="2024" @date-picked="onDatePicked"/>
  </div>

  <!-- 19.05.2024 DD.MM.YYYY-->

</template>

<script>
import TDatePicker from '@/components/tdatepicker/TDatePicker.vue'
import { formatDate } from '@/dateUtils/dateUtils.js'



export default {
  name: 'App',
  data() {
    return {
      showDatePicker: false
    }
  },
  methods: {
    onFocus() {
      this.showDatePicker = true
      document.addEventListener('click', this.docElistener)
    },
    docElistener (e) {
      const cont = document.querySelector('.dtp-container')
      if (!cont.contains(e.target)) {
        this.showDatePicker = false
        document.removeEventListener('click', this.docElistener)
      }
    },
    onBlur () {
      setTimeout(() => {
        this.showDatePicker = false
      }, 200)
    },
    onDatePicked (dt) {
      const input = document.getElementById('myDate')
      input.value = formatDate(dt)
    }
  },
  components: { TDatePicker }
}

</script>
<style scoped>
input {
  font-size: 1.2rem;
  padding: .35em .7em;
}
.dtp-container {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
</style>