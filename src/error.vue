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
        <NuxtLink to="/">Back to homepage</NuxtLink>
        <NuxtLink to="/">Back to last valid screen</NuxtLink>
    </div> 
</template>

<style scoped>
main{
    text-align: center;
}
</style>
