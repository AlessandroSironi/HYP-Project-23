<script setup lang="ts">
// we will put stuff for animations here
</script>

<template>
    <div class="main">
        <section class="main-title-section">
            <div class="title-info-box">
                <h1 class="title-info-title">We help companies unlock their full potential</h1>
                <p class="title-info-par">
                    We believe that every company has the potential to
                    <span class="bolder-text">change the world,</span>
                    and we provide the
                    <span class="bolder-text">resources</span>
                    and
                    <span class="bolder-text">support</span>
                    needed to help them realize their goals.
                </p>
                <div class="button-container">
                    <GenericLink url="/contacts" name="Contact us" :alt-style="true" />
                    <GenericLink url="/about" name="Learn more" :alt-style="false" />
                </div>
            </div>
            <nuxt-img width="340" class="title-image" src="/img/home/home.webp" alt="homepage title picture" />
        </section>
        <section class="numerical-info-section">
            <div class="numerical-info-box">
                <div class="numerical-card">
                    <h3>
                        <span class="numerical-info">128M</span>
                    </h3>
                    <p class="numerical-info-par">Funds managed for our partners</p>
                </div>
                <div class="numerical-card">
                    <h3>
                        <span class="numerical-info">16+</span>
                    </h3>
                    <p class="numerical-info-par">Partners who trust us and work with us</p>
                </div>
                <div class="numerical-card">
                    <h3>
                        <span class="numerical-info">12</span>
                    </h3>
                    <p class="numerical-info-par">Years of experience in the sector</p>
                </div>
                <div class="numerical-card">
                    <h3>
                        <span class="numerical-info">3+</span>
                    </h3>
                    <p class="numerical-info-par">Unicorn companies in our “stable”</p>
                </div>
            </div>
        </section>
        <section class="central-info">
            <div class="info-banner">
                <div class="info-banner-text-container">
                    <h2>What do we do?</h2>
                    <p>
                        Coreventure is a venture capitalist firm that focuses on investing in early-stage startups
                        across a range of industries, including technology, healthcare, and consumer products. At
                        Coreventure, our mission is to identify promising entrepreneurs who are developing innovative
                        and scalable business solutions to meet today's complex challenges.
                    </p>
                    <p>
                        Our mission is to spur this progress forward. We work closely with these startups to provide
                        them with the strategic guidance, capital, and resources they need to accelerate their growth
                        and achieve their goals. Our team of experienced investors and advisors is committed to building
                        strong partnerships with our portfolio companies and supporting them on their journey towards
                        success.
                    </p>
                </div>
                <div class="info-banner-link-container">
                    <div class="info-banner-link-box">
                        <h3>Do you want to know more about us?</h3>
                        <GenericLink url="/about" name="About us" :alt-style="false" />
                    </div>
                </div>
            </div>
            <div class="secondary-info">
                <div class="secondary-image-container">
                    <nuxt-img src="/img/home/grass.webp" sizes="xs:200px, sm:80vw, md:590px" />
                </div>
                <div class="secondary-info-content">
                    <div class="secondary-info-text-container">
                        <h2 class="secondary-info-title">We are here for you!</h2>
                        <p class="secondary-info-text">
                            Coreventure projects are important as they allow businesses to innovate, grow and stay
                            relevant in a constantly evolving market.
                            <br />
                            These projects help organizations to take calculated risks and invest in new ideas,
                            technologies and partnerships that can bring significant long-term benefits and competitive
                            advantages.
                        </p>
                    </div>
                    <div class="secondary-info-link">
                        <h3 class="secondary-info-links-title">Check out the projects we've helped grow...</h3>
                        <GenericLink url="/projects" name="Explore projects" :alt-style="true" />
                    </div>
                </div>
            </div>
        </section>
        <section class="team-section">
            <OverlappingParagraph image_url="img/home/team_picture.webp" image_alt="team picture">
                <div class="team-section-par-container">
                    <div class="team-text-container">
                        <h2>Meet our wonderful team</h2>
                        <p>
                            Our team combines venture capital and private equity experiences with managerial skills.
                            Thanks to an extensive network of advisors and industry professionals, we are able to offer
                            concrete support to our investees.
                        </p>
                        <GenericLink class="team-link" name="Discover Team" :alt-style="true" url="/persons" />
                    </div>
                    <nuxt-img
                        alt="person profile picture"
                        class="team-image"
                        width="240"
                        height="240"
                        src="img/team/person2.webp"
                    />
                </div>
            </OverlappingParagraph>
        </section>
    </div>
</template>

<style scoped>
p {
    color: var(--par-color);
}
.bolder-text {
    font-weight: 600;
    color: var(--title-color);
}

.main-title-section {
    width: var(--content-width);
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    align-items: center;
}

.title-info-box {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    gap: 2rem;
}

.title-info-par {
    width: 90%;
}

.button-container {
    display: flex;
    justify-content: flex-start;
    gap: 4vh;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.title-image {
    border-radius: 1.25rem;
    box-shadow: 0.1rem 0.2rem 0.5rem #888888;
}

.numerical-info-section {
    width: var(--content-width);
    margin: 0 auto;
}

.numerical-info-box {
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;
    padding: 2rem 0;
}

.numerical-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    max-width: min(180px, 90%);
    text-align: center;
}

.numerical-info-par {
    font-size: 1.1rem;
}

.info-banner {
    background-color: var(--title-color-accent);
    padding: 4rem 0;
}

.info-banner-text-container {
    width: var(--content-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-banner-text-container h2 {
    color: var(--title-color-alt);
}

.info-banner-text-container p {
    color: #eee;
}

.info-banner-link-container {
    display: flex;
    justify-content: flex-end;
    width: var(--content-width);
    margin: 0 auto;
    margin-top: 4rem;
}

.info-banner-link-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-end;
}

.info-banner-link-container h3 {
    font-size: 1.45rem;
    color: var(--title-color-alt);
}

.secondary-info {
    width: var(--content-width);
    margin: 3rem auto;
    display: flex;
    gap: 2rem;
}

.secondary-image-container {
    overflow: visible;
    position: relative;
    top: max(-150px, -7vw);
}

.secondary-image-container * {
    border-radius: 1.25rem 1.25rem 0 1.25rem;
}

.secondary-info-content {
    display: flex;
    gap: 2rem;
    flex-direction: column;
}

.secondary-info-text-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.secondary-info-link * {
    margin: 2rem 0;
}

.secondary-info-links-title {
    font-size: 1.35rem;
}

.team-section {
    margin: 2rem auto 0 auto;
    width: var(--content-width);
}

.team-section-par-container {
    padding: 2vw;
    display: flex;
    gap: 3rem;
    justify-content: center;
}

.team-text-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.team-link {
    margin-top: 2rem;
}

.team-image {
    border-radius: 100%;
}

@media (width < 1000px) {
    h1 {
        text-align: center;
    }
    .title-info-box {
        align-items: center;
    }
    .title-image {
        display: none;
    }

    .button-container {
        justify-content: center;
    }

    .team-section-par-container {
        flex-wrap: wrap;
    }
    .team-text-container {
        order: 1;
        align-items: center;
    }
    .secondary-info {
        flex-direction: column;
        align-items: center;
    }
}
</style>
