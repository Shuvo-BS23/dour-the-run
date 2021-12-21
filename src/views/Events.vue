<template>
  <div>
    <NavBar />
    <h1>Hello Events</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'


export default defineComponent({
  name: "Events",
  components:{
    NavBar
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>