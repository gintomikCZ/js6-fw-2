<template>
  <div class="square" :style="{background: hexCode}"></div>
  <div>
    <label for="color">enter hex. color code</label>
    <input id="color" @input="onInput">
  </div>
  <div>
    <TButton label="paint" @clicked="paint"/>
  </div>
</template>

<script>

import TButton from '@/components/TButton.vue'

const isValidHexCode = (value) => {
  const re3 = /^\#[0-9A-Fa-f]{3}$/
  const re6 = /^\#[0-9A-Fa-f]{6}$/
  return (value.length === 4 && re3.test(value)) || (value.length == 7 && re6.test(value))
}

export default {
  name: 'App',
  data () {
    return {
      inputValue: '',
      hexCode: '#fff'
    }
  },
  methods: {
    paint () {
      // seženeme si input value
      // pokud input value neobsahuje hashtag, tak ho tam přidáme
      // vyhodnotíme jestli je ta value validní hexCode
      // pokud je, přiřadíme tu hodnotu do hexCode
      // pokud není, přiřadíme do hexCode #fff
      // const input = document.getElementById('color')
      let value = this.inputValue[0] === '#' ? this.inputValue : '#' + this.inputValue
      this.hexCode = isValidHexCode(value) ? value : '#fff'
    },
    onInput (event) {
      this.inputValue = event.target.value
    }
  },
  components: { TButton }
}


</script>

<style scoped>

.square {
  width: 100px;
  height: 100px;
  border: 1px solid #222;
}

</style>