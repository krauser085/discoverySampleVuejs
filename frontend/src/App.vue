<template>
  <div>
    <header>
      <h2 class="container">Search Documents</h2>
    </header>
    <div class="container">
      <search-form :query="query"></search-form>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="sass">
.container
  margin: 0 15px 0 15px;

</style>
