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
        <h3> FOUNDED BY: 
            <div class="collaborator-info"><NuxtLink to="/">{{project?.founderName}} {{ project?.founderSurname }}</NuxtLink></div>
        </h3>
        <ComplexParagraph :image_url="project?.companyImage" :image_alt="project?.name">
            <h3>Project supervised by: 
                <NuxtLink></NuxtLink>
            </h3>
            <h3>Project supervised by: 
                <NuxtLink></NuxtLink>
            </h3>
            <p>{{ project?.description }}</p>
        </ComplexParagraph>

        <ComplexParagraph :is_image_rigth="true" :image_url="project?.companyLogo" :image_alt="project?.name">
            <h3>LET'S HEAR FROM THEM...</h3>
            <p> {{ project?.review }} </p>
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
    }

</style>
