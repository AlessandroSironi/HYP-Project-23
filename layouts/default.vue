<script setup lang="ts"></script>
<!-- Default layout.
     This layout is used for all the pages.
     Shows the Navbar at the top, and the footer at the bottom
     of the screen.
-->
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
}
</style>
