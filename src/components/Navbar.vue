<script setup lang="ts">
/**
 * Component name: Navbar
 * Description: this is the default navigation bar menu
 * present on top of all pages, it is a fixed component
 * and it is responsive for mobile devices.
 *
 */

// mobile navbar toggle system
let showMobileNav = ref(false);
const toggle = () => {
    showMobileNav.value = !showMobileNav.value;
};
</script>

<template>
    <header class="nav-container">
        <nav class="nav-group">
            <div class="logo"><NuxtLink class="nuxt-link" to="/">CORE</NuxtLink></div>
            <ul class="nav-links">
                <li><NuxtLink class="nuxt-link" to="/about">STRATEGY</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/persons">TEAM</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/projects">PROJECTS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/areas">AREAS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/contacts">CONTACTS</NuxtLink></li>
            </ul>
            <button @click="toggle()" class="nav-btn" :class="showMobileNav ? 'close-icon' : ''">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        <div :class="showMobileNav === true ? 'open-menu' : 'close-menu'">
            <ul class="nav-links-mobile">
                <li><NuxtLink class="nuxt-link" to="/about" @click="toggle()">STRATEGY</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/persons" @click="toggle()">TEAM</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/projects" @click="toggle()">PROJECTS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/areas" @click="toggle()">AREAS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/contacts" @click="toggle()">CONTACTS</NuxtLink></li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.nav-container {
    background-image: var(--gradient-color);
    padding: 1rem 0;
    position: sticky;
    top: 0;
}

.nav-group {
    margin: 0 auto;
    width: 90%;
    max-width: 920px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    color: var(--par-color-alt);
}

.logo {
    font-size: 1.5rem;
    font-family: Inter;
}

.nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    gap: 3.5rem;
}

.nuxt-link {
    text-decoration: none;
    color: var(--par-color-alt);
    cursor: pointer;
}

/** Mobile responsivness */
.nav-btn {
    display: none;
}
.close-menu {
    transition: 0.3s ease-in all;
    visibility: hidden;
    height: 0;
}

.nav-links-mobile {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    min-height: 60%;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
}
.open-menu {
    display: block;
    height: 100dvh;
    overflow-y: none;
    transition: 0.3s ease-in all;
}

@media (width < 1000px) {
    .nav-links {
        display: none;
    }

    .nav-group {
        align-items: center;
    }

    .nav-btn {
        display: flex;
        flex-direction: column;
        width: 32px;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;
    }

    .nav-btn span {
        background-color: var(--bg-color);
        height: 3px;
        margin: 2px 0;
        transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        border-radius: 2px;
    }

    span:nth-of-type(1) {
        width: 50%;
    }

    span:nth-of-type(2) {
        width: 100%;
    }

    span:nth-of-type(3) {
        width: 75%;
    }

    .close-icon span:nth-child(1) {
        transform: rotatez(45deg) translate(0, 10px);
        width: 100%;
    }

    .close-icon span:nth-child(2) {
        width: 0;
    }

    .close-icon span:nth-child(3) {
        width: 100%;
        transform: rotatez(-45deg) translate(0, -10px);
    }
}
</style>
