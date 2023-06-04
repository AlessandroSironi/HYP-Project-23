<script setup lang="ts">
import { Area } from '~/types/Area';

const { id } = useRoute().params;

// fetch the area information
const {
    data: area,
    pending: pending,
    error: supervised_error,
} = await useLazyFetch<Area>('/api/area/getAreaById', {
    query: {
        id: id,
    },
});
if (supervised_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

async function findNextArea() {
    const numAreasQuery = await useFetch<number>('/api/area/getNumAreas', {
        query: {},});
    let numAreas = numAreasQuery.data.value;
    if (numAreas === null) numAreas = 1;
    const numArea = area?.value?.id;
    let next = (numArea! + 1) % numAreas;
    if (next === 0) next = 1;
    navigateTo("/areas/" + next);
    return true;
}

async function findPrevArea() {
    const numAreasQuery = await useFetch<number>('/api/area/getNumAreas', {
        query: {},});
    let numAreas = numAreasQuery.data.value;
    if (numAreas === null) numAreas = 1;
    const numArea = area?.value?.id;
    let previous = (numArea! - 1) % numAreas;
    if (previous === 0) previous = numAreas;
    navigateTo("/areas/" + previous);
}
</script>

<template>
    <section class="content">
        <h2 class="orientational-info">Areas of Investment</h2>
        <div v-if="pending">
            <LoaderComponent />
        </div>
        <div v-else>
            <h1>{{ area?.name }}</h1>
            <p class="area-description">{{ area?.description }}</p>
            <div class="area-image-div">
                <nuxt-img class="area-image" :src="area?.pic" :placeholder="[100, 50, 10]" />
            </div>
            <div class="area-card">
                <InfoCard title="Revenues" icon_locator="solar:dollar-bold">
                    <p class="text-container">{{ area?.card_revenue }}</p>
                </InfoCard>
                <InfoCard title="Why" icon_locator="ph:question-fill">
                    <p class="text-container">{{ area?.card_why }}</p>
                </InfoCard>
                <InfoCard title="The Future" icon_locator="iconoir:time-zone">
                    <p class="text-container">{{ area?.card_future }}</p>
                </InfoCard>
            </div>
        </div>
    </section>
    <div class="colored-bar description-2-div">
        <p class="area-description-2">{{ area?.description_2 }}</p>
    </div>

    <section class="content">
        <div class="discover-projects-div">
            <h2>Are you interested in investing in this area?</h2>
            <GenericLink url="/projects" name="Discover Projects" :alt-style="true" />
        </div>

        <NextPrev
                @previous="findPrevArea()"
                @next="findNextArea()">
                <p class="explore-text">Explore other areas</p>
        </NextPrev>
    </section>
</template>

<style scoped>
.area-description {
    color: var(--par-color);
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: justify;
}

.area-description-2 {
    color: var(--par-color-alt);
    width: var(--content-width);
    text-align: justify;
}

.description-2-div {
    display: flex;
    justify-content: center;
}

.area-image {
    width: min(100%, 1000px);
    border-radius: 1.25rem 1.25rem 0 1.25rem;
}

.area-image-div,
.area-card,
.discover-projects-div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 30px;
}

.text-container {
    text-align: center;
    padding-left: 0.5rem;
    padding-bottom: 0.75rem;
    padding-right: 0.5rem;
    color: var(--par-color);
}

.explore-text {
    color: var(--par-color);
}
</style>
