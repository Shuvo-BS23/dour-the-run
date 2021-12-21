
<template>
  <div>
    <Menubar :model="state? loggedInItems : loggedOutItems">
      <template>
        <!-- <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2"> -->   
        <router-view />       
      </template>
      <!-- <template #end>
        <InputText placeholder="Search" type="text" />
      </template> -->
      
    </Menubar>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue';
import SignInForm from "../components/SignInForm.vue";
import SignUpForm from "../components/SignUpForm.vue";
import store from '../store';
// import "primevue/resources/themes/mdc-dark-indigo/theme.css"

  export default {
    components:{
      SignInForm,
      SignUpForm
    },
    setup() {
      
      const state = ref(store.state.isSignedIn)
      const loggedInItems = ref([
        {
          label:'Dashboard',
          to: {name: 'Dashboard'}
        },

        {
          label:'Events',
          to: "/events"
        },

        {
          label:'Store',
          to: "/store"
        },

        {
          label:'About Us',
          to: "/about"
        }
      ]);

      const loggedOutItems = ref([
        {
          label:'Sign In',
          to: {name: 'SignInForm'},
        },

        {
          label:'Sign Up',
          to: {name: 'SignUpForm'}
        },
      ]);

      return { loggedInItems, loggedOutItems, state }
    }
  }
</script>