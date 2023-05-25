<script setup lang="ts">

interface APIBody {
    areas: Area[];
    error: string;
}

// employees vector iterated on in template
const areas = await getAllAreas();

async function getAllAreas() {
    // the server response contains the data (if found) or an error
    const { data: serverData, error: serverError } = await useFetch<APIBody>('/api/area/getAllAreas');
    const error = serverError.value?.message;
    const areas = serverData.value?.areas;

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }
    console.log(areas);
    return areas;
}
</script>


<template>
    <div class="list-container">
        <!-- <h2 class="orientational-info">Areas</h2> -->
        <h2 class="orientational-info">Areas of Investment</h2>
        <p>Core Ventures aims to create strong financial returns while adding value for individuals, communities, and humanity.</p>
        <br><br>
            <div class="list">
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
