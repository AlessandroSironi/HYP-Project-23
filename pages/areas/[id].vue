<script setup lang="ts">

const { id } = useRoute().params;

interface APIBodyArea {
    area: Area;
    error: string;
}

const area = ref(await getArea());

async function getArea() {
    const { data: serverData, error: serverError } = await useFetch<APIBodyArea>('/api/area/getAreaById', {
        query: {
            id: id,
        },
    });

    const error = serverError.value?.message;
    const area = serverData.value?.area;

    console.log("Area:" , area);

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return area;
} 
 
const computerdUrl = computed(() => {
    const numAreas = 5;
    
});
</script>

<template>
    <section class="content">
        <h2 class="orientational-info">Areas of Investment</h2>
        <h1>{{ area?.name }}</h1>
        <p class="area-description">{{ area?.description }}</p>
        <div class="area-image-div">
            <nuxt-img class="area-image" :src="area?.pic" />
        </div>
        <div class="area-card">
            <InfoCard title="Revenues" icon_locator="solar:dollar-bold"  info_text=""/> 
            <InfoCard title="Why" icon_locator="ph:question-fill"  info_text=""/>
            <InfoCard title="The Future" icon_locator="iconoir:time-zone"  info_text=""/>
        </div>

        <div class="discover-projects-div">
            <h2>Are you interested in investing in this area?</h2>
            <GenericButton value="Discover Projects" alt-style="false"/>
        </div>

        <div class="prev-next-area">
            <GenericLink name="Previous Area" alt-style="true" url="{[computedUrl}}" />
        </div>
    </section>
</template>

<style scoped>
.area-description {
    color: var(--par-color);
    margin-top: 30px;
    margin-bottom: 30px;
}

.area-image {
    width: min(100%, 1000px);
    border-radius: 1.25rem 1.25rem 0 1.25rem;
}

.area-image-div, .area-card, .discover-projects-div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 20px;
}
</style>