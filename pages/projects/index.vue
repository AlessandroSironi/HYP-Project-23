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
    <div></div>
</template>

<style scoped></style>
