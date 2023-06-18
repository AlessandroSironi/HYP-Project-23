<script setup lang="ts">
import { Project } from '~/types/Project';


/**
 * Page of the top projects.
 * This special page presents the 'jewels' projects of Core Venture, 
 * the ones most successful. 
 * The user is presented with a brief presentation of the most successful stories
 * of the company and a few info cards.
 * 
 * The projects are shown in a navigable carousel, a responsibe component that works on 
 * mobile too (with the support for gestures in touchscreen devices), to elevete their importance.
 */

useSeoMeta({
    title: 'Core Investments | Top Projects',
    description: 'This is the top projects page with a small presentation of the most relevant projects.',
});

// projects vector iterated on in template
const { data: projects, error } = await useFetch<Project[]>('/api/project/getMostRelevantProjects');
if (error.value?.statusCode) handleFetchError(projects, error.value.statusCode);
</script>

<template>
    <main class="content-div">
        <div class="info-header">
            <h2 class="orientational-info">Top Projects</h2>
            <h1>Our most successful stories</h1>
            <p class="header-text"> Core Ventures, a leading venture capital firm, has cultivated a remarkable track record in green tech, health tech, and artificial intelligence startups. Our portfolio boasts groundbreaking projects revolutionizing industries, leveraging sustainable practices, advancing healthcare, and pushing the boundaries of AI innovation. </p>
            <div class="top-p-img-div">
                <NuxtImg class="top-p-img" src="img/projects/top_proj_img.webp" alt="Team working on our top projects" />
            </div>
            <p> Core Ventures continues to drive innovation in the tech landscape with its strategic investments in green tech, health tech, and artificial intelligence. Our successful projects are reshaping industries, improving sustainability, enhancing healthcare outcomes, and pushing the boundaries of AI capabilities, solidifying our position as a trailblazer in the venture capital space. </p>
        </div>

        <section class="info-card-section">
            <InfoCard icon_locator="jam:hammer-f" title="Impactful Stories">
                <p class="text-container"> Core Ventures-backed startups are driving transformative impact across diverse tech sectors. </p>
            </InfoCard>
            <InfoCard icon_locator="mdi:flame-circle" title="Success Oriented">
                <p class="text-container"> Core Ventures is driven by a relentless pursuit of success in every investment. </p>
            </InfoCard>
            <InfoCard icon_locator="fa:handshake-o" title="Trust: a Priority">
                <p class="text-container"> Trust is Core Ventures' top priority, fostering strong relationships with entrepreneurs and investors. </p>
            </InfoCard>
        </section>

        <div v-if="projects" class="carousel-div">
            <Carousel :projects="projects" />
        </div>
    </main>
</template>

<style scoped>
.content-div {
    width: var(--content-width);
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
}
.orientational-info {
    margin-bottom: 1rem;
}

.header-text {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
}

.top-p-img {
    max-width: min(1000px, 90%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
}

.top-p-img-div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.info-card-section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.25rem;
}

.text-container {
    text-align: center;
    padding-left: 0.5rem;
    padding-bottom: 0.75rem;
    padding-right: 0.5rem;
    color: var(--par-color);
}

.carousel-div {
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    display: flex;
    justify-content: center;
}
</style>
