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
}

const { image_url, is_image_rigth } = defineProps<Props>();

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
                <nuxt-img :src="image_url" :alt="image_url" />
            </div>
            <div class="text-container"><slot /></div>
        </div>
    </div>
</template>

<style scoped>
.par-container {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
}

.image-container {
    border: 1px solid green;
}

.text-container {
    border: 1px solid blue;
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
</style>
