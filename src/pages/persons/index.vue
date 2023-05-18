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
    const { data: serverData, error: serverError } = await useLazyFetch<APIBody>('/api/employee/getAllEmployees');
    const error = serverError.value?.message;
    const employees = serverData.value?.employees;

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }
    return employees;
}
</script>
<template>
    <div class="list-container">
        <div class="list">
            <div v-for="employee in employees">
                <EmployeeCard :employee="employee" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.list-container {
    width: min(1000px, 90%);
    margin: 2rem auto;
}
.list {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.list div {
    display: flex;
    justify-content: center;
}
</style>
