<script setup lang="ts">
// TODO: remove all of this, it's just for debug
const sayHello = () => {
    alert('ciao');
};
</script>

<template>
    <div>
        <GenericButton value="Discover more" :alt-style="false" @func="sayHello" />
    </div>
</template>

<style scoped>
/*TODO: remove, this is just for debug */
div {
    height: 130dvh;
    padding: 2rem;
    background-color: var(--bg-color);
}
</style>
