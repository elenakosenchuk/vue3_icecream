<template>
    <form class="subscribe_form" action="#" method="post" @submit.prevent="validateAndSend">
        <div class="input_wrapper"><input class="subscribe_form_textarea" type="email" name="email"
                placeholder="Your Email" v-model.trim="email"></div>
        <div class="btn_wrapper"><button class="btn subscribe_btn" type="submit">Subscribe</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: "SubscribeForm",
    data(){
        return{
            email:'',                     
            BOT_TOKEN:'5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4',      
            CHAT_ID: '-1001765759474'
        }
    },
    methods:{
        validateEmail(email){
            // eslint-disable-next-line
            const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return email.match(regexp)
        },
        validateForm(){
            let valid = true;

            if(this.email===''){
                valid =false;
                this.$toast.error('Enter your email')
            }else{
                if(!this.validateEmail(this.email)){
                    valid =false;
                    this.$toast.error('Enter valid email address')
                }
            }
            return valid;
        },

        validateAndSend(){
            if(this.validateForm()){
                let text = encodeURI(`Email: ${this.email}`);
                axios.get(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${text}&parse_mode=html`)
        .then(resp=>{
            if(resp.data.ok){
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are succefully subscribe',
                showConfirmButton: false,
                timer: 1500
                })                
                this.email = '';                          
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