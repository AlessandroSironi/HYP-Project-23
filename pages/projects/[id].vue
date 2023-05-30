<script setup lang="ts">
import { Stringifier } from 'postcss';
import getAreasByProjects from '~/server/api/project/getAreasByProject.js';

    const { id } = useRoute().params;

    interface APIBodyProject {
        project: Project;
        error: string;
    }

    //apibody areas
    interface APIBodyAreas {
        areas: Area[];
        error: string;
    }

    //supervisor ??? rip
    interface APIBodyWorkers {
        workers: Employee[];
        error: string;
    }

    const project = ref(await getProject());
    const areas = ref(await getAreasByProject());
    const workers = ref(await getWorkers());

    async function getProject() {
        const { data: serverData, error: serverError } = await useFetch<APIBodyProject>('/api/project/getProjectById', {
            query: {
                id: id,
            },
    });
    
    const error = serverError.value?.message;
    const project = serverData.value?.project;
    console.log(project);

    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return project;

}

async function getAreasByProject() {
    const { data: serverData, error: serverError } = await useFetch<APIBodyAreas>(
        '/api/project/getAreasByProject',
        {
            query: {
                id: id,
            }
        }
    );

    const error = serverError.value?.message;
    const areas = serverData.value?.areas;
    console.log('areas by project: ', areas);

    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return areas;
}

async function getWorkers(){
    const { data: serverData, error: serverError } = await useFetch<APIBodyWorkers>(
        '/api/project/getWorkingMembersByProject',
        {
            query: {
                id: id,
            }
        }
    );

    const error = serverError.value?.message;
    const workers = serverData.value?.workers;

    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return workers;
}

</script>

<template>
    <main class="main-container">
        <h2 class="orientational-info">Our Projects</h2>
        <h1 class="project-name">{{ project?.name }}</h1>
        <div class="area-tags">
            <AreaTag v-if="project?.mostRelevant" :is_most_relevant="true" />
            <div v-for="area in areas">
                <AreaTag :area="area" />
            </div>
        </div>
        <div class="collaborator-section">
            <h4> FOUNDED BY:</h4>
            <h4 class="collaborator-info"><NuxtLink to="https://rateyourmusic.com/">{{project?.founderName}} {{ project?.founderSurname }}</NuxtLink></h4>
        </div>
        
        <ComplexParagraph :image_url="project?.companyImage" :image_alt="project?.name">
            <section class="main-par">
                <div class="collaborator-section">
                    <h4>Project supervised by: <NuxtLink :to="`/persons/${project?.supervisor}`">
                        aaaa
                    </NuxtLink></h4>
                </div>
                
                <div class="collaborator-section">
                    <h4>Other team members:</h4>
                    <div v-for="worker in workers"><h4><NuxtLink class="collaborator-info" :to="`/persons/${worker?.id}`">
                        {{ worker?.name }} {{ worker?.surname }}
                    </NuxtLink></h4></div>
                </div>
    
                <p>{{ project?.description }}</p>
            </section>  
        </ComplexParagraph>

        <ComplexParagraph :is_image_rigth="true" :image_url="project?.companyLogo" :image_alt="project?.name">
            <section class="main-par">
                <h4>LET'S HEAR FROM THEM...</h4>
                <p> {{ project?.review }} </p>
            </section>
        </ComplexParagraph>
    </main>
</template>

<style scoped>
    .main-container{
        width: var(--content-width);
        margin: 2rem auto;
    }

    .collaborator-info{
        color: var(--accent-color);
        font-weight: 600;
        margin-left: 0.75rem;
    }

    .collaborator-section{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .main-par{
        display: flex;
        flex-direction: column;
    }

    .area-tags{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
        gap: 0.7rem;
    }

</style>
