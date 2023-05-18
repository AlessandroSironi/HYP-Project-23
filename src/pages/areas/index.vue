<script setup lang="ts">

interface APIBody {
    areas: Area[];
    error: string;
}

// employees vector iterated on in template
const areas = await getAllAreas();

async function getAllAreas() {
    // the server response contains the data (if found) or an error
    const { data: serverData, error: serverError } = await useLazyFetch<APIBody>('/api/area/getAllAreas');
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
    <div></div>
</template>

<style scoped></style>
