<script setup lang="ts">
interface Props {
    error: {
        statusCode: number;
        message: string;
    };
}

const { error } = defineProps<Props>();

const handleClearError = () => {
    clearError({ redirect: '/' });
};
</script>

<template>
    <div class="container">
        <Navbar />
        <main class="main">
            <h1 class="err-code">{{ error.statusCode }}</h1>
            <h2 v-if="error.statusCode === 404">Page not found</h2>
            <h2 v-else>An error occurred</h2>
            <div class="err-links">
                <div class="btn"><button @click="handleClearError">Back to homepage</button></div>
                <div class="btn"><button @click="$router.go(-1)">Back to last valid screen</button></div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--bg-color);
}
.main {
    text-align: center;
    background-color: var(--bg-color);
}

.err-code {
    font-size: 7rem;
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
