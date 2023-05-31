<script setup lang="ts">
import { Area } from '~/types/Area';
import { Project } from '~/types/Project';

/**
 * Fecth projects function is lazy, returns:
 * employees: the Ref<Project[]> vector used in the template
 * pending: Ref<boolean> used to display the loader while still fetching
 * error: Ref<FetchError> used to redirect to error page when there is an error while fetching
 */

// types union in order to take advantage of the area array
type ProjectsBody = Project & {
    related_to: {
        area: {
            name: string;
        };
    }[];
};

const { data: projects, pending, error } = await useLazyFetch<ProjectsBody[]>('/api/project/getAllProjects');
if (error.value) {
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

const { data: areas, pending: areas_pending, error: areas_error } = await useLazyFetch<Area[]>('/api/area/getAllAreas');
if (areas_error.value) {
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

const area_name = ref('');

function changeArea(area: string) {
    area_name.value = area;
}

const filteredProjects = computed(() => {
    // Checking for values where the full list is provided
    console.log(area_name.value);

    if (area_name.value == '') {
        return projects.value;
    }

    let arr: Project[] = [];
    console.log(arr);

    if (area_name.value === 'top' && projects.value) {
        return projects.value?.filter((el) => el.mostRelevant);
    }

    let i = 0,
        j = 0;

    const allProjects = projects.value;
    if (allProjects) {
        for (i = 0; i < allProjects?.length; i++) {
            let project = allProjects[i];
            console.log('name of p: ', project.name);
            console.log('areas: ');
            for (j = 0; j < project.related_to.length; j++) {
                console.log(project.related_to[j].area.name);
                if (area_name.value === project.related_to[j].area.name) {
                    arr.push(project);
                }
            }
        }
    }

    return arr;
});
</script>

<template>
    <div class="list-container">
        <h2 class="orientational-info">Our Projects</h2>
        <p class="paragraph-projects">
            Explore the projects we have developed for the companies who put their trust in us.
        </p>
        <div v-if="areas">
            <div v-for="area in areas" :key="area.id">
                <AreaFilterChip :area="area" :is-active="false" @func="changeArea(area.name)" />
            </div>
            <AreaFilterChip :is-active="false" @func="changeArea('top')" />
            <button @click="changeArea('')">Remove</button>
        </div>

        <div v-if="pending">
            <LoaderComponent />
        </div>
        <div class="list" v-else>
            <div v-for="project in filteredProjects" class="item">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.orientational-info {
    margin-top: 2rem;
    margin-bottom: 1rem;
}
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
</style>
