<template>
  <div>
    <header>
      <h2 class="container">Search Documents</h2>
    </header>
    <div class="container">
      <search-form :query="query" v-on:$onSubmit="onSubmit"></search-form>
    </div>
  </div>
</template>

<script>
// models
import SearchModel from './models/SearchModel.js'

// Components
import FormComponent from './components/FormComponent.vue'

export default {
  name: 'app',
  components: {
    'search-form': FormComponent
  },
  data () {
    return {
      query: 'this is test'
    }
  },
  methods: {
    onSubmit (query) {
      console.log('got data from child el', query)
      this.query = query
      this.search(this.query)
    },
    search (query) {
      SearchModel.list(query)
        .then(documents => console.log(documents))
    }
  }
}
</script>

<style lang="sass">
.container
  margin: 0 15px 0 15px;

</style>
