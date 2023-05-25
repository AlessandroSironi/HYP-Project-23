<script setup lang="ts">
/**
 * team page with all employees,
 * fecth data from backend and displays employees in a grid
 */

// interface used to infer type while fetching
interface APIBody {
    employees: Employee[];
    error: string;
}

// employees vector iterated on in template
const employees = await getEmployees();

async function getEmployees() {
    // the server response contains the data (if found) or an error
    const { data: serverData, error: serverError } = await useFetch<APIBody>('/api/employee/getAllEmployees');
    const error = serverError.value?.message;
    const employees = serverData.value?.employees;
    console.log('employees: ', employees);

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return employees;
}
</script>
<template>
    <div class="page-content">
        <section class="page-title-container">
            <h2 class="orientational-info">The team</h2>
            <h1 class="page-title">Meet our team of experts, we are here to make your company grow.</h1>
            <p>To be the company our customers want us to be , it takes an electric group of passionate operators. Get to know the people leading the way at Core Investments.</p>
        </section>

        <section class="list-container">
            <div class="list">
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
