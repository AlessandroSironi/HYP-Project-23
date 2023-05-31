<script setup lang="ts">
import { Area } from '~/types/Area';

interface Props {
    area?: Area;
    isActive: boolean;
}

const { area, isActive } = defineProps<Props>();
const emit = defineEmits(['func']);
</script>

<template>
    <button :class="isActive ? 'area-chip-active' : 'area-chip'" @click="emit('func')">
        {{ area ? area.name : 'Most relevant' }}
    </button>
</template>

<style scoped></style>
