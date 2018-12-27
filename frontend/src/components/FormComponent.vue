<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="value">
  </form>
</template>

<script>
export default {
  props: ['query'],
  data () {
    return {
      value: this.query
    }
  },
  watch: {
    query (newV, oldV) {
      console.log('query changed', newV)
      this.value = newV
    }
  },
  methods: {
    onSubmit () {
      this.$emit('$onSubmit', this.value)
    }
  }
}
</script>

<style lang='sass'>

</style>
