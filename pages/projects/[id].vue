<script setup lang="ts">
    const { id } = useRoute().params;

    interface APIBodyProject {
        project: Project;
        error: string;
    }

    //apibody areas
    //supervisor ??? rip

    const project = ref(await getProject());

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

</script>

<template>
    <main class="main-container">
        <h2 class="orientational-info">Our Projects</h2>
        <h1 class="project-name">{{ project?.name }}</h1>
        <div class="collaborator-section">
            <h4> FOUNDED BY:</h4>
            <h4 class="collaborator-info"><NuxtLink to="https://rateyourmusic.com/">{{project?.founderName}} {{ project?.founderSurname }}</NuxtLink></h4>
        </div>
        
        <ComplexParagraph :image_url="project?.companyImage" :image_alt="project?.name">
            <section class="main-par">
                <div class="collaborator-section">
                    <h4>Project supervised by:</h4>
                    <h4><NuxtLink class="collaborator-info"></NuxtLink></h4>
                </div>
                
                <div class="collaborator-section">
                    <h4>Other team members:</h4>
                    <h4><NuxtLink class="collaborator-info"></NuxtLink></h4>
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

</style>
