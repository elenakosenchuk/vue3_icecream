<template>

<!-- <div id="mobile_menu_wrap">
        <div class="sidemenu_top">
            <div class="mobile_logo">
                <router-link to="/" class="logo"><img src="assets/images/logo.png" alt="Site Logo"></router-link>
            </div>
            <button @click="toggle = !toggle" class="hamburger hamburger--slider" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <nav class="sidemenu">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Product</router-link></li>
                <li><router-link to="/articles">Articles</router-link></li>
                <li><router-link to="/testimonials">Testimonials</router-link></li>
                <li><router-link to="/contacts">Contact Us</router-link></li>   
            </ul>
        </nav>
    </div>
    <div id="page_overlay"></div> -->

    
    <header id="header_menu" :class="isFixed?'fixed':''">
            <div class="container header-container">
                <div id="header_logo">
                    <router-link to="/" class="logo"><img src="assets/images/logo.png" alt="Site Logo"></router-link>
                </div>
                <div class="header_navigation">
                    <nav id="main_menu">
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/products">Product</router-link></li>
                            <li><router-link to="/articles">Articles</router-link></li>
                            <li><router-link to="/testimonials">Testimonials</router-link></li>
                            <li><router-link to="/contacts">Contact Us</router-link></li>                            
                        </ul>
                    </nav>
                    <div class="btn_wrapper">
                        <button @click.prevent="callbackFormDisplay()" class="btn callback_btn" type="submit">Call Back</button>
                    </div>
                    <Slide :closeOnNavigation="true">
                        <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/products">Product</router-link></li>
                            <li><router-link to="/articles">Articles</router-link></li>
                            <li><router-link to="/testimonials">Testimonials</router-link></li>
                            <li><router-link to="/contacts">Contact Us</router-link></li>
                    </Slide>
                </div>
                
                <!-- :burgerIcon="documentElement.clientWidth<960?true:false" -->

                <!-- <div id="hamburger_menu">
                    <button class="hamburger hamburger--slider" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div> -->
            </div>

            <transition name="modal">
                <modal v-if="showModal" @close="showModal = false">
                
                <template v-slot:header>                    
                    <button @click="showModal = false" class="close_btn">&#10006;</button> 
                    <h3>{{modalTitle}}</h3>                   
                </template>
                <template #body>
                    <CallbackForm :hideme="hideModal" />
                </template>
                <template #footer>&nbsp;</template>
                </modal>
            </transition>
        </header>
</template>

<script>
import Modal from '../common/Modal.vue'
import CallbackForm from '../common/CallbackForm.vue'
import { Slide } from 'vue3-burger-menu'

export default {
    name:'Header',
    components:{
        Modal,
        CallbackForm,
        Slide
    },
    data(){
        return{
            showModal:false,
            isFixed: false,            
            modalTitle: '',                        
        }        
    },
    methods:{
        hideModal(){           
            this.showModal = false;   
        },
        callbackFormDisplay() {
            this.showModal = true; 
            this.modalTitle = 'Order callback';
        }
    },
    mounted(){
        window.document.onscroll = ()=>{
            this.isFixed = window.scrollY>100?true:false;
        }
        
    }
}
</script>

<style lang="scss" scoped>
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

</style>