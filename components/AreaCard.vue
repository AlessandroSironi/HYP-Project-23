<script setup lang="ts">
/**
 * Component name: EmployeeCard
 * Description: this is the card used to display
 * an Employee in the "Team" page, each card
 * is a link to the single Employee page
 *
 */

// structure of the component props, are inferred during defineProps
interface Props {
    area: Area;
}

const { area } = defineProps<Props>();
</script>

<template>
    <NuxtLink class="area-card-container" to="/">
        <nuxt-img class="area-card-image" :src="area?.pic" :alt="area?.name" />
        <div class="area-card-info-box">
            <div class="area-card-info">
                <p class="area-name">{{ area?.name }}</p>
                <p class="area-description">{{ area?.description }}</p>
                <br>
                <GenericButton value="Discover more" :alt-style="false" />
            </div>
            <!-- <button class="area-link"><Icon name="material-symbols:arrow-forward-ios-rounded" /></button> -->
        </div>
    </NuxtLink>
</template>

<style scoped>
.area-card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0.1rem 0.2rem 0.5rem #888888;
    border-radius: 1.25rem 1.25rem 0 1.25rem;
    background-color: transparent;
    text-decoration: none;
    transition: 0.3s ease-in all;
    overflow: hidden;
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
    width: min(350px, 90%);
    height: auto;
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
    flex: 1 1 auto;
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
}

@media (max-width: 800px) { /*768px*/
  .area-card-container {
    flex-direction: column; /* Switch to a column layout */
  }
}
</style>
