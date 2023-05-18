<script setup lang="ts">
interface Props {
    employee: Employee;
}

const { employee } = defineProps<Props>();
</script>

<template>
    <NuxtLink class="employee-card-container" to="/">
        <img class="employee-card-image" :src="employee?.pic" :alt="employee?.name" />
        <div class="employee-card-info-box">
            <div class="employee-card-info">
                <p class="employee-name">{{ employee?.name }} {{ employee?.surname }}</p>
                <p class="employee-role">{{ employee?.role }}</p>
            </div>
            <button class="employee-link"><Icon name="material-symbols:arrow-forward-ios-rounded" /></button>
        </div>
    </NuxtLink>
</template>

<style scoped>
.employee-card-container {
    display: flex;
    flex-direction: column;
    width: min(250px, 90%);
    box-shadow: 0.1rem 0.2rem 0.5rem #888888;
    border-radius: 1.25rem 1.25rem 0 1.25rem;
    background-color: transparent;
    text-decoration: none;
    transition: 0.3s ease-in all;
}

.employee-card-container:hover {
    box-shadow: 0.1rem 0.5rem 1.2rem #888888;
    transition: 0.3s ease-in all;
}
.employee-card-image-box {
    background-color: transparent;
    border-radius: 1.25rem 1.25rem 0 0;
}
.employee-card-image {
    width: 100%;
    border-radius: 1.25rem 1.25rem 0 0;
}

.employee-card-info-box {
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 1.25rem;
    color: var(--title-color);
    min-height: 5.5rem;
}

.employee-card-info {
    background-color: var(--par-color-alt);
    padding: 1rem 0rem 1rem 1rem;
    border-radius: 0 0 0 1.25rem;
    font-weight: 500;
}

.employee-role {
    color: var(--accent-color);
    font-weight: 400;
    font-size: 0.8rem;
}

.employee-link {
    border: 0;
    background-color: var(--accent-color);
    color: var(--bg-color);
    max-width: 4rem;
    width: 100%;
    cursor: pointer;
}
</style>
