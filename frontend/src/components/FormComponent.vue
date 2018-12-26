<template>
  <div>
    <input type="text" v-model="value">
  </div>
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
      this.value = newV
    }
  }
}
</script>

<style lang='sass'>

</style>
