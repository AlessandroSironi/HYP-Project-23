<script setup lang="ts">

interface Props {
  areaID?: number;
  projectName?: string;
  isArea: boolean;
}

const { areaID, projectName, isArea } = defineProps<Props>();

async function findNextArea() {
    const numAreasQuery = await useFetch<number>('/api/area/getNumAreas', {
        query: {},});
    let numAreas = numAreasQuery.data.value;
    if (numAreas === null) numAreas = 0;
    const numArea = areaID;
    let next = (numArea! + 1) % numAreas;
    if (next === 0) next = 5;

    navigateTo("/areas/" + next);
}

async function findPrevArea() {
    const numAreasQuery = await useFetch<number>('/api/area/getNumAreas', {
        query: {},});
    let numAreas = numAreasQuery.data.value;
    if (numAreas === null) numAreas = 1;
    const numArea = areaID;
    let previous = (numArea! - 1) % numAreas;
    if (previous === 0) previous = numAreas;
    navigateTo("/areas/" + previous);
};


async function findNextProject() {
    const projectNext = await useFetch<any>('/api/project/getNextProject', {
        query: {
            currentProjectName: projectName,
            },
    });
    navigateTo("/projects/" + projectNext.data.value[0].id);
}

async function findPrevProject() {
    const projectPrev =  await useFetch<any>('/api/project/getPrevProject', {
        query: {
            currentProjectName: projectName,
            },
    });
    navigateTo("/projects/" + projectPrev.data.value[0].id);
}

function handlePrevious() {
  if (isArea) findPrevArea();
  else findPrevProject();
}

function handleNext() {
  if (isArea) findNextArea();
  else findNextProject();
}

</script>

<template>
<div class="content">
    <div class="prev-next">
        <button class="btn scheme" @click="handlePrevious"><Icon name="octicon:arrow-left-16" height="30"/></button>
        <p v-if="isArea">Explore other areas</p>
        <p v-else>Explore other projects, ordered alphabetically</p>
        <button class="btn scheme" @click="handleNext"><Icon name="octicon:arrow-right-16" height="30"/></button>
    </div>
</div>
</template>

<style scoped>
.content {
    padding-top: 20px;
    padding-bottom: 20px;
}
.prev-next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.btn {
    padding: 0.75rem;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    width: 75px;
}

.scheme {
    background-color: var(--btn-color);
    color: var(--title-color);
    transition: 0.3s all ease-in;
    border: 1px solid black;
}

.scheme:hover {
    background-color: var(--accent-color);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
}

</style>
