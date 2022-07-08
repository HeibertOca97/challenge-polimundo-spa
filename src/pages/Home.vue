<template>
  <FormSearch />
  <router-view/>
</template>

<script>
import FormSearch from '../components/FormSearch.vue'

export default {
  name: 'Home',
  components: {
    FormSearch
  }, 
}
</script>

