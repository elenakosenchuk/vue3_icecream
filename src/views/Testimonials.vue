<template>
<section id="testimonials">
    <div class="container">
        <div class="testimonials_title">
            <h3>Custumers say</h3>
        </div>        
        <carousel :settings="sliderSettings">
            <slide v-for="t in testimonialsList" :key="t.id" class="testimonials_content">
            <Testimonial :testimonial="t"/>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>       
    </div>    
</section>
</template>

<script>
    import Testimonial from '@/components/parts/Testimonial.vue'
    import axios from 'axios'
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    export default {
        name: 'Testimonials',
        components: {
        Testimonial,
        Carousel,
        Slide,
        Pagination,
        Navigation
        },
        data(){
            return {          
        testimonialsList: [],
        sliderSettings:{
                itemsToShow:1,
                itemsToScroll:1,
                wrapAround:true
            }      
        }
        },    
        created() {
        axios.get('data/testimonials.json')
            .then((response)=>{
                this.testimonialsList = response.data;
            })          
      },       
    }
    
</script>