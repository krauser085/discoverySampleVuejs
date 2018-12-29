<template>
  <ul>
    <li :class="{ active: isResult }" v-on:click="onClick(resultView)">Result</li>
    <li :class="{ active: isHistory }" v-on:click="onClick(historyView)">History</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      resultView: 'resultView',
      historyView: 'historyView',
      isResult: true,
      isHistory: false
    }
  },
  methods: {
    onClick(view) {
      console.log('TEST')
      this.isResult = view === this.resultView ? true : false
      this.isHistory = view === this.historyView ? true : false
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
