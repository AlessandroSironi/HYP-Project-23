<script setup lang="ts">
import { Area } from '~/types/Area';

/**
 * Fecth employees function is lazy, returns:
 * employees: the Ref<Area[]> vector used in the template
 * pending: Ref<boolean> used to display the loader while still fetching
 * error: Ref<FetchError> used to redirect to error page when there is an error while fetching
 */

const { data: areas, pending, error } = await useLazyFetch<Area[]>('/api/area/getAllAreas');
if (error.value?.statusCode) handleFetchError(areas, error.value.statusCode);
</script>

<template>
    <div class="list-container">
        <!-- <h2 class="orientational-info">Areas</h2> -->
        <h2 class="orientational-info">Areas of Investment</h2>
        <p>
            Core Ventures aims to create strong financial returns while adding value for individuals, communities, and
            humanity.
        </p>
        <br />
        <br />
        <div v-if="pending">
            <LoaderComponent />
        </div>
        <div class="list" v-else>
            <div v-for="area in areas">
                <AreaCard :area="area" :key="area?.id" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.list-container {
    width: var(--content-width);
    margin: 2rem auto;
}
.list {
    display: flex;
    flex-direction: column;
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.list div {
    display: flex;
    justify-content: center;
}
</style>
