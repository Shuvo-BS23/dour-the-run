<template>
  <div>
    <NavBar />
    <div class='container'>
      <div class="eventsView">
        <TabView ref="tabview1">
          
          <TabPanel header="Events">
              <div class="p-grid">
                <div class="p-col-4">
                  <Card class="cards">
                    <template #header>
                      <img class="headImage" alt="user header" src="../assets/logo.png">
                    </template>
                    <template #title>
                      <div class="p-grid">
                        <div class="p-col-4">
                          <img class="badge" alt="user header" src="../assets/logo.png">
                        </div>
                        <div class="p-col-8">
                          <p>Advanced Card</p>
                        </div>
                      </div>
                    </template>

                    <template #footer>
                      <div class="p-grid p-jc-evenly">
                        <div class="p-col-6">
                          <h6>Objective</h6>
                          <p>26 mile marathon</p>
                        </div>

                        <div class="p-col-6" style="text-align:right">
                          <h6>Completed on</h6>
                          <p>2022-01-01 12.00 AM</p>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>

                
                <div class="p-col-4">
                  <Card class="cards">
                    <template #header>
                      <img class="headImage" alt="user header" src="../assets/logo.png">
                    </template>
                    <template #title>
                      <div class="p-grid">
                        <div class="p-col-4">
                          <img class="badge" alt="user header" src="../assets/logo.png">
                        </div>
                        <div class="p-col-8">
                          <p>Advanced Card</p>
                        </div>
                      </div>
                    </template>

                    <template #footer>
                      <div class="p-grid p-jc-evenly">
                        <div class="p-col-6">
                          <h6>Objective</h6>
                          <p>26 mile marathon</p>
                        </div>

                        <div class="p-col-6" style="text-align:right">
                          <h6>Completed on</h6>
                          <p>2022-01-01 12.00 AM</p>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>

                
                <div class="p-col-4">
                  <Card class="cards">
                    <template #header>
                      <img class="headImage" alt="user header" src="../assets/logo.png">
                    </template>
                    <template #title>
                      <div class="p-grid">
                        <div class="p-col-4">
                          <img class="badge" alt="user header" src="../assets/logo.png">
                        </div>
                        <div class="p-col-8">
                          <p>Advanced Card</p>
                        </div>
                      </div>
                    </template>

                    <template #footer>
                      <div class="p-grid p-jc-evenly">
                        <div class="p-col-6">
                          <h6>Objective</h6>
                          <p>26 mile marathon</p>
                        </div>

                        <div class="p-col-6" style="text-align:right">
                          <h6>Completed on</h6>
                          <p>2022-01-01 12.00 AM</p>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>


                <div class="p-col-4">
                  <Card class="cards">
                    <template #header>
                      <img class="headImage" alt="user header" src="../assets/logo.png">
                    </template>
                    <template #title>
                      <div class="p-grid">
                        <div class="p-col-4">
                          <img class="badge" alt="user header" src="../assets/logo.png">
                        </div>
                        <div class="p-col-8">
                          <p>Advanced Card</p>
                        </div>
                      </div>
                    </template>

                    <template #footer>
                      <div class="p-grid p-jc-evenly">
                        <div class="p-col-6">
                          <h6>Objective</h6>
                          <p>26 mile marathon</p>
                        </div>

                        <div class="p-col-6" style="text-align:right">
                          <h6>Completed on</h6>
                          <p>2022-01-01 12.00 AM</p>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>


                <div class="p-col-4">
                  <Card class="cards">
                    <template #header>
                      <img class="headImage" alt="user header" src="../assets/logo.png">
                    </template>
                    <template #title>
                      <div class="p-grid">
                        <div class="p-col-4">
                          <img class="badge" alt="user header" src="../assets/logo.png">
                        </div>
                        <div class="p-col-8">
                          <p>Advanced Card</p>
                        </div>
                      </div>
                    </template>

                    <template #footer>
                      <div class="p-grid p-jc-evenly">
                        <div class="p-col-6">
                          <h6>Objective</h6>
                          <p>26 mile marathon</p>
                        </div>

                        <div class="p-col-6" style="text-align:right">
                          <h6>Completed on</h6>
                          <p>2022-01-01 12.00 AM</p>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>


                <div class="p-col-4">
                  <Card class="cards">
                    <template #header>
                      <img class="headImage" alt="user header" src="../assets/logo.png">
                    </template>
                    <template #title>
                      <div class="p-grid">
                        <div class="p-col-4">
                          <img class="badge" alt="user header" src="../assets/logo.png">
                        </div>
                        <div class="p-col-8">
                          <p>Advanced Card</p>
                        </div>
                      </div>
                    </template>

                    <template #footer>
                      <div class="p-grid p-jc-evenly">
                        <div class="p-col-6">
                          <h6>Objective</h6>
                          <p>26 mile marathon</p>
                        </div>

                        <div class="p-col-6" style="text-align:right">
                          <h6>Completed on</h6>
                          <p>2022-01-01 12.00 AM</p>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>
              </div>
          </TabPanel>
          <TabPanel header="Current"><Button>Current</Button></TabPanel>
          <TabPanel header="Completed"><Button>Completed</Button></TabPanel>
      </TabView>
      </div>
      
    </div>
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

<style scoped lang="scss">
.eventsView{
  margin-top: 20px;
}
.badge{
      height: 50px;
      width: 50px;
      border-radius: 20px;
    }
.cards{
  background: whitesmoke;
  color: black;

  .headImage{
    height: 200px;
    width: 200px
  }
  
  .card-title{
    display: flex;    
  }
}
</style>