<script setup>
    defineProps(['error'])
</script>

<template>
    <Navbar />
    <main>
        <h1 id="err-code">{{ error.statusCode }}</h1>
        <h2 v-if="error.statusCode === 404">Page not found</h2>
        <h2 v-else>An error occurred</h2>
    </main>
    <div class="err-links">
        <div class="btn"><NuxtLink class="nuxt-link" to="/">Back to homepage</NuxtLink></div>
        <div class="btn"><a @click="$router.go(-1)">Back to last valid screen</a></div>
    </div> 
</template>

<style scoped>
main{
    text-align: center;
}

.err-links{
    display: flex;
    flex-wrap: wrap;
    width: 45%;
    justify-content: center;
    gap: 2rem;
    margin: auto;
    padding-top: 2rem;
}

.btn{
    cursor: pointer;
}

</style>
