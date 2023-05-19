<template>
    <div class="container">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
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
</style>
