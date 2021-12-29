<template>
  <div>
    <NavBar />
    <div class='container'>
      <div class="singleEvent">
        <div class="p-grid">
          <div class="p-col-4">
            <img class="badge" alt="user header" src="../assets/logo.png">
          </div>
          <div class="p-col-8">
            <h3>Advanced Card</h3>
            <p>Marathon race</p>
          </div>
        </div>

        <div class="p-grid status">
          <div class="p-col-12">
            <h3 style="text-align: center">Race Completed</h3>
          </div>
        </div>

        <div class="p-grid status">
          <div class="p-col-4">
            <h3>Challenge</h3>
            <p>distance</p>
          </div>

          <div class="p-col-4">
            <h3>Race Completed</h3>
            <p>timing</p>
          </div>

          <div class="p-col-4">
            <h3>Total Finishers</h3>
            <p>Participants</p>
          </div>
        </div>

        <div class="p-grid">
          <div class="p-col-12 poster">
            <img alt="user header" src="../assets/logo.png">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: "SingleEvent",
  components:{
    NavBar
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.singleEvent{
  width: 60%;
  margin: auto;
  padding-top: 30px;

  .badge{
    width: 100px;
    height: 80px;
    border-radius: 20px;
  }

  .status {
    margin-top: 20px;
    text-align:center;
    padding: 0;
    background: whitesmoke;
    color: black;
  }

  .poster{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    margin-top: 20px;
  }
}
</style>