<script setup lang="ts">
/**
 * Component name: AreaTag
 * Description: this component serves as a 
 * link to an area or to the most relevant 
 * projects page from a project 
 */

interface Props {
    area?: Area;
    is_most_relevant?: boolean;
}

const {area, is_most_relevant} = defineProps<Props>();

</script>

<template>
    <NuxtLink v-if="area" class="main-container" :to="`/areas/${area?.id}`">
        <h4  class="info-title"> {{ area?.name }} </h4>
    </NuxtLink>
    <NuxtLink v-if="is_most_relevant" class="main-container" to="/top_projects">
        <h4 class="info-title"> Most Relevant </h4>
    </NuxtLink>
</template>

<style scoped>
    .main-container{
        border-radius: 1.75rem 1.75rem 1.75rem 1.75rem;
        background-color: var(--accent-color);
        display: inline-block;
        text-decoration: none;
    }

    .info-title{
        font-weight: 500;
        color: var(--bg-color);
        margin-left: 1.25rem;
        margin-right: 1.25rem;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

</style>