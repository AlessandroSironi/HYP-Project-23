<script setup lang="ts">

/**
 * Component Name: NextPrev.
 * Displays a next and previous button that allows the user
 * to navigate between areas or projects, dynamically.
 * Displays two buttons and a text that adapts to the context.
 */
interface Props {
    label?: string;
}

const { label } = defineProps<Props>();

const emit = defineEmits(['onPrev', 'onNext']);
</script>

<template>
    <div class="content">
        <div class="prev-next">
            <button class="btn scheme" @click="emit('onPrev')">
                <Icon name="octicon:arrow-left-16" size="30" />
            </button>
            <p>{{ label }}</p>
            <button class="btn scheme" @click="emit('onNext')">
                <Icon name="octicon:arrow-right-16" size="30" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.content {
    padding-top: 20px;
    padding-bottom: 20px;
}
.prev-next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.btn {
    padding: 0.75rem;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    width: 75px;
}

.scheme {
    background-color: var(--btn-color);
    color: var(--title-color);
    transition: 0.3s all ease-in;
    border: 1px solid black;
}

.scheme:hover {
    background-color: var(--accent-color);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
}
</style>
