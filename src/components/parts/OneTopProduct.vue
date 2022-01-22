<template>
    <div class="product_card">
        <div class="product_pic">
            <img class="top_prod_pic" :src="`assets/images/${topproduct.img}`"
                alt="Tasty ice-cream picture"></div>
        <div class="product_card_content">
            <h4 class="product_card_title">{{topproduct.name}}</h4>
            <p class="product_card_text">{{topproduct.content}}
            </p>
            <div class="product_card_prise">
                <span class="discount_card_price">&#x24;{{topproduct.discount}}</span>
                <span class="main_card_price">&#36;{{topproduct.price}}</span>
            </div>
            <div class="btn_wrapper">
                <button @click="clickBuy(topproduct)" class="btn buy_btn" type="button">Buy Now</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'OneTopProduct',
    props:['topproduct'],    
    data(){
        return{
            showModal:false,            
            modalTitle: ''
        }
    },
    methods:{
        clickBuy(product){
            this.$emit('getproduct', product)
        },
        hideModal(){           
            this.showModal = false;   
        },
        callbackFormDisplay() {
            this.showModal = true; 
            this.modalTitle = 'Buy now form';
        }
    },    
}
</script>

<style lang="scss">
.top_prod_pic{
    object-fit: contain;
}
.close_btn{
    width: 50px;
    height: 50px;
    background: #D23166;
    border-radius: 5px;
    font-weight: 700;
    line-height: 22px;
    font-size: 1rem;
    text-transform: capitalize;
    color: #fff;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 10px;
    right: 10px;
}
.c-toast-container {
  top: 50%;
}
</style>