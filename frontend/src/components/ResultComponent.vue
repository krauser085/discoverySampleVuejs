<template>
  <div v-if="documents.length">
    <ul>
      <li v-for="document of documents" :key="document.id" class="g_border" >
        <div><b>Document ID : </b>{{document.id}}</div>
        <div><b>Text : </b>{{document.text}}</div>
      </li>
    </ul>
  </div>
  <div v-else>「{{ query }}」 に関連するドキュメントがありません。</div>
</template>

<script>
export default {
  props: ['documents', 'query']
}
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 15px;

  li {
    display: flex;
    flex-direction: column;
    border-bottom: 0;
    padding: 15px;
  }
}
</style>
