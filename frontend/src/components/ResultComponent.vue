<template>
  <div v-if="documents.length" class="g_border">
    <ul>
      <li v-for="document of documents" :key="document.id">
        <div><b>Document ID : </b>{{document.id}}</div>
        <div><b>Text : </b>{{document.text}}</div>
        <hr>
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
    padding: 5px 15px 5px 15px;

    hr {
      width: 100%;
      border-bottom: 1px #ccc solid;
    }
  }
}
</style>
