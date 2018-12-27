<template>
  <div>
    <header>
      <h2 class="container">Search Documents</h2>
    </header>
    <div class="container">
      <search-form :query="query" v-on:$onSubmit="onSubmit"></search-form>
      <result-view :documents="documents" :query="query"></result-view>
    </div>
  </div>
</template>

<script>
// models
import SearchModel from './models/SearchModel.js'

// Components
import FormComponent from './components/FormComponent.vue'
import ResultComponent from './components/ResultComponent.vue'

export default {
  name: 'app',
  components: {
    'search-form': FormComponent,
    'result-view': ResultComponent
  },
  data () {
    return {
      query: '',
      documents: []
    }
  },
  methods: {
    onSubmit (query) {
      console.log('got data from child el', query)
      this.search(query)
        .then(() => this.query = query)
    },
    search (query) {
      return SearchModel.list(query)
        .then(documents => this.documents = documents)
    }
  }
}
</script>

<style lang="sass">
.container
  margin: 0 15px 0 15px;

</style>
