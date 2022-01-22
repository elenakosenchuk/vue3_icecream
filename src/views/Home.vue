<template>
  <div class="home">
    <MainPage/>    
    <Delivery/>
    <Details/>
    <TopProducts/>
    <AppBlock/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/parts/MainPage.vue'
import Delivery from '@/components/parts/Delivery.vue'
import Details from '@/components/parts/Details.vue'
import TopProducts from '@/components/parts/TopProducts.vue'
import AppBlock from '@/components/parts/AppBlock.vue'

export default {
  name: 'Home',
  components: {
    MainPage,
    Delivery,
    Details,
    TopProducts,
    AppBlock
  }
}
</script>
