<script setup lang="ts">
// TODO: remove all of this, it's just for debug
//
const sayHello = () => {
    alert('ciao');
};
</script>

<template>
    <div class="index-main">
        <div class="social-box">
            <SocialButton icon="mdi:linkedin" url="https://www.linkedin.com" text="Find me on Linkedin" />
            <SocialButton icon="uiw:facebook" url="https://www.linkedin.com" />
            <SocialButton icon="mdi:twitter" url="https://www.linkedin.com" />
        </div>

        <br />
        <GenericButton value="Discover more" :alt-style="true" @func="sayHello" />
        <br />
        <GenericLink name="Go to about" :alt-style="false" url="/about" />
        <br />
        <ComplexParagraph image_url="aaa">ciao amico mio</ComplexParagraph>
    </div>
</template>

<style scoped>
/*TODO: remove, this is just for debug */
.index-main {
    height: 130dvh;
    padding: 2rem;
    background-color: var(--bg-color);
}

.social-box {
    display: flex;
    gap: 1rem;
}
</style>
