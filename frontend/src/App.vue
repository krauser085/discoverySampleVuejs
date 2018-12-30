<template>
  <div>
    <header>
      <h2 class="g_container">Search Documents</h2>
    </header>
    <div class="g_container">
      <search-form :query="query" v-on:$onSubmit="onSubmit" v-on:$onReset="onReset"></search-form>
      <tabs :tabs="tabNames" v-on:$select="onSelectTab"></tabs>
      <div v-if="selectedTab === tabNames[0]">
        <div v-if="submitted">
          <result-view :documents="documents" :query="query"></result-view>
        </div>
      </div>
      <div v-else>
        <history-view :history="history"></history-view>
      </div>
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
import ResultComponent from './components/ResultComponent.vue'
import HistoryComponent from './components/HistoryComponent.vue'

const tag = '[App.vue]'

export default {
  name: 'app',
  components: {
    'search-form': FormComponent,
    'tabs': TabComponent,
    'result-view': ResultComponent,
    'history-view': HistoryComponent
  },
  data () {
    return {
      query: '',
      submitted: false,
      documents: [],
      tabNames: ['searchResult', 'searchHistory'],
      selectedTab: '',
      history: []
    }
  },
  created () {
    this.selectedTab = this.tabNames[0]
    this.getHistory()
  },
  methods: {
    search (query) {
      return SearchModel.list(query)
        .then(documents => {
          this.documents = documents
          this.query = query
          this.setHistory(query)
          this.getHistory()
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
    },
    onSelectTab(view) {
      console.log(tag, `onSelectTab(${view})`)
      this.selectedTab = view
    },
    getHistory() {
      console.log(tag, 'getHistory()')
      this.history = HistoryModel.getHistory()
    },
    setHistory(newHistory) {
      console.log(tag, `setHistory(${newHistory})`)
      HistoryModel.setHistory(newHistory)
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
