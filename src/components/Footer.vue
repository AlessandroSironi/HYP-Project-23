<script setup lang="ts">
/**
 * Component name: Footer
 * Description: this is the default footer
 * present on the bottom of all pages, it is a fixed component
 * and it is responsive for mobile devices.
 *
 */

// mobile navbar toggle system
// TODO: fix a -> NuxtLink, add links to icons, fix position of component, change footer tag to divs
// + fix responsivness
</script>
<template>
    <main class="footer-box">
        <div class="footer-text-container">
            <p class="footer-title">CORE Impact SGR S.p.A. – manager EuAA</p>
            <p class="footer-title-2">P.IVA Core Impact SGR SpA – 11325612983</p>
            <p class="footer-title-3">Via Aurelio Saffi 29 - 20123 Milano</p>
            <p class="footer-title-3">Phone number: +39 06 389 4677</p>
            <p class="footer-title-3">info@oltreimpact.com</p>
        </div>
        <hr class="divider" />
        <div class="footer-social-container">
            <div>
                <p>
                    © 2022 Core Impact SGR S.P.A. All rights reserved.
                    <NuxtLink class="footer-anchor" to="">Privacy Policy</NuxtLink>
                    ·
                    <NuxtLink class="footer-anchor" to="">Cookie Policy</NuxtLink>
                </p>
            </div>
            <div class="footer-icon-container">
                <NuxtLink to="https://www.linkedin.com" class="footer-anchor"><Icon name="uil:linkedin" /></NuxtLink>
                <NuxtLink to="https://www.linkedin.com" class="footer-anchor"><Icon name="uil:facebook" /></NuxtLink>
                <NuxtLink to="https://www.linkedin.com" class="footer-anchor"><Icon name="fa6-brands:square-twitter" /></NuxtLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
.footer-anchor {
    color: var(--par-color-alt);
}

.footer-anchor:visited {
    color: var(--par-color-alt);
}

.footer-box {
    background-image: var(--gradient-color);
    padding: 1rem 0;
    color: var(--par-color-alt);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.footer-text-container {
    margin: 0 auto;
    width: 90%;
    max-width: 920px;
}

.footer-icon-container {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
}

.footer-social-container {
    margin: 0 auto;
    width: var(--content-width);
    display: flex;
    /*flex-flow: row wrap;*/
    justify-content: space-between;
    align-items: center;
}

.footer-title {
    font-weight: 600;
}

.footer-title-2 {
    font-weight: 100;
    font-size: 0.9rem;
}

.footer-title-3 {
    font-weight: 100;
    font-size: 0.9rem;
    margin: 0.2rem;
}

hr.divider {
    border: 0;
    background-color: var(--bg-color);
    width: var(--content-width);
    border-radius: 3px;
    padding: 1px;
}
</style>
