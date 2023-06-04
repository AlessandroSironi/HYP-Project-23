<script setup lang="ts">
import { emptyStatement, numberLiteralTypeAnnotation } from '@babel/types';
import { dataToEsm } from '@rollup/pluginutils';
import { routerKey } from 'vue-router';
import { routeLocationKey } from 'vue-router';
import { Area } from '~/types/Area';
import { Employee } from '~/types/Employee';
import { Project } from '~/types/Project';

const { id } = useRoute().params;

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
if (project_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

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
if (workers_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

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

if (supervisor_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

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
if (areas_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}
const loading = computed(() => {
    if (is_project_loading.value || is_areas_loading.value || is_supervisor_loading.value || is_workers_loading.value) {
        return true;
    }
});

/* interface APIBody {
    id: number
} */

async function findNextProject(navigate:boolean) {
    try {
        const projectNext =  await useFetch<any>('/api/project/getNextProject', {
            query: {
                currentProjectName: project.value?.name,
                },
        });
    if (navigate===true) navigateTo("/projects/" + projectNext.data.value[0].id);
    return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
async function findPrevProject(navigate:boolean) {
    try {
        const projectPrev =  await useFetch<any>('/api/project/getPrevProject', {
            query: {
                currentProjectName: project.value?.name,
                },
        });
    if (navigate===true) navigateTo("/projects/" + projectPrev.data.value[0].id);
    return true;
    } catch (error) {
        console.log(error);
        return false;
    }
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
                <h4>FOUNDED BY:</h4>
                <h4>
                    <NuxtLink class="collaborator-info" to="https://rateyourmusic.com/">
                        {{ project?.founderName }} {{ project?.founderSurname }}
                    </NuxtLink>
                </h4>
            </div>

            <ComplexParagraph :image_url="project?.companyImage" :image_alt="project?.name">
                <section class="main-par">
                    <div class="collaborator-section">
                        <h4>
                            Project supervised by:
                            <NuxtLink :to="`/persons/${project?.supervisor}`" class="collaborator-info">
                                {{ supervisor?.name }} {{ supervisor?.surname }}
                            </NuxtLink>
                        </h4>
                    </div>

                    <div class="collaborator-section">
                        <h4>Other team members:</h4>
                        <div v-for="worker in workers">
                            <h4>
                                <NuxtLink class="collaborator-info" :to="`/persons/${worker?.id}`">
                                    {{ worker?.name }} {{ worker?.surname }}
                                </NuxtLink>
                            </h4>
                        </div>
                    </div>

                    <p>{{ project?.description }}</p>
                </section>
            </ComplexParagraph>

            <ComplexParagraph :is_image_rigth="true" :image_url="project?.companyLogo" :image_alt="project?.name">
                <section class="main-par">
                    <h4>LET'S HEAR FROM THEM...</h4>
                    <p>{{ project?.review }}</p>
                </section>
            </ComplexParagraph>

            <div class="prev-next-area">
            <!-- <NuxtLink :to="computedUrlPrevious">
                <GenericButton value="<- Previous" :alt-style="false" />
            </NuxtLink> -->
            <div :v-if="findNextProject">
                <GenericButton value="Next ->" :alt-style="false" @func="findNextProject(true)" />
            </div>

            <div :v-if="findPrevProject">
                <GenericButton value="<- Previous" :alt-style="false" @func="findPrevProject(true)" />
            </div>
        </div>
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
}

.main-par {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
</style>
