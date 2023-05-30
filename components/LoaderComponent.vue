<script setup lang="ts"></script>

<template>
    <div class="loader-container">
        <Icon name="mingcute:loading-fill" class="loader-icon" size="300" />
    </div>
</template>

<style scoped>
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
}

.loader-icon {
    color: var(--accent-color);
    animation: spin 2.5s linear infinte;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
