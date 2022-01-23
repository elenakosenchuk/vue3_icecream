<template>
    
    <Slide :closeOnNavigation="true" :isOpen="isOpen" @closeMenu="isOpen = false" :burgerIcon="false">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Product</router-link></li>
        <li><router-link to="/articles">Articles</router-link></li>
        <li><router-link to="/testimonials">Testimonials</router-link></li>
        <li><router-link to="/contacts">Contact Us</router-link></li>
    </Slide>

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
                </div>               

                <div id="hamburger_menu">
                    <button v-if="!isOpen" @click="isOpen=true" class="hamburger hamburger--slider" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
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
            isOpen: false                        
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

<style lang="scss">
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
.bm-menu {
  z-index: 1015;
  color: #fff;
  background-color: #D23166;
}
.bm-item-list li a {
    color: #fff;
    position: relative;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.5s ease;     
}
.bm-item-list li a:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    background-color: transparent;
    bottom: 0;
    left: 0;
    transition: all 0.5s ease;
}
.bm-item-list li a:hover:before{
    width: 100%;
    height: 3px;
    background-color: #fff;
}
</style>