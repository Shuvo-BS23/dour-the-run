<template>
  <div>
    <NavBar />
    
    <div v-if="state">
      <Dashboard />
    </div>

    <div v-else>
      <router-view />
    </div>

  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import NavBar from "../components/NavBar.vue";
import store from '../store';
import Dashboard from "./Dashboard.vue";


export default defineComponent({
  name: "Home",
  components: {
    NavBar,
    Dashboard
  },

  setup(){
    const state = ref(store.state.isSignedIn)

    return { state }
  }
})
</script>