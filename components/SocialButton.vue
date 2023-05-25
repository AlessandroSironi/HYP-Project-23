<script setup lang="ts">
/**
 * Component name: SocialButton
 * Description: this component
 * accepts an icon and a url link,
 * it can also accept a text to be displayed
 * on the right of the icon.
 */

interface Props {
    icon: string;
    url: string;
    text?: string;
}

const { icon, text } = defineProps<Props>();
</script>
<template>
    <NuxtLink class="social-button" :to="url">
        <Icon :name="icon" class="icon-link" />
        <div v-if="text" class="btn-text">
            {{ text }}
        </div>
    </NuxtLink>
</template>

<style scoped>
.social-button {
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--btn-color-alt);
    align-items: center;
    border: 0;
    cursor: pointer;
    transition: 0.3s all ease-in;
    gap: 0.8rem;
    text-decoration: none;
    color: var(--par-color-alt);
}

.social-button:hover {
    background-color: var(--accent-color);
    transition: 0.3s all ease-in;
}

.icon-link {
    height: 1.5rem;
}

.btn-text {
    color: var(--par-color-alt);
    font-size: 1.1rem;
}
</style>
