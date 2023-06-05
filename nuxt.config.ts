// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        image: {
            // Generate images to `/_nuxt/images/file.png`
            staticFilename: '[publicPath]/img/[name]-[hash][ext]',
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
            meta: [{ name: 'description', content: 'this is coreventure website' }],
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
});
