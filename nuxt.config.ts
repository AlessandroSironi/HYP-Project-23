// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/image-edge', '@pinia/nuxt'],
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
    // needed to use the sizes attribute in <nuxt-img />
    image: {
        domains: ['nwgklsfwmhatudgymnvk.supabase.co/storage/v1/object/sign/resources/'],
        alias: {
            supabase: 'https://nwgklsfwmhatudgymnvk.supabase.co/storage/v1/object/sign/resources',
        },
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1200,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536,
        },
    },
    app: {
        head: {
            title: 'Core Investments',
            meta: [{ name: 'description', content: 'this is coreventure - Core Investments company website' }],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
});
