<script setup lang="ts">
import { stringLiteral } from '@babel/types';

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

const { image_url, is_image_rigth, image_alt , justify_content} = defineProps<Props>();

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

const justifyContent = computed(() => {
    if (justify_content) return 'space-between';
    else return 'center';
});
</script>

<template>
    <div>
        <div class="par-container">
            <div class="image-container" :class="imageStyle, justifyContent">
                <nuxt-img class="image-container" :src="image_url" :alt="image_alt" />
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
    max-width: min(450px, 90%);
    height: auto;
    border-radius: 1.25rem 1.25rem 0 1.25rem;
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

.space-between {
    display: flex;
    justify-content: space-between;
}

.center {
    display: flex;
    justify-content: center;
}
</style>
