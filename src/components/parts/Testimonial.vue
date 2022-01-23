<template>   
    
    <div class="testimonials_slider_wrapper">
        <ul id="testimonials_slider">
            <li class="testimonials_item">
                <div class="testimonial_content">
                    <h5 class="author_name">{{testimonial.name}}</h5>
                    <p class="testimonial_text">
                        <svg>
                            <use xlink:href="assets/images/icons/sprite.svg#left_quoutes"></use>
                        </svg>
                        {{testimonial.content}}
                        <svg>
                            <use xlink:href="assets/images/icons/sprite.svg#right_quoutes"></use>
                        </svg>
                    </p>
                    <div class="btn_wrapper">
                        <button @click.prevent="openModal" class="btn buy_btn" type="button">Add testimonial</button>
                    </div>
                </div>
                
                <div class="testimonials_picture">
                    <img :src="`assets/images/${testimonial.img}`" alt="Ice-cream picture">
                </div>
            </li>
        </ul>
    </div>
    
               
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    name:"Testimonial",
    props:['testimonial'],
    data(){
        return{                      
            BOT_TOKEN:'5060479505:AAE5--JEDUqjudIJcP82clFnIAf1HMRrjA4',      
            CHAT_ID: '-1001765759474'
        }
    },
    methods:{
        openModal(){
            this.$swal({
                title: 'Add your name and testimonial',
                html:
                    '<input id="name" class="swal2-input">' +
                    '<textarea id="message" class="swal2-textarea"></textarea>',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
                })
                .then((result) => {                
                if (result.isConfirmed) {
                    let name = document.getElementById('name').value
                    let msg = document.getElementById('message').value
                    if(name + msg ==""){
                        this.$toast.error('Enter your name and testimonial')
                        return 
                    }
                    let text = encodeURI(`Name: ${name}\nTestimonual: ${msg}`);
                            axios.get(`https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage?chat_id=${this.CHAT_ID}&text=${text}&parse_mode=html`)
                    .then(resp=>{
                        if(resp.data.ok){
                            Swal.fire('Saved!', '', 'success')
                            }
                    })
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
            })
        }
    }
}
</script>

<style lang="scss">
.swal2-input{
    border: 2px solid rgba(214, 67, 116, 0.5);
    border-radius: 5px;
}
.swal2-textarea{
    border: 2px solid rgba(214, 67, 116, 0.5);
    border-radius: 5px;
    resize: none; 
}
.swal2-styled.swal2-confirm{
    background: #D23166;
    width: 100px;
    height: 50px;
}
.swal2-styled.swal2-cancel{
    background: #686161;
    width: 100px;
    height: 50px;    
}
.testimonials_picture{
    width: 40%;
    img{
        object-fit: contain;
    }    
}
.testimonial_content{
    width: 50%;
}
@media screen and (max-width: 960px){
    .carousel__prev{
        left: 30%;
    }
    .carousel__next{
        right: 30%;
    }
}
@media screen and (max-width: 850px){
    .testimonial_content {
        width: 90%;
    }

    .testimonials_picture {
        width: 70%;
    }
}
@media screen and (max-width: 590px){
    .carousel__prev{
        left: 20%;
    }
    .carousel__next{
        right: 20%;
    }
}

</style>