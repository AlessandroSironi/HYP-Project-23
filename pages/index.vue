<script setup lang="ts">
import gsap from 'gsap';
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
            <nuxt-img width="340" class="title-image" src="supabase/home/home.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvaG9tZS9ob21lLndlYnAiLCJpYXQiOjE2ODUxMDY5NjMsImV4cCI6MTAwMTY4NTEwNjk2Mn0.BrzOZE5tlQsn1TigLcqQvkSVZyEJJzHWEWdz30DeHmM&t=2023-05-26T13%3A16%3A03.089Z" alt="homepage title picture" />
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
        <section class="info-banner"></section>
        <section class="team-section">
            <OverlappingParagraph image_url="supabase/home/team_picture.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvaG9tZS90ZWFtX3BpY3R1cmUud2VicCIsImlhdCI6MTY4NTM0Nzg5OSwiZXhwIjoxMDAxNjg1MzQ3ODk4fQ.kfuL7vdZ7EYbOq7OO7IQ3OWxqFquEqdUBPi6f7sZVlU&t=2023-05-29T08%3A11%3A38.465Z" image_alt="team picture">
                <div class="team-section-par-container">
                    <div class="team-text-container">
                        <h2>Meet our wonderful team</h2>
                        <p>Our team combines venture capital and private equity experiences with managerial skills. Thanks to an extensive network of advisors and industry professionals, we are able to offer concrete support to our investees.</p>
                        <GenericLink class="team-link" name="Discover Team" :alt-style="true" url="/persons" />
                    </div>
                    <nuxt-img alt="person profile picture" class="team-image" width="240" height="240" src="supabase/team/person2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvdGVhbS9wZXJzb24yLndlYnAiLCJpYXQiOjE2ODU0MzIwNTEsImV4cCI6MTAwMTY4NTQzMjA1MH0.w1-Iznfcmbi6S5jNCi2IBBRUy8Bqvuk3TmX0jLTpDsk&t=2023-05-30T07%3A34%3A11.006Z" />
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
    height: 20vh;
    background-color: var(--title-color-accent);
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
}
</style>
