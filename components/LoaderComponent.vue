<script setup lang="ts">
/**
 * Component name: Loader component.
 * This icon is shown on the website
 * pages while the content is being fetched 
 * from the database, to alert the user that
 * a background action is being done.
 */
</script>

<template>
    <div class="loader-container">
        <Icon name="mingcute:loading-fill" class="loader-icon" size="100" />
    </div>
</template>

<style scoped>
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
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
