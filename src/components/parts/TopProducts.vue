<template>
    <section id="top_products">
        <div class="container">
            <div class="top_title">
                <h3>Top Products</h3>
            </div>

            <div class="slider_wrap">
                <div id="product_slider">
                    <carousel :settings="sliderSettings" :breakpoints="breakpoints">
                        <slide v-for="prod in topProdList" :key="prod.id">
                        <OneTopProduct @getproduct='openBuyModal' :topproduct="prod"/>
                        </slide>

                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>                            
                </div>                        
            </div>
        </div>
    </section>

    <transition name="modal">
        <modal v-if="showModal" @close="showModal = false">                
        <template v-slot:header>
            <h4 class="product_card_title">{{product.name}}</h4>
            <button class="close_btn" @click="showModal = false">&#10006;</button>                    
        </template>
        <template #body>
            <BuyNow :hideme="hideModal" :product="product" />
        </template>
        <template #footer>&nbsp;</template>
        </modal>
    </transition>
</template>

<script>
import axios from 'axios'
import OneTopProduct from './OneTopProduct.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Modal from '../common/Modal.vue'
import BuyNow from '../parts/BuyNow.vue'

export default {
    name:"TopProducts",
    components:{
        OneTopProduct,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        Modal,
        BuyNow
    },
    methods:{
        hideModal(){           
            this.showModal = false;   
        },        
        openBuyModal(product){
            this.product = product;
            this.showModal = true;                        
        }
    },
    data(){
        return{
            showModal: false,            
            product:{},
            topProdList:[],
            sliderSettings:{
                itemsToShow:3,
                itemsToScroll:1,
                wrapAround:true,
                snapAlign: 'start'                
            },
            breakpoints: {
                300: {
                    itemsToShow: 1,
                    
                },
                560: {
                    itemsToShow: 2,
                    
                },
                780: {
                    itemsToShow: 2,
                    
                },                             
                1024: {
                    itemsToShow: 3,
                    
                },
            },
        }
    },
    created(){
        axios.get('data/top_products.json')
        .then((resp)=>{
            this.topProdList = resp.data;
            window.dispatchEvent(new Event('resize'));
        })
    },
    
}
</script>

<style lang="scss">
.carousel__prev {
    top: 100%;
    left: 40%;
}
.carousel__next{
    top: 100%;
    right: 40%;
}

.carousel__prev,
    .carousel__next {
    background-color: #D23166;
    }
.carousel__pagination-button{
    background-color: rgba(242, 206, 218, 0.3);
}
.carousel__pagination-button--active{
    background-color: #D23166;
}

@media screen and (max-width: 850px) {
    .carousel__prev {
        top: 100%;
        left: 35%;
    }

    .carousel__next {
        top: 100%;
        right: 35%;
    }
}

@media screen and (max-width: 660px) {
    .carousel__prev {
        top: 100%;
        left: 25%;
    }

    .carousel__next {
        top: 100%;
        right: 25%;
    }
}
</style>