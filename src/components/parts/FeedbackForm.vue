<template>
    <div id="feedback">
        <h4 class="feed_back_title">Have Questions in Mind? Let us help you</h4>
        <form class="feedback_form" @submit.prevent="validateAndSend">            
            <input class="input_wrapper" type="text" placeholder="Enter your name" v-model.trim="name">            
            <input class="input_wrapper" type="text" placeholder="Enter your email" v-model.trim="email">         
            <input class="input_wrapper" v-maska="'+38 (0##) ###-##-##'" type="text" placeholder="Enter your phone" v-model="phone" @blur="checkPhoneLength">           
            <textarea class="input_wrapper text_wrapper" rows="10" placeholder="Enter your message..." v-model.trim="message"></textarea>           
            <button type="submit" class="btn">Send</button>
        </form>
    </div>
</template>

<script>
import { maska } from 'maska'
import axios from 'axios'

export default {
    name:"FeedbackForm",
    directives: { maska },
    data(){
        return{
            name:'',
            email:'',
            phone:'',            
            message:'',
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
        validateEmail(email){
            // eslint-disable-next-line
            const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return email.match(regexp)
        },  

        validateForm(){
            let valid = true;
            let err_text = [];

            if(this.name===''){
                valid =false;
                err_text.push('Enter your name')                
            }
            if(this.email===''){
                valid =false;
                err_text.push('Enter your email')
            }else{
                if(!this.validateEmail(this.email)){
                    valid =false;
                    err_text.push('Enter valid email address')
                }
            }
            if(this.phone===''){
                valid =false;
                err_text.push('Enter your phone')
            }          
            if(this.message===''){
                valid =false;
                err_text.push('Enter your message')
            }
            if(!valid){
                this.$toast.error(err_text.join('<br/>'))
            }
            return valid;
        },
        validateAndSend(){
            if(this.validateForm()){
                let text = encodeURI(`Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nMessage: ${this.message}`);
                axios.get(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${text}&parse_mode=html`)
        .then(resp=>{
            if(resp.data.ok){
                this.$toast.success("Message successfully send")
                this.name = '';
                this.email = '';
                this.phone = '';                
                this.message = ''
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

#feedback{
    display: flex;      
    width: 80%;
    margin: 0 auto 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    padding: 50px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.feed_back_title{
    font-size: 26px;
    margin-bottom: 30px;
}
.feedback_form{
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input_wrapper{
    width: 80%;
    height: 55px;    
    border: 2px solid rgba(214, 67, 116, 0.5);
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 15px;        
}
.text_wrapper{
    margin-bottom: 30px;
    padding-top: 16px;
    resize: none;
    height: 100px;
}
</style>