<template>
  <div class="container">
    <div class="p-grid nested-grid">
      <div class="p-col-3">
        <div class='p-grid'>
          <div class="p-col-12">
            <Card class="card-items">
              <template #header>
                  <img alt="user header" :src="proPic">
              </template>
              <template #title>
                  <h1>{{firstName}} {{lastName}}</h1>
                  <!-- Advanced Card -->
              </template>
          </Card>
          </div>

          <div class="p-col-12">
            <Card class="card-items">
              <template #content>
                Hello {{firstName}}
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
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: "Dashboard",
  setup () {

    const firstName = ref('');
    const lastName = ref('');
    const proPic = ref('');

    const init = async () => {
        try {
            const firstResponse = await axios({
                method: 'POST',
                url: 'https://www.strava.com/oauth/token',
                params: {
                    client_id: 'your client id',
                    client_secret: 'your client secret',
                    grant_type: 'refresh_token',
                    refresh_token: 'your client secret',
                },
            })
            const token = firstResponse.data.access_token;
            console.log(token) // Keep this line only if you need the token for something else later
            const secondResponse = await axios({
                method: 'GET',
                url: `https://www.strava.com/api/v3/athlete`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(secondResponse.data);
            firstName.value = secondResponse.data.firstname;
            lastName.value = secondResponse.data.lastname;
            proPic.value = secondResponse.data.profile;

        } catch (e) {
            console.log(e);
        }
    }

    onMounted(()=>{
      init();
    })

    return { firstName, lastName, proPic }
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