<script setup lang="ts">
import { Project } from '~/types/Project';

/**
 * Fecth projects function is lazy, returns:
 * employees: the Ref<Project[]> vector used in the template
 * pending: Ref<boolean> used to display the loader while still fetching
 * error: Ref<FetchError> used to redirect to error page when there is an error while fetching
 */

const { data: projects, pending, error } = await useLazyFetch<Project[]>('/api/project/getAllProjects');
if (error.value) {
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}
</script>

<template>
    <div class="list-container">
        <h2 class="orientational-info">Our Projects</h2>
        <p class="paragraph-projects">
            Explore the projects we have developed for the companies who put their trust in us.
        </p>
        <div v-if="pending">
            <LoaderComponent />
        </div>
        <div class="list" v-else>
            <div v-for="project in projects" class="item">
                <ProjectCard :project="project" :key="project?.id" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.paragraph-projects {
    margin-bottom: 2rem;
}
.list-container {
    width: var(--content-width);
    margin: 2rem auto;
}
.list {
    display: grid;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.item {
    display: flex;
    justify-content: center;
}

.orientational-info {
    margin-top: 2rem;
    margin-bottom: 1rem;
}
</style>
