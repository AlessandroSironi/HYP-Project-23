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
    width?: number;
    // height is just used to compute the placeholder dimensions
    height?: number;
}

const { image_url, is_image_rigth, image_alt, width, height } = defineProps<Props>();

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

// compute the max size of the image
const maxWidth = computed(() => {
    return width + 'px';
});

// The placeholer in the nuxt-img tag is used to reduce the cumulative layout shift
</script>

<template>
    <div class="par-container">
        <div class="image-container" :class="imageStyle">
            <nuxt-img
                class="image"
                :src="image_url"
                :alt="image_alt"
                :placeholder="[width, height, 10]"
                quality="75"
                :style="{ maxWidth: maxWidth }"
            />
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
    border-radius: 1.25rem 1.25rem 0 1.25rem;
    min-width: 225px;
    width: 90vw;
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
