<script setup lang="ts"></script>

<template>
    <Navbar />
    <div class="main-content">
        <slot />
    </div>
    <Footer />
</template>

<style scoped>
.main-content {
    background-color: var(--bg-color);
    flex-grow: 1;
}
</style>
