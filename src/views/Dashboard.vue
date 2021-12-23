<template>
  <div class="container">
    <div class="p-grid nested-grid">
      <div class="p-col-3">
        <div class='p-grid'>
          <div class="p-col-12">
            <Card class="card-items">
              <template #header>
                  <img alt="user header" src="../assets/logo.png">
              </template>
              <template #title>
                  <h1>Advanced Card</h1>
                  <!-- Advanced Card -->
              </template>
          </Card>
          </div>

          <div class="p-col-12">
            <Card class="card-items">
              <template #content>
                Hello Dashboard
              </template>
            </Card>
          </div>
        </div>
      </div>

      <div class="p-col-6">
        <div class='p-grid'>
          <div class="p-col-12">
            <Card class="card-items">
              <template #header>
                  <img alt="user header" src="../assets/logo.png">
              </template>
              <template #title>
                  <h1>Advanced Card</h1>
                  <!-- Advanced Card -->
              </template>
          </Card>
          </div>

          <div class="p-col-12">
            <Card class="card-items">
              <template #title>
                <h5>Connect Your App</h5>
              </template>
              <template #content>
                <p>In order to compete, your activity must be validated by a GPS enabled tracking service. Connect your app below.</p>
              </template>
            </Card>
          </div>
        </div>
      </div>

      <div class="p-col-3">
        <Card class="card-items">
          <template #content>
            <p>Please keep an eye on our facebook page for next event</p>
          </template>
          
        </Card>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Dashboard",
  setup () {
    

    return {}
  }
})
</script>

<style scoped lang="scss">
// .p-card-title{
//   text-align: center;
// }

.card-items{
  margin-top: 20px;
  background: whitesmoke;
  color: black;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1, h5,p{
    text-align:center;
  }

  img{
    height: 150px;
    width: 160px;
    border-radius: 100px;
  }
}
</style>