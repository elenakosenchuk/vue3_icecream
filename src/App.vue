<template>
  <Header/>
  <main>
    
  </main>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components:{ 
    Header,    
    Footer
  }
}
</script>
