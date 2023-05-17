// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts', 'nuxt-icon'],
    css: ['@/assets/styles/global.css'],
    googleFonts: {
        families: {
            Comme: [100, 200, 300, 400, 500, 600, 700, 800],
            Inter: true,
        },
    },

    nitro: {
        compressPublicAssets: true,
    },
    app: {
        head: {
            title: 'Core Investments',
            meta: [{ name: 'description', content: 'sample content' }],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
});
