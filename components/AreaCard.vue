<script setup lang="ts">
import { Area } from '~/types/Area';
import { useAreaStore } from '~/stores/areaStore';

/**
 * Component name: AreaCard
 * Description: this is the card used to display
 * an Area in the "Areas" page. Each card
 * is a link to the single area page.
 */

// Structure of the component props, inferred during defineProps
interface Props {
    area: Area;
}

const { area } = defineProps<Props>();

const areaLink = computed(() => {
    return `/areas/${area.id}`;
});

//Function that allows to display the projects page with the active filter.
function goToRelatedProjects() {
    const store = useAreaStore();
    store.setAreaName(area.name);
    navigateTo('/projects');
}
</script>

<template>
    <div class="area-card-container" to="/">
        <nuxt-img
            sizes="xs:240px, sm:80vw, md:90vw, lg:350px"
            class="area-card-image"
            :src="area?.pic"
            :alt="area?.name"
        />
        <div class="area-card-info-box">
            <div class="area-card-info">
                <p class="area-name">{{ area?.name }}</p>
                <p class="area-description">{{ area?.description }}</p>
            </div>
            <div class="area-discover-wrapper">
                <GenericLink :url="areaLink" name="Discover more" :alt-style="true" />
                <GenericButton value="Discover projects" :alt-style="false" @func="goToRelatedProjects()" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.area-card-container {
    min-width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0.1rem 0.2rem 0.5rem #888888;
    border-radius: 1.25rem 1.25rem 0 1.25rem;
    background-color: transparent;
    text-decoration: none;
    transition: 0.3s ease-in all;
    overflow: hidden;
    min-height: 300px;
}

.area-card-container:hover {
    box-shadow: 0.1rem 0.5rem 1.2rem #888888;
    transition: 0.3s ease-in all;
}
.area-card-image-box {
    background-color: transparent;
    margin-right: 10px;
}
.area-card-image {
    border-radius: 1.25rem 1.25rem 0 1.25rem;
    margin: 20px;
}

.area-card-info-box {
    border-radius: 0 0 1.25rem;
    color: var(--title-color);
    margin: 20px;
}

.area-card-info {
    background-color: var(--par-color-alt);
    padding: 1rem 0rem 1rem 1rem;
}

.area-link {
    border: 0;
    background-color: var(--accent-color);
    color: var(--bg-color);
    width: 100%;
    cursor: pointer;
}

.area-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.area-description {
    font-weight: 400;
    text-align: justify;
    margin-right: 20px;
}

.area-discover-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    margin-top: 2rem;
    flex-wrap: wrap;
}

@media (max-width: 1000px) {
    /*768px*/
    .area-card-container {
        flex-direction: column; /* Switch to a column layout */
    }

    .area-discover-wrapper {
        justify-content: center;
    }
}
</style>
