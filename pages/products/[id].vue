<template>
    <div>
        <head>
            <title>Nuxt Pcx | {{ product.title }}</title>
            <meta name="description" :content="product.description" />
        </head>
        <ProductDetails :product="product"></ProductDetails>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const { data: product } = await useFetch(uri, { key: 'id'})

    if(!product.value){
        throw createError({ statusCode: 404, message: 'Product not found', fatal: true })
    }
    
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>