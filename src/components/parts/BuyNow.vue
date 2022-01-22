<template>
    <form class="callback_form" @submit.prevent="validateAndSend">
        <div class="content_wrapper">
            <div class="form_product">                
                <div class="form_picture">
                    <img class="buy_pic" :src="`assets/images/${product.img}`" :alt="product.name">
                </div>

                <div class="form_btn_group">
                    <button @click="decrease" class="mini_btm minus" type="button">&minus;</button>                
                    <input id="qty" class="input_wrapper" type="number" placeholder="1" min="1" readonly v-model.trim="quantity">
                    <button @click="increase" class="mini_btm plus" type="button">&plus;</button>
                    <div id="prise">&#x24;{{summ}}</div>
                </div>                
            </div>

            <div class="form_content">
                <input class="input_wrapper" type="text" placeholder="Your name" v-model.trim="name"> 
                <input class="input_wrapper" v-maska="'+38 (0##) ###-##-##'" type="text" placeholder="Your phone" v-model="phone" @blur="checkPhoneLength">    
            </div> 
            <button class="btn btn_buy" type="submit">Buy</button> 
        </div>       
        
    </form>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'
import { maska } from 'maska'
export default {
    name:"BuyNow",
    directives: { maska },    
    props:{
        hideme: { type: Function },
        product: Object,
        },
    data(){
        return{
            quantity: 1,
            name:'',
            phone:'',
            summ: this.product.discount,                 
            BOT_TOKEN:'5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4',      
            CHAT_ID: '-1001765759474'
        }
    },
    methods:{
        decrease(){                       
            if(this.quantity>1){
                this.quantity = this.quantity - 1;
                this.countSumm()                
            }
        },
        increase(){           
            this.quantity++
            this.countSumm()
        },
        countSumm(){
            this.summ = (this.quantity * this.product.discount).toFixed(2)
        },                
        validateForm(){
            let valid = true;
            let err_text = [];
            if(this.name===''){
                valid =false;
                err_text.push('Enter your name')                
            }            
            if(this.phone===''){
                valid =false;
                err_text.push('Enter your phone')
            }                    
            if(!valid){
                this.$toast.error(err_text.join('<br/>'))
            }
            return valid;
        },
        validateAndSend(){            
            if(this.validateForm()){
                let text = encodeURI(`Buy product ${this.product.name}\nName: ${this.name}\nPhone: ${this.phone}`);
                axios.get(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${text}&parse_mode=html`)
        .then(resp=>{
            if(resp.data.ok){
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your order has successfully done',
                showConfirmButton: false,
                timer: 1500
                })                
                this.name = '';                
                this.phone = '';                
                this.hideme();               
            }else{
                this.$toast.error(resp.data.description)
            }
        })
          .catch((err)=>{
              this.$toast.error(err)
          })      

            }            
        }
    }
}
</script>

<style lang="scss" scoped>
.content_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}
.form_product{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 20px;
}
#qty{
    width: 20%;
    height: 30px;
}
.mini_btm{
    width: 15%;
    height: 30px;
    border: 2px solid rgba(214, 67, 116, 0.5);
    border-radius: 5px;
    background: rgba(242, 206, 218, 0.3);
}
.form_picture{
    width: 40%;
    height: 40%;
    .buy_pic{
        object-fit: contain;
        width: 50%;
        height: 50%;
    }    
}
.form_btn_group{
    width: 40%;
}
.input_wrapper{
    width: 80%;
    height: 55px;    
    border: 2px solid rgba(214, 67, 116, 0.5);
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 15px;        
}

.btn_buy{
    margin: 0 auto;
}
</style>