<script setup lang="ts">
import { Project } from '~/types/Project';

/**
 * Component name: Carousel
 * Description: this component shows
 * the ProjectCards of all projects that are
 * marked as most relevant in a slideshow. It is
 * possible to move through the slideshow by clicking
 * the arrows or by dragging on mobile.
 */

// Structure of the component props, inferred during defineProps
interface Props {
    projects: Project[];
}

const { projects } = defineProps<Props>();

const translateX = ref(-200);

const startTouchX = ref(0);
const currentTouchX = ref(0);
const isDragging = ref(false);

const moveSlider = (direction: 'prev' | 'next') => {
    const containerWidth = (sliderContainerRef.value as HTMLElement).clientWidth;
    const projectWidth = 267;
    const gap = 70;
    const visibleProjects = Math.floor(containerWidth / (projectWidth + gap));
    const totalProjects = projects?.length || 1;
    const maxTranslateX = (totalProjects - visibleProjects) * projectWidth;

    let targetX = translateX.value;
    if (direction === 'prev') {
        targetX += projectWidth;
        targetX = Math.min(gap, targetX);
    } else if (direction === 'next') {
        targetX -= projectWidth;
        targetX = Math.max(-maxTranslateX, targetX);
    }

    translateX.value = targetX;
};

const sliderContainerRef = ref<HTMLElement | null>(null);

// Handle touch events
const handleTouchStart = (event: TouchEvent) => {
    isDragging.value = true;
    startTouchX.value = event.touches[0].clientX;
};

const handleTouchMove = (event: TouchEvent) => {
    if (isDragging.value) {
        currentTouchX.value = event.touches[0].clientX;
        const deltaX = currentTouchX.value - startTouchX.value;
        translateX.value += deltaX;
        startTouchX.value = currentTouchX.value;
    }
};

const handleTouchEnd = () => {
    isDragging.value = false;
};

onMounted(() => {
    // Attach touch event listeners
    const container = sliderContainerRef.value;
    if (container) {
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);
    }
});
</script>

<template>
    <main
        class="slider-container"
        ref="sliderContainerRef"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
        <div class="slider" :style="{ transform: `translateX(${translateX}px)` }">
            <div v-for="(project, index) in projects ?? []" :key="project?.id" class="slider-item">
                <ProjectCard :project="project" />
            </div>
        </div>
        <div class="slider-controls">
            <Icon class="command-arrow" name="bxs:left-arrow" @click="moveSlider('prev')" />
            <Icon class="command-arrow" name="bxs:right-arrow" @click="moveSlider('next')" />
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

.command-arrow {
    color: var(--btn-color-alt);
    margin: 1rem;
    cursor: pointer;
}
</style>
