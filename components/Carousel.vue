<script setup lang="ts">
/**
 * Component name: Carousel
 * Description: this component will display
 * the most relevant projects in a carousel-like
 * fashion in the "Top Projects" page.
 */   

    interface Props {
        projects?: Project[];
    }

    const {projects} = defineProps<Props>();

    
 
</script>

<template>
    <main class="slider-container">
        <div class="slider">
            <ProjectCard v-for="project in projects" :project="project" />
        </div>
    </main>
</template>

<style scoped>
.slider-container {
    width: var(--content-width);
    overflow-x: hidden;
    padding: 1.5rem;
  }
  .slider {
    display: flex;
    gap: 1.25rem;
    transition: transform 0.7s ease-in-out;
  }
</style>