<template>
  <ul>
    <li v-for="(item, index) in history" :key="index">
      <span class="number">{{ index }}</span>
      {{ item.text }}
      <span class="data">{{ item.date }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['history'],
  data() {
    return {
      test: 'test'
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
  .number{
    margin-right: 15px;
    color: #ccc;
  }
  .data{
    position: absolute;
    right: 50px;
    top: 15px;
    margin-right: 15px;
    color: #ccc;
  }
}
</style>
