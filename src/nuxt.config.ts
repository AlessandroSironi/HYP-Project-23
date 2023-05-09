// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts'],
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
