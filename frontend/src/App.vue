<template>
  <div>
    <header>
      <h2 class="container">Search Documents</h2>
    </header>
    <div class="container">
      <search-form :query="query" v-on:$onSubmit="onSubmit" v-on:$onReset="onReset"></search-form>
      <div v-if="submitted">
        <result-view :documents="documents" :query="query"></result-view>
      </div>
    </div>
  </div>
</template>

<script>
// models
import SearchModel from './models/SearchModel.js'

// Components
import FormComponent from './components/FormComponent.vue'
import ResultComponent from './components/ResultComponent.vue'

const tag = '[App.vue]'

export default {
  name: 'app',
  components: {
    'search-form': FormComponent,
    'result-view': ResultComponent
  },
  data () {
    return {
      query: '',
      submitted: false,
      documents: []
    }
  },
  methods: {
    search (query) {
      return SearchModel.list(query)
        .then(documents => {
          this.documents = documents
          this.query = query
        })
    },
    onSubmit (query) {
      console.log(tag, 'onSubmit()', query)
      this.submitted = true
      this.search(query)
    },
    onReset () {
      console.log(tag, 'onReset()')
      this.submitted = false
      this.documents = []
      this.query = ''
    }
  }
}
</script>

<style lang="sass">
.container
  margin: 0 15px 0 15px;

</style>
