<script setup lang="ts"></script>

<template>
    <div class="main">
        <section class="main-title-section">
            <div class="title-info-box">
                <h1 class="title-info-title">We help companies unlock their full potential</h1>
                <p>We believe that every company has the potential to change the world, and we provide the resources and support needed to help them realize their goals.</p>
            </div>
            <img width="340" class="title-image" src="https://nwgklsfwmhatudgymnvk.supabase.co/storage/v1/object/sign/resources/home/home.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvaG9tZS9ob21lLndlYnAiLCJpYXQiOjE2ODUxMDY5NjMsImV4cCI6MTAwMTY4NTEwNjk2Mn0.BrzOZE5tlQsn1TigLcqQvkSVZyEJJzHWEWdz30DeHmM&t=2023-05-26T13%3A16%3A03.089Z" alt="homepage title picture" />
        </section>
        <section class="info-banner"></section>
        <section class="team-section"></section>
    </div>
</template>

<style scoped>
.main-title-section {
    width: var(--content-width);
    margin: 2rem auto;
    display: flex;
    gap: 5rem;
}

.title-info-box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title-image {
    border-radius: 1.25rem;
}
.info-banner {
}

.team-section {
}
</style>
