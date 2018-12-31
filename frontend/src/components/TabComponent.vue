<template>
  <ul>
    <li :class="{ active: isResult }" v-on:click="onClick(tabs[0])">Result</li>
    <li :class="{ active: isHistory }" v-on:click="onClick(tabs[1])">History</li>
  </ul>
</template>

<script>
export default {
  props: ['tabs'],
  data () {
    return {
      isResult: true,
      isHistory: false
    }
  },
  methods: {
    onClick (view) {
      this.togleTab(view)
      this.$emit('$select', view)
    },
    togleTab (view) {
      this.isResult = view === this.tabs[0] ? true : false
      this.isHistory = view === this.tabs[1] ? true : false
    }
  },
  watch: {
    $route (to, from) {
      this.togleTab(to.name)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    display: inline-block;
    width: 50%;
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    background-color: #eee;
    color: #999;
  }
  .active {
    background-color: #2ac1bc;
    color: #fff;
  }
}
</style>
