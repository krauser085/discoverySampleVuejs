<template>
  <div>
    <header>
      <h2 class="g_container">Search Documents</h2>
    </header>
    <div class="g_container">
      <search-form :query="query" v-on:$submit="onSubmit" v-on:$reset="onReset"></search-form>
      <tabs :tabs="tabNames" v-on:$select="onSelectTab"></tabs>
      <router-view
        :documents="documents"
        :submitted="submitted"
        :history="history"
        v-on:$submit="onSubmit"
        v-on:$init="onSubmit"
      ></router-view>
    </div>
  </div>
</template>

<script>
// models
import SearchModel from './models/SearchModel.js'
import HistoryModel from './models/HistoryModel.js'

// Components
import FormComponent from './components/FormComponent.vue'
import TabComponent from './components/TabComponent.vue'

const tag = '[App.vue]'

export default {
  name: 'app',
  components: {
    'search-form': FormComponent,
    'tabs': TabComponent,
  },
  data () {
    return {
      query: '',
      submitted: false,
      documents: [],
      tabNames: ['search', 'history'],
      history: []
    }
  },
  created () {
    this.getHistory()
  },
  methods: {
    search (query) {
      return SearchModel.list(query)
        .then(documents => {
          this.documents = documents
          this.submitted = true
        })
    },
    onSubmit (query) {
      console.log(tag, 'onSubmit()', query)
      this.query = query
      this.search(query)
    },
    onReset () {
      this.submitted = false
      console.log(tag, 'onReset()')
      this.documents = []
      this.query = ''
    },
    onSelectTab (view) {
      console.log(tag, `onSelectTab(${view})`)
      window.location.href = `/#/${view}${view === this.tabNames[0] ? '/' + this.query : ''}`
    },
    getHistory () {
      console.log(tag, 'getHistory()')
      this.history = HistoryModel.getHistory()
    },
    setHistory (newHistory) {
      console.log(tag, `setHistory(${newHistory})`)
      HistoryModel.setHistory(newHistory)
    }
  },
  watch: {
    query (value) {
      this.setHistory(value)
      this.getHistory()
    }
  }
}
</script>

<style lang="scss" scoped>
// local Variables
$m_main-border: 1px #ccc solid;

header {
  border-bottom: $m_main-border;
  padding: 15px 0 15px 0;
  text-align: center;
}
</style>
