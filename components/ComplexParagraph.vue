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
    justify_content?: boolean; // True -> space-between, false -> center
}

const { image_url, is_image_rigth, image_alt, justify_content } = defineProps<Props>();

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
    <div>
        <div class="par-container">
            <div class="image-container" :class="imageStyle">
                <nuxt-img class="image-container" :src="image_url" :alt="image_alt" />
            </div>
            <div class="text-container"><slot /></div>
        </div>
    </div>
</template>

<style scoped>
.par-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    flex-wrap: wrap;
}

.image-container {
    max-width: min(450px, 100%);
    height: auto;
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

@media (width < 1400px) {
    .par-container {
        justify-content: center;
        gap: 2rem;
    }
}
</style>
