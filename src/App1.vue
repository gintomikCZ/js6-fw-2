<template>
  <h1>frameworks - #2</h1>
  <TButton size="small" label="small" @clicked="console.log('clicked')" />
  <TButton label="medium" color="secondary" @clicked="console.log('clicked')" />
  <TButton size="large" label="large" color="secondary" @clicked="console.log('clicked')" />
  <div class="container">
    <ASquare v-for="(item, index) in numbers" :num="item" :fontSize="fontSizes[index]" />
  </div>
  <TButton color="secondary" @clicked="increment" label="increment"/>
</template>

<script>
import TButton from '@/components/TButton.vue'
import ASquare from '@/components/ASquare.vue'
export default {
  name: 'App',
  data () {
    return {
      numbers: [45, 5, 6, 10, 11, 89],
      fontSizes: [16, 30, 40, 25, 8, 11]
    }
  },
  methods: {
    increment () {
      this.numbers = this.numbers.map(num => num + 1)
    }
  },
  components: { TButton, ASquare }
}


</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>