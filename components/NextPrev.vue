<script>
export default {
  methods: {
    handlePrevious() {
      // Call the previous function passed as a prop
      this.$emit('previous');
    },
    handleNext() {
      // Call the next function passed as a prop
      this.$emit('next');
    }
  }
};
</script>

<template>
<div class="prev-next-area">
    <button class="btn scheme" @click="handlePrevious"><Icon name="octicon:arrow-left-16"/>Previous</button>
    <slot/>
    <button class="btn scheme" @click="handleNext">Next<Icon name="octicon:arrow-right-16"/></button>
</div>
</template>

<style scoped>
.prev-next-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
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
    border: 1px solid black;
}

.scheme:hover {
    background-color: var(--accent-color);
    color: var(--title-color-alt);
    transition: 0.3s all ease-in;
    border: 1px solid transparent;
}

</style>
