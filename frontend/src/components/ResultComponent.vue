<template>
  <div v-if="documents.length">
    <ul>
      <li v-for="document of documents" :key="document.id">
        <div>{{document.id}}</div>
        <div>{{document.text}}</div>
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

<style lang="sass" scoped>

</style>
