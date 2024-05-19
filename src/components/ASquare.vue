<template>
  <div :class="{
    'bg-primary': num % 2,
    'bg-secondary': !(num % 2)
  }" :style="{
  fontSize: fontSize + 'px'
  }">{{ num }}</div>
</template>

<script>
/*

v-bind:style (shorthand :style)
value je objekt {
  cssProperty: value
}



*/
export default {
  name: 'ASquare',
  props: {
    num: Number,
    fontSize: Number
  },
  computed: {
    classAr () {
      return [(this.num % 2) ? 'bg-primary' : 'bg-secondary']
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

div {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-primary
  background: $primary

.bg-secondary
  background: $secondary

</style>