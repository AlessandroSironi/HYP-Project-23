<script setup lang="ts">
/**
 * Component name: Overlapping Paragraph.
 * This component contains a picture that overlaps 
 * with the previous content, to create
 * a dynamic feeling for the design
 * of certain pages.
 */
interface Props {
    image_url: string;
    image_alt: string;
}

const { image_url, image_alt } = defineProps<Props>();
</script>
<template>
    <nuxt-img
        class="image"
        :src="image_url"
        :alt="image_alt"
        sizes="xs:320px sm:85vw, md:85vw, lg:85vw, xl:1200px, xxl:1200px, 2xl:1200px"
        loading="lazy"
    />
    <div class="paragraph-box">
        <slot />
    </div>
</template>
<style scoped>
.paragraph-box {
    padding: 2rem;
    border-radius: 1.25rem 1.25rem 0 0;
    background-color: var(--par-color-alt);
    box-shadow: 0.1rem 0.2rem 0.5rem #888888;
    width: 90%;
    margin: 0 auto;
    top: max(-25vw, -250px);
    position: relative;
}

.image {
    width: 100%;
    margin: 0 auto;
    border-radius: 2rem;
}
</style>
