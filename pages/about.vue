<script setup lang="ts">

    /*About Us page. 
    This page presents a short presentation of Core Venture as a company,
    the approach, why should the companies partner with Core Venture (information
    shown with InfoCards and a different background to eye-catch the user with relevant
    and important information) and a link to the contact page.*/

useSeoMeta({
    title: 'Core Investments | About',
    description: 'This is the about page with a brief history of the company and its main activities.',
});


</script>

<template>
    <div class="content">
        <h2 class="orientational-info">About us</h2>
        <h1 class="page-h1-title">European roots, global from the start</h1>
        <p>We use our hard-won experience to help visonary founders become global category leaders.</p>
        <div class="hero-image-div">
            <nuxt-img class="hero-image" src="https://nwgklsfwmhatudgymnvk.supabase.co/storage/v1/object/sign/resources/about/aboutus.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvYWJvdXQvYWJvdXR1cy53ZWJwIiwiaWF0IjoxNjg1MTA1NTc2LCJleHAiOjEwMDE2ODUxMDU1NzV9.Q5o0t9EqUXtzlIhLWPqhPnmwkuOU1rEOcwwlx1bZM1A&t=2023-05-26T12%3A52%3A56.667Z" alt="Our approach" />
        </div>
        <div class="paragraph-content">
            <h3>WHAT IS OUR APPROACH</h3>
            <p class="p-alt">We’re not a traditional venture capital firm. We are built by founders for founders. Every single aspect of Core, every part of our culture, and every decision we take, is designed with the ambition of helping founders succeed. We exist for more than returns.</p>
            <p class="p-alt">We believe entrepreneurs are the ultimate agents of positive, transformational change across every aspect of our society and economy. Our mission is to spur this progress forward.</p>
            <p class="p-alt">It’s why we partner with the world’s most ambitious founders. The rule-breakers who want to build the next leader in their category. The world-shapers creating companies that fundamentally shift the way we live today. The gamechangers using technology to rewire the world in favour of something better, for as many people as possible. When we find these people, we invest much more than money. We work hand- in-glove with them, drawing on hard-won experience scaling some of the most successful technology companies in the world.</p>
        </div>
    </div>
    <div class="colored-bar">
        <h2 class="colored-bar-content">Why should you partner with us?</h2>
        <p class="colored-bar-content">If you're a founder asking yourself whether or not we are the right partner for you, here are the five principles that guide how we act as a team.</p>
        <div class="colored-bar-card">
            <InfoCard icon_locator="tabler:trophy-filled" title="Aligned to Win">
                <p class="text-container">Choose us for unmatched expertise and exceptional returns on your investment.</p>
            </InfoCard>
            <InfoCard icon_locator="tabler:scale" title="Performance through Integrity">
                <p class="text-container">Our success is rooted in unwavering integrity and consistently delivering.</p>
            </InfoCard>
            <InfoCard icon_locator="bi:fire" title="Bold and Progressive">
                <p class="text-container">Embrace our bold and progressive approach to drive innovation and maximize growth potential.</p>
            </InfoCard>
            <InfoCard icon_locator="ph:hand" title="Humble">
                <p class="text-container">Partner with a humble team that values collaboration and puts your success above all else.</p>
            </InfoCard>
        </div>
    </div>

    <div class="content">
        <OverlappingParagraph image_url="https://nwgklsfwmhatudgymnvk.supabase.co/storage/v1/object/sign/resources/about/aboutus2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvYWJvdXQvYWJvdXR1czIud2VicCIsImlhdCI6MTY4NTcxMDUyNiwiZXhwIjoxMDAxNjg1NzEwNTI1fQ.uP6HD80xxD2sejn-KwD9_IISkLm3ZAKKoojJopd4Yrc&t=2023-06-02T12%3A55%3A26.638Z" image_alt="What should founders expect?">
            <div class="overlapping-par-content">
                <div class="overlapping-paragraph-sub">
                    <h2>What should founders expect?</h2>
                    <p>The truth is no two founders, products or business models are the same, and so there is no "one size-fits-all" approach to investing. However, as a founder, these are some general things you should expect if we are lucky enough to be invited into your fundraising process.</p>
                </div>
                <div class="overlapping-paragraph-sub">
                    <h4>We listen, more than we talk.</h4>
                    <p>Don't worry, that's because we focus on the things that matter and we do our work upfront. But we will have questions.</p>
                </div>
                <div class="overlapping-paragraph-sub">
                    <h4>It's never too early to speak with us.</h4>
                    <p>If you are interested in knowing us better feel free to contact us.</p>
                </div>
                <NuxtLink to="/contacts">
                    <GenericButton value="Contact Us" :altStyle="true" />
                </NuxtLink>
            </div>
        </OverlappingParagraph>
    </div>
</template>

<style scoped>
.hero-image {
    max-width: min(1000px, 90%);
    border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
}

.hero-image-div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.overlapping-par-content {
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    margin: 30px;
}

.overlapping-par-content {
    display: flex;
    gap: 20px;
}

.overlapping-paragraph-sub h2 {
    margin-bottom: 1rem;
}

.p-alt {
    color: var(--par-color);
    line-height: 1.75rem;
}

.paragraph-content {
    margin: 15px;
}

.colored-bar-content {
    margin-bottom: 20px;
}

.colored-bar-card {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color: var(--bg-color);
    gap: 20px;
}

.text-container {
    text-align: center;
    padding-left: 0.5rem;
    padding-bottom: 0.75rem;
    padding-right: 0.5rem;
    color: var(--par-color);
}

/* @media (max-width: 1000px) {
    .paragraph-content {

    }
} */
</style>
