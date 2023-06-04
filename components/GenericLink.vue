<script setup lang="ts">
/**
 * Component name: GenericLink
 * Description: this is the general link
 * used in the main sections of the website
 * to navigate between pages, it accepts a name
 * (text to display on the link), a boolean
 * called altStyle which defines which color
 * scheme the link-button should have and
 * it also accepts an url which
 * is the url we go to when clicking the
 * link-button.
 *
 */

interface Props {
    name: string;
    altStyle: boolean;
    url: string;
}

const { name, altStyle, url } = defineProps<Props>();
</script>

<template>
    <div>
        <NuxtLink class="link" :class="altStyle ? 'alt-scheme' : 'scheme'" :to="url">{{ name }}</NuxtLink>
    </div>
</template>

<style scoped>
.link {
    padding: 1rem 3rem;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
}

.scheme {
    background-color: var(--btn-color);
    color: var(--title-color);
    border: 1px solid black;
    transition: 0.3s all ease-in;
}

.scheme:hover {
    background-color: var(--accent-color);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
}

.alt-scheme {
    background-color: var(--btn-color-alt);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
}

.alt-scheme:hover {
    background-color: var(--accent-color);
    transition: 0.2s all ease-in;
}
</style>
