<script setup lang="ts">
import { Employee } from '~/types/Employee';

useSeoMeta({
    title: 'Core Investments | Team',
    description: 'This is the team page with a list of the employees working for the company.',
});

/**
 * team page with all employees,
 * fecth data from backend and displays employees in a grid
 */

/**
 * Fecth employees function is lazy, returns:
 * employees: the Ref<Employee[]> vector used in the template
 * pending: Ref<boolean> used to display the loader while still fetching
 * error: Ref<FetchError> used to redirect to error page when there is an error while fetching
 */

const { data: employees, pending, error } = await useLazyFetch<Employee[]>('/api/employee/getAllEmployees');
if (error.value?.statusCode) handleFetchError(employees, error.value.statusCode);
</script>
<template>
    <div class="page-content">
        <section class="page-title-container">
            <h2 class="orientational-info">The team</h2>
            <h1 class="page-title">Meet our team of experts, we are here to make your company grow.</h1>
            <p> To be the company our customers want us to be , it takes an electric group of passionate operators. Get to know the people leading the way at Core Investments. </p>
        </section>

        <section class="list-container">
            <div v-if="pending"><LoaderComponent /></div>
            <div class="list" v-else>
                <div v-for="employee in employees">
                    <EmployeeCard :employee="employee" :key="employee?.id" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.page-content {
    width: var(--content-width);
    margin: 2rem auto;
}

.page-title-container {
    width: min(900px, 100%);
}
.page-title {
    font-size: 2rem;
    color: var(--title-color-accent);
}

.page-title-container * {
    margin: 1rem 0;
}

.list-container {
    margin: 3.5rem auto;
}
.list {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;
}

.list div {
    margin: 0 auto;
}
</style>
