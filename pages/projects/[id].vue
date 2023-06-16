<script setup lang="ts">
import { Area } from '~/types/Area';
import { Employee } from '~/types/Employee';
import { Project } from '~/types/Project';

useSeoMeta({
    title: 'Core Investments | Projects',
    description: 'This is the project page with all relevant details about a single project.',
});

const { id } = useRoute().params;
/**
 * Single project page.
 * In this page the user is presented with the information regarding
 * the project they have clicked on, such as
 * the name, the tags related to it, the founder of the external company, 
 * the names of the supervisor(s) and the worker(s) of the team of Core Venture, 
 * a description of the company, their logo, and a review of the performance of
 * Core Venture by the external company.
 * 
 * The user can navigate and explore other projects, by alphabetical order, by clicking
 * the next/previous buttons.
 */

// fetch the project information
const {
    data: project,
    pending: is_project_loading,
    error: project_error,
} = await useLazyFetch<Project>('/api/project/getProjectById', {
    query: {
        id: id,
    },
});
if (project_error.value?.statusCode) handleFetchError(project, project_error.value.statusCode);

// fetch the employees that have worked on the project
const {
    data: workers,
    pending: is_workers_loading,
    error: workers_error,
} = await useLazyFetch<Employee[]>('/api/project/getWorkingMembersByProject', {
    query: {
        id: id,
    },
});
if (workers_error.value?.statusCode) handleFetchError(workers, workers_error.value.statusCode);

// fetch the supervisor of the project
const {
    data: supervisor,
    pending: is_supervisor_loading,
    error: supervisor_error,
} = await useLazyFetch<Employee>('/api/project/getSupervisorByProject', {
    query: {
        id: id,
    },
});
if (supervisor_error.value?.statusCode) handleFetchError(supervisor, supervisor_error.value.statusCode);

// fetch the related areas
const {
    data: areas,
    pending: is_areas_loading,
    error: areas_error,
} = await useLazyFetch<Area[]>('/api/project/getAreasByProject', {
    query: {
        id: id,
    },
});
if (areas_error.value?.statusCode) handleFetchError(areas, areas_error.value.statusCode);

const loading = computed(() => {
    if (is_project_loading.value || is_areas_loading.value || is_supervisor_loading.value || is_workers_loading.value) {
        return true;
    }
});

/* interface APIBody {
    id: number
} */

async function findNextProject() {
    const projectNext = await useFetch<any>('/api/project/getNextProject', {
        query: {
            currentProjectName: project.value?.name,
        },
    });
    navigateTo('/projects/' + projectNext.data.value[0].id);
}

async function findPrevProject() {
    const projectPrev = await useFetch<any>('/api/project/getPrevProject', {
        query: {
            currentProjectName: project.value?.name,
        },
    });
    navigateTo('/projects/' + projectPrev.data.value[0].id);
}
</script>

<template>
    <main class="main-container">
        <h2 class="orientational-info">Our Projects</h2>
        <div v-if="loading">
            <LoaderComponent />
        </div>
        <div v-else>
            <h1 class="project-name">{{ project?.name }}</h1>
            <div class="area-tags">
                <AreaTag v-if="project?.mostRelevant" :is_most_relevant="true" />
                <div v-for="area in areas">
                    <AreaTag :area="area" />
                </div>
            </div>
            <div class="collaborator-section">
                <span>FOUNDED BY:</span>
                <span>
                    <NuxtLink class="collaborator-info" to="https://rateyourmusic.com/"> {{ project?.founderName }} {{ project?.founderSurname }} </NuxtLink>
                </span>
            </div>

            <ComplexParagraph :image_url="project?.companyImage" :image_alt="project?.name" :width="500" :height="300">
                <section class="main-par">
                    <div class="collaborator-section">
                        <span>
                            Project supervised by:
                            <NuxtLink :to="`/persons/${project?.supervisor}`" class="collaborator-info"> {{ supervisor?.name }} {{ supervisor?.surname }} </NuxtLink>
                        </span>
                    </div>

                    <div v-if="workers?.length !== 0" class="collaborator-section">
                        <span>Other team members:</span>
                        <div v-for="worker in workers">
                            <span>
                                <NuxtLink class="collaborator-info" :to="`/persons/${worker?.id}`"> {{ worker?.name }} {{ worker?.surname }} </NuxtLink>
                            </span>
                        </div>
                    </div>

                    <p>{{ project?.description }}</p>
                </section>
            </ComplexParagraph>

            <ComplexParagraph :is_image_rigth="true" :image_url="project?.companyLogo" :image_alt="project?.name" :width="400" :height="300">
                <section class="main-par">
                    <span>LET'S HEAR FROM THEM...</span>
                    <p>{{ project?.review }}</p>
                </section>
            </ComplexParagraph>

            <NextPrev label="Explore more projects. Alphabetically ordered" @onPrev="findPrevProject" @onNext="findNextProject" />
        </div>
    </main>
</template>

<style scoped>
.main-container {
    width: var(--content-width);
    margin: 2rem auto;
}

.collaborator-info {
    color: var(--accent-color);
    font-weight: 600;
    margin-left: 0.75rem;
}

.collaborator-section {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
}

.main-par {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.area-tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    gap: 0.7rem;
}

h4 {
    margin-top: 0.25rem;
}

.explore-text {
    color: var(--par-color);
}

span {
    color: var(--title-color);
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
