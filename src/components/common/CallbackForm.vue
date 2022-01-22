<template>
    <form class="callback_form" @submit.prevent="validateAndSend">
        <input class="input_wrapper" type="text" placeholder="Your name" v-model.trim="name">        
        <input class="input_wrapper" v-maska="'+38 (0##) ###-##-##'" type="text" placeholder="Your phone" v-model="phone" @blur="checkPhoneLength">        
        <input class="input_wrapper" type="time"  min="09:00" max="18:00" v-model.trim="time">
        <div class="form_subtext">Office hours are 9am to 6pm</div>
        
        <button class="btn" type="submit">Send</button>
    </form>
</template>

<script>
import { maska } from 'maska'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name:"CallbackForm",
    directives: { maska },
    props:{
        hideme: { type: Function }
        },
    data(){
        return{
            name:'',            
            phone:'',
            time:'',            
            BOT_TOKEN:'5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4',      
            CHAT_ID: '-1001765759474'
        }
    },
    methods:{
        checkPhoneLength(){
            if(this.phone.length!==19){
                this.phone == ''
            }
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
            if(this.time===''){
                valid =false;
                err_text.push('Enter time for callback')
            }            
            if(!valid){
                this.$toast.error(err_text.join('<br/>'))
            }
            return valid;
        },
        validateAndSend(){            
            if(this.validateForm()){
                let text = encodeURI(`Name: ${this.name}\nPhone: ${this.phone}\nTime: ${this.time}`);
                axios.get(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${text}&parse_mode=html`)
        .then(resp=>{
            if(resp.data.ok){
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
                })                
                this.name = '';                
                this.phone = '';
                this.time = '';
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
.callback_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
        .input_wrapper{
        width: 80%;
        height: 55px;    
        border: 2px solid rgba(214, 67, 116, 0.5);
        border-radius: 5px;
        padding-left: 10px;
        margin-bottom: 15px;        
    }
    .form_subtext{
        margin-bottom: 20px;    
        &:after{
            content: "*";
            color: red;
        }   
    }     
}

</style>