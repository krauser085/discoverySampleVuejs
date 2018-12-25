<template>
 <div>
   <header>
     <h2 class="container">Search Documents</h2>
   </header>
   <div class="container">
     <search-form>

     </search-form>
   </div>
 </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'
export default {
  components: {
    'search-form': FormComponent
  }
}
</script>

<style lang="sass">
.container
  margin: 0 15px 0 15px;

</style>
