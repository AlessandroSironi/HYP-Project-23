<script setup lang="ts">
/**
 * Component name: Navbar
 * Description: this is the default navigation bar menu
 * present on top of all pages, it is a fixed component (with sticky attribute)
 * and it is responsive for mobile devices.
 *
 */

// mobile navbar toggle system
let showMobileNav = ref(false);
const toggleMenu = () => {
    showMobileNav.value = !showMobileNav.value;
    document.querySelector('body')?.classList.toggle('disable-scrolling');
};

const closeMenuOnLink = () => {
    if (showMobileNav.value === true) {
        showMobileNav.value = false;
        document.querySelector('body')?.classList.remove('disable-scrolling');
    }
};
</script>

<template>
    <header class="nav-container">
        <nav class="nav-group">
            <div class="logo"><NuxtLink class="nuxt-link" to="/" @click="closeMenuOnLink">CORE</NuxtLink></div>
            <ul class="nav-links">
                <li><NuxtLink class="nuxt-link" active-class="active-link" to="/about">ABOUT</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" active-class="active-link" to="/persons">TEAM</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" active-class="active-link" to="/projects/top">TOP PROJECTS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" active-class="active-link" to="/projects">ALL PROJECTS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" active-class="active-link" to="/areas">AREAS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" active-class="active-link" to="/contacts">CONTACTS</NuxtLink></li>
            </ul>
            <button @click="toggleMenu" class="nav-btn" :class="showMobileNav ? 'close-icon' : ''">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        <div class="menu-mobile" :class="showMobileNav === true ? 'open-menu' : 'close-menu'">
            <ul class="nav-links-mobile">
                <li><NuxtLink class="nuxt-link" to="/about" @click="closeMenuOnLink">ABOUT</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/persons" @click="closeMenuOnLink">TEAM</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/projects/top" @click="closeMenuOnLink">TOP PROJECTS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/projects" @click="closeMenuOnLink">ALL PROJECTS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/areas" @click="closeMenuOnLink">AREAS</NuxtLink></li>
                <li><NuxtLink class="nuxt-link" to="/contacts" @click="closeMenuOnLink">CONTACTS</NuxtLink></li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
/** general styles*/
.nav-container {
    background-image: var(--gradient-color);
    padding: 1rem 0;

    /** the combination sticky + top 0 simulates the 
        fixed position but also removes the problem of 
        overlay with the main content */
    position: sticky;
    top: 0;
    font-size: 0.9rem;
    z-index: 100;
}

.nav-group {
    margin: 0 auto;
    width: var(--content-width);
    color: var(--par-color-alt);
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.logo {
    font-size: 1.5rem;
    font-family: Inter;
}

.nav-links {
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;
    gap: 3.5rem;
}

.nuxt-link {
    color: var(--par-color-alt);
    text-decoration: none;
    cursor: pointer;
}

/** Mobile responsiveness */
/** These three following classes disable mobile menu on larger devices */

.nav-btn {
    display: none;
}
.nav-links-mobile {
    display: none;
    overflow: hidden;
}

.active-link{
    text-decoration: underline;
    text-underline-offset: 2px;
}

@media (width < 1000px) {
    /** These three following classes disable desktop menu on smaller devices */
    .nav-links {
        display: none;
    }

    .nav-group {
        align-items: center;
    }

    /** Styling of the mobile menu */
    .close-menu {
        transition: 0.3s ease-in all;
        visibility: hidden;
        width: 0;
    }

    .open-menu {
        transition: 0.3s ease-in all;
        visibility: visible;
        width: 100%;
    }

    .menu-mobile {
        position: fixed;
        top: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        background-image: var(--gradient-color);
    }

    .nav-links-mobile {
        margin-top: 3rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2.5rem;
        align-items: center;
        min-height: 60%;
        padding: 0;
        font-size: 1.2rem;
    }

    /** Styling of the mobile-menu button */
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
