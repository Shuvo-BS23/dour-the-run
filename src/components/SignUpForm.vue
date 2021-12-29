<template>
  <div>
    <div class="card">
      
      <form @submit.prevent="handleSignUp">
        <h4>Sign Up</h4>
        <div class="p-fluid">
          
            <div class="p-field">
                <label for="email">Email</label>
                <InputText id="email" type="email" v-model="email"/>
            </div>
            <div class="p-field">
                <label for="password">Password</label>
                <InputText id="password" type="password" v-model="password"/>
            </div>

              <div class="form-element">
                <Button class="button" type='submit'>Sign Up</Button>
              </div>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts">
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { defineComponent, ref } from 'vue';
import config from '../firebase';
import store from '../store';
// import "primevue/resources/themes/mdc-light-indigo/theme.css"

export default defineComponent({
  name: "SignUpForm",
  setup () {

    const email = ref("");
    const password = ref("");

    const handleSignUp =() =>{
      initializeApp(config)

      const auth = getAuth()

      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(()=>{
        alert("successfully signed up")
        store.state.isSignedIn = true
      })
      .catch((err)=>{
        alert(err.message);
        console.log(err)
      })
    }

    return { email, password, handleSignUp}
  }
})
</script>

<style scoped lang="scss">
.card{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: 50px 0 0 140px;
  padding: 50px 0 0 0;

  .p-field{
    padding-top: 10px;

    label{
      text-align: center;
    }
  }
}

h4{
  text-align: center;
  text-decoration: underline;
}

.form-element{
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .button{
    width: 80px;
    height: 50px;
    text-align: center;
  }
}
</style>