<template>
  <!-- <button v-if="color==='primary'" class="btn-primary" @click="$emit('clicked')">{{ label }}</button>
  <button v-else class="btn-secondary" @click="$emit('clicked')">{{ label }}</button> -->

  <!-- <button :class="['btn-' + color]" class="btn" @click="$emit('clicked')">{{ label }}</button> -->

  <!-- <button
    :class="{
      'btn-primary': color === 'primary',
      'btn-secondary': color === 'secondary',
      'btn-small': size === 'small',
      'btn-medium': size === 'medium',
      'btn-large': size === 'large'
    }"
    class="btn"
    @click="$emit('clicked')">{{ label }}</button> -->

    <button :class="classArray" @click="$emit('clicked')">{{ label }}</button>

</template>

<script>

/*
v-bind:class="value"  (shorthand :class)
value
  a) array of class names
  b) objekt {
    class-name: condition
  }

*/


export default {
  name: 'TButton',
  props: {
    label: String,
    color: {
      default: 'primary',
      validator: (v) => ['primary', 'secondary'].indexOf(v) > -1
    },
    size: {
      default: 'medium',
      validator: (v) => ['small', 'medium', 'large'].indexOf(v) > -1
    }
  },
  // data () {
  //   return {
  //     classArray: ['btn-primary']
  //   }
  // }
  computed: {
    classArray () {
      return ['btn', 'btn-' + this.color, 'btn-' + this.size]
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.btn
  border: 1px solid #ababab
  border-radius: 5px
  padding: .35em .7em
  cursor: pointer
  transition: background .4s ease

.btn-primary
  background: $primary
  &:hover
    background: lighten($primary, 50%)

.btn-secondary
  background: $secondary
  &:hover
    background: lighten($secondary, 50%)

.btn-small
  font-size: .9rem
.btn-medium
  font-size: 1.4rem
.btn-large
  font-size: 1.8rem
</style>