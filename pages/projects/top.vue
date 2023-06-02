<script setup lang="ts">
import { Project } from '~/types/Project';

interface APIBody {
    projects: Project[];
    error: string;
    id: number;
}

// projects vector iterated on in template
const projects = await getMostRelevantProjects();

async function getMostRelevantProjects() {

    const { data: serverData, error: serverError } = await useFetch<APIBody>('/api/project/getMostRelevantProjects');
    const error = serverError.value?.message;
    const projects = serverData.value?.projects;

    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }
    console.log(projects);
    return projects;
}
</script>

<template>
    <main class="content-div">
        <div class="info-header">
            <h2 class="orientational-info">Top Projects</h2>
            <h1>Our most successful stories</h1>
            <p class="header-text">Core Ventures, a leading venture capital firm, has cultivated a remarkable track record in green tech, health tech, and artificial intelligence startups. Our portfolio boasts groundbreaking projects revolutionizing industries, leveraging sustainable practices, advancing healthcare, and pushing the boundaries of AI innovation.</p>
            <div class="top-p-img-div">
                <NuxtImg class="top-p-img" src="https://nwgklsfwmhatudgymnvk.supabase.co/storage/v1/object/sign/resources/projects/top_proj_img.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvcHJvamVjdHMvdG9wX3Byb2pfaW1nLndlYnAiLCJpYXQiOjE2ODU0NjQwMDgsImV4cCI6MS4wMDAwMDAwMDAwMDE2ODU1ZSsyMX0.cGjEGYN966MY2cyID6BFT6iSJAUuKrixr6JYOqk34h0&t=2023-05-30T16%3A26%3A49.719Z"/>
            </div>
            <p>Core Ventures continues to drive innovation in the tech landscape with its strategic investments in green tech, health tech, and artificial intelligence. Our successful projects are reshaping industries, improving sustainability, enhancing healthcare outcomes, and pushing the boundaries of AI capabilities, solidifying our position as a trailblazer in the venture capital space.</p>
        </div>

    <section class="info-card-section">
        <InfoCard icon_locator="jam:hammer-f" title="Impactful Stories">
            <p  class="text-container">Core Ventures-backed startups are driving transformative impact across diverse tech sectors.</p>
        </InfoCard>
        <InfoCard icon_locator="mdi:flame-circle" title="Success Oriented">
            <p class="text-container">Core Ventures is driven by a relentless pursuit of success in every investment.</p>
        </InfoCard>
        <InfoCard icon_locator="fa:handshake-o" title="Trust: a Priority">
            <p class="text-container">Trust is Core Ventures' top priority, fostering strong relationships with entrepreneurs and investors.</p>
        </InfoCard>
    </section>

    <div class="carousel-div">
        <Carousel :projects="projects" />
    </div>

    </main>
</template>

<style scoped>
    .content-div{
        width: var(--content-width);
        margin: 2.5rem auto;
        display: flex;
        flex-direction: column;
    }
    .orientational-info {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .header-text{
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .top-p-img{
        max-width: min(1000px, 90%);
        border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
    }

    .top-p-img-div{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .info-card-section{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.25rem;
    }

    .text-container{
        text-align: center;
        padding-left: 0.5rem;
        padding-bottom: 0.75rem;
        padding-right: 0.5rem;
        color: var(--par-color);
    }

    .carousel-div{
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
        display: flex;
        justify-content: center;
    }
</style>
