<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" class="g_border" v-model="value">
    <button type="reset" v-show="value.length" v-on:click="onReset">X</button>
  </form>
</template>

<script>
export default {
  props: ['query'],
  data () {
    return { value: this.query }
  },
  watch: {
    query (newV, oldV) { this.value = newV }
  },
  methods: {
    onSubmit () { window.location.href = `/#/search/${this.value}` },
    onReset () { this.$emit('$reset') }
  }
}
</script>

<style lang="scss" scoped>
form {
  position: relative;

  input[type="text"] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 15px 0 15px 0;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 1.5;
  }

  button[type="reset"] {
    border-radius: 50%;
    background-color: #ccc;
    color: white;
    border: none;
    padding: 2px 5px;
    position: absolute;
    top: 12px;
    right: 10px;
  }
}
</style>
