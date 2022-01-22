<template>  
        <div class="container">
            <div class="products_content">
                <h3 class="products_title">Our Product</h3>
                <div class="tabs">
                    <ul class="tabs_list">
                        <li v-for="group in groupsList" :key="group.id"  :class="activeGroup!=group.id?'tabs_list_name':'tabs_list_name active'">
                            <a @click="loadGroupProducts(group.id)">{{ group.name}}</a>
                        </li>
                    </ul>
                </div>

                <div class="tab_content_wrapper" v-for="product in currentProducts" :key="product.id">
                    <OneProduct :product="product" />
                </div>
            </div>
        </div>           
</template>

<script>
import axios from 'axios'
import OneProduct from '@/components/parts/OneProduct.vue'

export default {
  name:"Product",
  components:{
      OneProduct
  },        

  data() {
      return {
        activeGroup: 1,
        groupsList: [
            {id: 1, name: 'ice cream'}, 
            {id: 2, name: 'CAYENNE CHOCOLATE'},
            {id: 3, name: 'CAKE BATTER'},
            {id: 4, name: 'CANDY CANE'},
            {id: 5, name: 'PLATTERS'},
            {id: 6, name: 'DESSERT'},       
        ],        
        currentProducts: [],
      }
    },
    created() {
        this.loadGroupProducts(this.activeGroup);        
      },
    methods: {
        loadGroupProducts:function(id){
            this.activateGroup(id);
                let url = `data/product_${id}.json`;
            axios.get(url)
            .then((response)=>{
                this.currentProducts = response.data;
            })          
        },
        activateGroup:function(id){
            this.activeGroup = id;
        }
    }
}
</script>