<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="value">
    <input type="reset" v-on:click="onReset">
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
    },
    onReset () {
      this.$emit('$onReset')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
