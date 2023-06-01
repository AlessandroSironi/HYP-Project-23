<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  projects?: Project[];
}

const { projects } = defineProps<Props>();

const translateX = ref(-200);

const moveSlider = (direction: 'prev' | 'next') => {
  const containerWidth = (sliderContainerRef.value as HTMLElement).clientWidth;
  const projectWidth = 267;
  const gap = 70;
  const visibleProjects = Math.floor(containerWidth / (projectWidth + gap));
  const totalProjects = (projects?.length || 1);
  const maxTranslateX = (totalProjects - visibleProjects) * projectWidth;
  
  let targetX = translateX.value;
  if (direction === 'prev') {
    targetX += (projectWidth);
    targetX = Math.min(gap, targetX);
  } else if (direction === 'next') {
    targetX -= (projectWidth);
    targetX = Math.max(-maxTranslateX, targetX);
  }
  
  translateX.value = targetX;
};

const sliderContainerRef = ref<HTMLElement | null>(null);
</script>

<template>
  <main class="slider-container" ref="sliderContainerRef">
    <div class="slider" :style="{ transform: `translateX(${translateX}px)` }">
      <div
        v-for="(project, index) in projects ?? []"
        :key="project?.id"
        class="slider-item"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
    <div class="slider-controls">
        <Icon class="command-arrow" name="bxs:left-arrow" @click="moveSlider('prev')"/>
        <Icon class="command-arrow" name="bxs:right-arrow" @click="moveSlider('next')"/>
    </div>
  </main>
</template>

<style scoped>
.slider-container {
  max-width: 90%;
  padding: 1.5rem;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.7s ease-in-out;
  gap: 1.5rem;
}

.slider-item {
  flex: 0 0 auto;
}

.slider-controls {
  margin-top: 1rem;
  text-align: center;
}

.slider-controls button {
  margin: 0 0.5rem;
}

@media screen and (max-width: 768px) {
  .slider-container {
    padding: 1rem;
  }
}

.command-arrow{
    color: var(--btn-color-alt);
    margin: 1rem;
    cursor: pointer;
}
</style>
