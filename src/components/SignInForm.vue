<template>
  <div>
    <div class="card">
      <form @submit.prevent="handleLogin">
        <h4>Sign In</h4>
        <div class="p-fluid">
          <div class="p-field">
            <label for="email">Email</label>
            <InputText id="email" type="email" v-model="email" />
          </div>
          <div class="p-field">
            <label for="password">Password</label>
            <InputText id="password" type="password" v-model="password" />
          </div>

          <div class="form-element">
            <Button class="button" type="submit">Sign In</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineComponent, ref } from "vue";
import config from "../firebase";
import store from "../store";
// import "primevue/resources/themes/mdc-light-indigo/theme.css"

export default defineComponent({
  name: "SignInForm",
  setup() {
    const redirectUrl = "http://localhost:3000/redirect";

    const email = ref("");
    const password = ref("");
    const handleLogin = () => {
      alert("done");

      initializeApp(config);

      const auth = getAuth();

      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          alert("successfully signed in");
          store.state.isSignedIn = true;
          // this.$ 'http://www.strava.com/oauth/authorize?client_id=75695&response_type=code&redirect_uri=http://localhost:3000&scope=read_all'

          // this.$route.push()
          // router.push('https://www.strava.com/oauth/authorize?client_id=75695&response_type=code&redirect_uri=http://localhost:3000&scope=read_all')
        })
        .catch((err) => {
          alert("error occured");
          console.log(err);
        });
    };

    return { email, password, handleLogin };
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 80%;
  margin: 50px 0 0 140px;
  padding: 50px 0 0 0;

  .p-field {
    padding-top: 10px;

    label {
      text-align: center;
    }
  }
}

h4 {
  text-align: center;
  text-decoration: underline;
}

.form-element {
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    width: 80px;
    height: 50px;
    text-align: center;
  }
}
</style>
