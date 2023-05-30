<script setup lang="ts">
import { Employee } from '~/types/Employee';

const { id } = useRoute().params;

// fetch the employee infoprmation
const {
    data: employee,
    pending: is_employee_loading,
    error: employee_error,
} = await useLazyFetch<Employee>('/api/employee/getEmployeeById', {
    query: {
        id: id,
    },
});
if (employee_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

// fetch the projects supervised by the employee
const {
    data: supervisedProjects,
    pending: is_supervised_loading,
    error: supervised_error,
} = await useLazyFetch<Project[]>('/api/project/getSupervisedProjects', {
    query: {
        id: id,
    },
});
if (supervised_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

// fetch the projects the employee has worked on
const {
    data: projects,
    pending: is_projects_loading,
    error: projects_error,
} = await useLazyFetch<Project[]>('/api/project/getProjectsByEmployee', {
    query: {
        id: id,
    },
});
if (projects_error.value) {
    // throw error if something went wrong during the fetch
    throw createError({ statusCode: 500, message: 'Error while fetching data from the database' });
}

// compute the fullname of the employee (useful when we display the title and orientational info)
const getEmployeeFullName = computed(() => {
    return employee.value?.name + ' ' + employee.value?.surname;
});
</script>
<template>
    <section class="main-content">
        <div v-if="is_employee_loading">
            <LoaderComponent />
        </div>
        <div v-else>
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

                        <div class="employee-description-p">{{ employee?.description }}</div>
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
        </div>

        <section class="projects">
            <div v-if="is_supervised_loading">
                <LoaderComponent />
            </div>
            <div v-else>
                <div class="employee-supervised-projects">
                    <h2 class="projects-title">Projects supervised by me</h2>
                    <div class="project-list">
                        <div class="project-card" v-for="project in supervisedProjects">
                            <ProjectCard :project="project" :key="project?.id" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="is_projects_loading">
                <LoaderComponent />
            </div>
            <div v-else>
                <div class="employee-projects">
                    <h2 class="projects-title">Projects I have worked on</h2>
                    <div class="project-list">
                        <div class="project-card" v-for="project in projects">
                            <ProjectCard :project="project" :key="project?.id" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    width: 60%;
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

.projects {
    margin: 2rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.projects-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.project-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

@media (width < 1200px) {
    .employee-bio {
        width: 100%;
    }
}

@media (width < 620px) {
    .projects-title {
        text-align: center;
    }
    .project-card {
        margin: 0 auto;
    }
}
</style>
