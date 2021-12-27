<template>
  <div>
    
    
    <div v-if="state">
      <NavBar />
      <Dashboard />
    </div>

    <div v-else>
      <NavBar />
      <router-view />
    </div>

  </div>
</template>

<script lang='ts'>
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, onMounted, ref } from "vue";
import NavBar from "../components/NavBar.vue";
import config from "../firebase";
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

    initializeApp(config)
    const auth = getAuth()

    onMounted(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          store.state.isSignedIn = true;
        }
        else{
          store.state.isSignedIn = false;
        }

        state.value = store.state.isSignedIn
        console.log("home: ", state.value)
      })
    })

    return { state }
  }
})
</script>