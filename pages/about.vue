<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse accusantium illum eos facere tempora ex odit magni dolorum sed maxime?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam assumenda in consequuntur temporibus fugit aliquid dolorum eum, voluptatem vero.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/IDR')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>