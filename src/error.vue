<script setup>
defineProps(['error']);
</script>

<template>
    <Navbar />
    <main class="main">
        <h1 class="err-code">{{ error.statusCode }}</h1>
        <h2 v-if="error.statusCode === 404">Page not found</h2>
        <h2 v-else>An error occurred</h2>
        <div class="err-links">
            <div class="btn"><NuxtLink class="nuxt-link" to="/">Back to homepage</NuxtLink></div>
            <div class="btn"><a @click="$router.go(-1)">Back to last valid screen</a></div>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
.main {
    text-align: center;
    padding: 5rem 0;
    background-color: var(--bg-color);
}

.err-code {
    font-size: 7rem;
    margin-bottom: 2rem;
    color: var(--title-color-accent);
}

.err-links {
    padding-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    width: 45%;
    justify-content: center;
    gap: 2rem;
    margin: auto;
}

.btn {
    cursor: pointer;
}
</style>
