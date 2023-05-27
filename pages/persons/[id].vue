<script setup lang="ts">
const { id } = useRoute().params;

interface APIBodyEmpLoyee {
    employee: Employee;
    error: string;
}
interface APIBodyProjects {
    projects: Project[];
    error: string;
}

const employee = ref(await getEmployee());
const supervisedProjects = ref(await getSupervisedProjects());

async function getEmployee() {
    const { data: serverData, error: serverError } = await useFetch<APIBodyEmpLoyee>('/api/employee/getEmployeeById', {
        query: {
            id: id,
        },
    });

    const error = serverError.value?.message;
    const employee = serverData.value?.employee;
    //console.log('employee: ', employee);

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return employee;
}

async function getSupervisedProjects() {
    const { data: serverData, error: serverError } = await useFetch<APIBodyProjects>(
        '/api/project/getSupervisedProjects',
        {
            query: {
                id: id,
            },
        }
    );

    const error = serverError.value?.message;
    const projects = serverData.value?.projects;
    console.log('projects: ', projects);

    //TODO: fix the error with something better than console.log()
    if (error) {
        console.log('error while fetching:', error);
        return undefined;
    }

    return projects;
}

const getEmployeeFullName = computed(() => {
    return employee.value?.name + ' ' + employee.value?.surname;
});
</script>
<template>
    <section class="main-content">
        <h2 class="orientational-info">
            The Team:
            <span class="employee-info">{{ getEmployeeFullName }}</span>
        </h2>

        <ComplexParagraph :image_url="employee?.pic" :image_alt="getEmployeeFullName">
            <div class="employee-bio">
                <div class="employee-header">
                    <h1 class="employee-name">{{ getEmployeeFullName }}</h1>
                    <h2 class="employee-role">{{ employee?.role }}</h2>
                </div>
                <div class="employee-description">
                    <h3 class="employee-description-title">WHO AM I?</h3>
                    <p class="employee-description-p">{{ employee?.description }}</p>
                </div>
                <div class="employee-contacts">
                    <p>
                        <span class="bolder">email me at:</span>
                        <NuxtLink to="/" class="contacts-links">{{ employee?.mail }}</NuxtLink>
                    </p>
                    <SocialButton icon="uil:linkedin" url="https://www.linkedin.com" text="Find me on LinkedIn" />
                </div>
            </div>
        </ComplexParagraph>
        <section class="employee-supervised-projects"></section>
        <section class="employee-projects"></section>
    </section>
</template>

<style scoped>
.main-content {
    margin: 2rem auto;
    width: var(--content-width);
}

.employee-info {
    font-size: 1.25rem;
    color: var(--title-color);
}

.employee-bio {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    max-width: 650px;
}

.employee-name {
    font-size: 2.75rem;
}

.employee-role {
    color: var(--accent-color);
    font-size: 1.75rem;
}
.employee-contacts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: min(400px, 100%);
}
.contacts-links {
    color: var(--accent-color);
    font-weight: 600;
}
.bolder {
    font-weight: 600;
}

.employee-description-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
</style>
