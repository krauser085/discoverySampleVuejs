<template>
  <div v-if="documents.length" class="g_border">
    <ul>
      <li v-for="document of documents" :key="document.id">
        <div>
          <b>Document ID :</b>
          {{document.id}}
        </div>
        <div>
          <b>Text :</b>
          {{document.text}}
        </div>
        <hr>
      </li>
    </ul>
  </div>
  <div v-else-if="submitted">「{{ $route.params.query }}」 に関連するドキュメントがありません。</div>
</template>

<script>
const tag = '[ResultComponent]'

export default {
  props: ['documents', 'submitted'],
  created () {
    console.log(tag, 'created()')
    this.init()
  },
  methods: {
    init () { this.$emit('$init', this.$route.params.query) }
  },
  watch: {
    $route (to, from) { this.init() }
  }
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
