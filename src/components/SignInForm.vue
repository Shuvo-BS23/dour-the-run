<template>
  <div>
    <div class="card">
      
      <form>
        <h4>Sign In</h4>
        <div class="p-fluid">
          
            <div class="p-field">
                <label for="email">Email</label>
                <InputText id="email" type="email" />
            </div>
            <div class="p-field">
                <label for="password">Password</label>
                <InputText id="password" type="password" />
            </div>

            <div class="form-element">
              <Button class="button" type='submit'>Sign In</Button>
            </div>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import "primevue/resources/themes/mdc-light-indigo/theme.css"

export default defineComponent({
  name: "SignInForm",
  setup () {

    return {}
  }
})
</script>

<style scoped lang="scss">
.card{
  display: flex;
  align-content: center;
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