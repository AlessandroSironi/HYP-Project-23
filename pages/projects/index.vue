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
</script>

<template>
    <div class="list-container">
        <h2 class="orientational-info">Our Projects</h2>
        <p class="paragraph-projects">Explore the projects we have developed for the companies who put their trust in us.</p>
        <div class="list">
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
