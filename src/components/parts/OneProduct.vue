<template>
    <div class="tab_content">
        <div class="tab_picture">
            <img :src="`assets/images/${product.img}`" :alt="product.name">
        </div>
        <div class="tab_text_item">
            <h4 class="tab_title">{{product.name}}</h4>
            <p class="tab_text">{{product.content}}</p>
            <div class="tab_prise">
                <span class="discount_price">&#x24;{{product.discount}}</span>
                <span class="main_price">&#36;{{product.price}}</span>
            </div>
            <div class="btn_wrapper">
                <button @click="callbackFormDisplay()" class="btn buy_btn" type="button">Buy Now</button>
            </div>
        </div>
    </div>    

        <transition name="modal">
            <modal v-if="showModal" @close="showModal = false">                
            <template v-slot:header>
                <h3>{{modalTitle}}</h3>
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
import Modal from '../common/Modal.vue'
import BuyNow from '../parts/BuyNow.vue'
export default {
    props:['product'],
    name:"OneProduct",
    components:{
        Modal,
        BuyNow
    },
    data(){
        return{
            showModal:false,            
            modalTitle: ''
        }
    },
    methods:{
        hideModal(){           
            this.showModal = false;   
        },
        callbackFormDisplay() {
            this.showModal = true; 
            this.modalTitle = this.product.name;
        }
    },
}
</script>
