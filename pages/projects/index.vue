<script setup lang="ts">

interface APIBody {
    projects: Project[];
    error: string;
    id: number;
}

// projects vector iterated on in template
const projects = await getAllProjects();

async function getAllProjects() {
    // the server response contains the data (if found) or an error
    const { data: serverData, error: serverError } = await useFetch<APIBody>('/api/project/getAllProjects');
    const error = serverError.value?.message;
    const projects = serverData.value?.projects;

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }
    console.log(projects);
    return projects;
}



async function getProjectById() {
    const { data: serverData, error: serverError } = await useFetch<APIBody>('/api/project/getProjectById');
    const error = serverError.value?.message;
    const project = serverData.value?.projects;

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }
    console.log(project);
    return project;
}
</script>


<template>
    <div class="list-container">
        <div class="list">
            <div v-for="project in projects">
                <ProjectCard :project="project" :key="project?.id" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.list-container {
    width: min(1000px, 90%);
    margin: 2rem auto;
}
.list {
    display: grid;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.list div {
    display: flex;
    justify-content: center;
}

</style>
