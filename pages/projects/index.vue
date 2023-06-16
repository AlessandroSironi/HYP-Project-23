<script setup lang="ts">
import { Area } from '~/types/Area';
import { Project } from '~/types/Project';
import { useAreaStore } from '~/stores/areaStore';

useSeoMeta({
    title: 'Core Investments | All Projects',
    description: 'This is the projects page with a list of the projects the company has worked on.',
});

/**
 * Page with all the projects.
 * The user is presented with a grid of all the projects that 
 * Core Venture has developed for the companies. 
 * The projects can be filtered by area and by most relevant.
 */

/**
 * Fecth projects function is lazy, returns:
 * employees: the Ref<Project[]> vector used in the template
 * pending: Ref<boolean> used to display the loader while still fetching
 * error: Ref<FetchError> used to redirect to error page when there is an error while fetching
 */

// types union in order to take advantage of the area array
// this type mirrors the response of the API
type ProjectsBody = Project & {
    related_to: {
        area: {
            name: string;
        };
    }[];
};

const { data: projects, pending, error } = await useLazyFetch<ProjectsBody[]>('/api/project/getAllProjects');
if (error.value?.statusCode) handleFetchError(projects, error.value.statusCode);

const { data: areas, error: areas_error } = await useLazyFetch<Area[]>('/api/area/getAllAreas');
if (areas_error.value?.statusCode) handleFetchError(areas, areas_error.value.statusCode);

const store = useAreaStore();

function changeArea(area: string) {
    store.setAreaName(area);
}

const filteredProjects = computed(() => {
    // Checking for values where the full list is provided
    if (store.area_name == '') {
        return projects.value;
    }

    let arr: Project[] = [];

    if (store.area_name === 'top' && projects.value) {
        return projects.value?.filter((el) => el.mostRelevant);
    }

    let i = 0,
        j = 0;

    const allProjects = projects.value;

    if (allProjects) {
        for (i = 0; i < allProjects?.length; i++) {
            let project = allProjects[i];
            for (j = 0; j < project.related_to.length; j++) {
                if (store.area_name === project.related_to[j].area.name) {
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
        <h2 class="orientational-info">
            Our Projects
            <span class="area-info" v-if="store.area_name !== ''">- {{ store.area_name }}</span>
        </h2>
        <p class="paragraph-projects"> Explore the projects we have developed for the companies who put their trust in us. </p>
        <div v-if="areas" class="areas-filter">
            <h3 class="filter-title">Filter the projects</h3>
            <!--The filter was made with radio html tag in order to take advantage of the checked 
            CSS propriety to better style the chips-->

            <div class="radio-toolbar">
                <span v-for="area in areas" @click="changeArea(area.name)">
                    <input type="radio" :key="area.id" :id="area.name" name="filter" :value="area.name" v-model="store.area_name" />
                    <label :for="area.name">{{ area.name }}</label>
                </span>
                <span @click="changeArea('top')">
                    <input type="radio" id="top" name="filter" value="top" />
                    <label for="top">Most relevant</label>
                </span>
                <span class="remove-btn" @click="changeArea('')">
                    <input type="radio" id="remove" name="filter" value="remove" />
                    <label for="remove"><Icon name="ion:trash-bin" size="24px" />&#8203;</label>
                </span>
            </div>
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

.area-info {
    font-size: 1.25rem;
    color: var(--title-color);
}
.paragraph-projects {
    margin-bottom: 2rem;
}
.list-container {
    width: var(--content-width);
    margin: 2rem auto;
}

.filter-title {
    margin: 1rem 0;
    font-size: 1.25rem;
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

.areas-filter {
    margin: 2rem 0;
}

.radio-toolbar {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    --chip-bg: #efefef;
}

.radio-toolbar span {
    margin: 0.5rem 0;
}

.radio-toolbar input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
}

.radio-toolbar label {
    background-color: var(--chip-bg);
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1.25rem;
}

.radio-toolbar label:hover {
    background-color: #e1e1e1;
    transition: 0.1s ease-in all;
}

.radio-toolbar input[type='radio']:checked + label {
    outline: 1px solid var(--accent-color);
    color: var(--accent-color);
    background-color: transparent;
}

.radio-toolbar input[type='radio']:focus + label {
    outline: 1px solid var(--accent-color);
    color: var(--accent-color);
    background-color: transparent;
}

.remove-btn input[type='radio']:checked + label {
    color: var(--title-color);
    outline: 1px solid transparent;
    background-color: var(--chip-bg);
}

.remove-btn input[type='radio']:focus + label {
    color: var(--title-color);
    outline: 1px solid transparent;
    background-color: var(--chip-bg);
}
</style>
