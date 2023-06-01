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

    // Store the current translateX value of the slider
    const translateX = ref(-195);

    // Move the slider based on the hovered project
    const moveSlider = (event: MouseEvent, index: number) => {
        const containerWidth = (event.currentTarget as HTMLElement).clientWidth;
        const projectWidth = containerWidth / (projects?.length || 1);
        const hoverMultiplier = 2.2;

        // Adjust the projectWidth and targetX values
        const adjustedProjectWidth = projectWidth * hoverMultiplier;
        const targetX = -(index * adjustedProjectWidth) + containerWidth / 2 - adjustedProjectWidth / 2;

        translateX.value = targetX;
    };
</script>

<template>
    <main class="slider-container" @mouseleave="translateX = -195">
        <div class="slider" :style="{ transform: `translateX(${translateX}px)` }">
          <div
            v-for="(project, index) in projects ?? []"
            :key="project?.id"
            class="slider-item"
            @mouseover="moveSlider($event, index)"
          >
            <ProjectCard :project="project" />
          </div>
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
    transition: transform 0.5s ease-in-out;
  }
</style>