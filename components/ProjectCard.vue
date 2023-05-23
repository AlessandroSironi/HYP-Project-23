<script setup lang="ts">
/**
 * Component name: ProjectCard
 * Description: this is the card used to display
 * a single Project in the "Projects" page, as well as in
 * each individual *Person* page.
 * Each card is a link to the project's page
 **/

 interface Props {
    project: Project;
 }

 const { project } = defineProps<Props>();
 </script>

 <template>
    <NuxtLink class="project-card-maindiv" to="/">
        <nuxt-img height="150" class="project-logo-img" :src="project?.companyLogo" :alt="project?.name"/>
        <div class="project-card-infos">
            <p class="project-name">{{ project?.name }}</p>
            <p>Year invested: {{ project?.year }}</p>
            <p class="see-more-project-link">See more ></p>
        </div>
    </NuxtLink>
 </template>

 <style scoped>
    .project-card-maindiv {
        display: flex;
        flex-direction: column;
        width: minmax(250px, 90%);
        box-shadow: 0.1rem 0.2rem 0.5rem #888888;
        border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
        text-decoration: none;
    }

    .project-card-maindiv:hover {
        box-shadow: 0.1rem 0.5rem 1.2rem #888888;
        transition: 0.3s ease-in all;
    }

    .project-logo-img {
        border-radius: 1.25rem 1.25rem 0 0;
    }
    .see-more-project-link {
        border: 0;
        color: var(--accent-color);
        width: 100%;
        font-weight: 500;
    }

    .project-name{
        font-weight: 550;
        color: var(--title-color);
    }

    p {
        color: var(--par-color);
    }

    .project-card-infos{
        padding: 1rem;
        font-weight: 200;
    }

 </style>