// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts'],
    css: ['@/assets/styles/global.css'],
    googleFonts: {
        families: {
            Comme: true,
            Inter: true,
        },
    },

    nitro: {
        compressPublicAssets: true,
    },
    app: {
        head: {
            title: 'Nuxt eCommerce',
            meta: [{ name: 'description', content: 'sample content' }],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
});
