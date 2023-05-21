<script setup lang="ts">
interface Props {
    value: string;
    altStyle: boolean;
}

const emit = defineEmits(['func']);

const { value, altStyle } = defineProps<Props>();
</script>

<template>
    <div>
        <button class="btn" :class="altStyle ? 'scheme' : 'alt-scheme'" @click="emit('func')">{{ value }}</button>
    </div>
</template>

<style scoped>
.btn {
    padding: 1rem 3rem;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
}

.scheme {
    background-color: var(--btn-color);
    color: var(--title-color);
    transition: 0.3s all ease-in;
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
