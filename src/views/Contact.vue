<template>
  <div class="container" id="contacts">
    <h1>Contact Us</h1>
    <div>      
      <div>
        <FeedbackForm/>
      </div>

      <div>
        <Map :center="[47.41322, -1.219482]"/>        
      </div>
    </div>
  </div>
</template>

<script>
import Map from '../components/parts/Map.vue'
import FeedbackForm from '../components/parts/FeedbackForm.vue'


export default {
  name:"Contact",
  components:{
    Map,
    FeedbackForm
  }
}
</script>

<style lang="scss" scoped>
#contacts{
  padding: 150px 0;  
  
  h1{
    font-family: "Hind Madurai";
    font-weight: 700;
    font-size: 3.5625rem;
    line-height: 69px;
    text-align: center;
    margin-bottom: 50px;
    }
}

</style>