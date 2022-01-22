<template>
    <section id="products">       
        <Product/>
    </section>
</template>

<script>

    import Product from '@/components/parts/Product.vue'
    export default {
        name: 'Products',
        components: {
        Product
        }
    }
</script>