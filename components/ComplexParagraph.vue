<script setup lang="ts">
/**
 * Component name: ComplexParagraph
 * Description: this is a generic paragraph
 * that can display an image next to a block of text.
 * The image is optional and can be positioned on the
 * left (default value), or on the right of the text.
 *
 */

interface Props {
    image_url?: string;
    // the default value if missing is false
    is_image_rigth?: boolean;
    image_alt?: string;
}

const { image_url, is_image_rigth, image_alt } = defineProps<Props>();

/**
 * This function is used to compute which class
 * the image-container should have in order to correctly
 * display the image in the paragraph
 */
const imageStyle = computed(() => {
    if (image_url === undefined) return 'no-image';
    if (is_image_rigth) return 'right-image';
    else return 'left-image';
});
</script>

<template>
    <div class="par-container">
        <div v-if="image_url" class="image-container" :class="imageStyle">
            <nuxt-img class="image" :src="image_url" :alt="image_alt" :placeholder="[500, 500, 10]" />
        </div>
        <slot />
    </div>
</template>

<style scoped>
.par-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 0;
    gap: 2rem;
}

.image {
    width: min(100%, 1000px);
    border-radius: 1.25rem 1.25rem 0 1.25rem;
}

.no-image {
    display: none;
}

.left-image {
    order: 0;
}

.right-image {
    order: 1;
}

@media (width < 1200px) {
    .par-container {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
}
</style>
