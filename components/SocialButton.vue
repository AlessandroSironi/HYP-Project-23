<script setup lang="ts">
interface Props {
    icon: string;
    url: string;
    text?: string;
}

const { icon, text } = defineProps<Props>();
</script>
<template>
    <button class="social-button">
        <NuxtLink :to="url" class="social-link">
            <Icon :name="icon" size="1.5rem" />
        </NuxtLink>
        <div v-if="text" class="btn-text">
            {{ text }}
        </div>
    </button>
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
}

.social-button:hover {
    background-color: var(--accent-color);
    transition: 0.3s all ease-in;
}

.social-link {
    color: var(--par-color-alt);
}

.btn-text {
    color: var(--par-color-alt);
    font-size: 1.1rem;
}
</style>
