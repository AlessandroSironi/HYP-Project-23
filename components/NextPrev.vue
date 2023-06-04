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
<div class="content">
    <div class="prev-next-area">
        <button class="btn scheme" @click="handlePrevious"><Icon name="octicon:arrow-left-16" height="30"/></button>
        <slot/>
        <button class="btn scheme" @click="handleNext"><Icon name="octicon:arrow-right-16" height="30"/></button>
    </div>
</div>
</template>

<style scoped>
.content {
    padding-top: 20px;
    padding-bottom: 20px;
}
.prev-next-area {
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
