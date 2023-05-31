<script setup lang="ts"></script>

<template>
    <div class="loader-container">
        <Icon name="mingcute:loading-fill" class="loader-icon" size="200" />
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
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
