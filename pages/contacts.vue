<script setup></script>

<template>
    <div class="content">
        <h2 class="orientational-info">Contacts</h2>
        <ComplexParagraph image_url="supabase/contacts/contacts.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvY29udGFjdHMvY29udGFjdHMud2VicCIsImlhdCI6MTY4NTAyMTQyNCwiZXhwIjoxMDAxNjg1MDIxNDIzfQ.WTlg9AP4VfwyEJX-J-ZJbMw6mfMkY0KAkFYGPq7IkZU&t=2023-05-25T13%3A30%3A24.378Z" image_alt="Contact Us">
            <div class="contact-info-box">
                <h2 class="contact-information-h2">Contact Information</h2>
                <p>
                    Address:
                    <NuxtLink to="/" class="contacts-links">Piazza Leonardo da Vinci - Milano</NuxtLink>
                </p>
                <p>
                    Phone number:
                    <NuxtLink to="/" class="contacts-links">+39 06 389 5940</NuxtLink>
                </p>
                <p>
                    Email:
                    <NuxtLink to="/" class="contacts-links">info@coreventure.com</NuxtLink>
                </p>
                <div class="social-box">
                    <SocialButton icon="uil:linkedin" url="https://www.linkedin.com" text="Find us on LinkedIn" />
                    <SocialButton icon="uiw:facebook" url="https://www.facebook.com" />
                    <SocialButton icon="mdi:twitter" url="https://www.twitter.com" />
                </div>
            </div>
        </ComplexParagraph>
        <div class="form-title">
            <h2 class="contact-title">Contact Us</h2>
            <p>Feel free to contact us if you want to make your company thrive or if you need any information about our work</p>
        </div>
        <div class="form-content">
            <form id="contact-form" action="#" method="post">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Name (*):</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="surname">Surname (*):</label>
                        <input type="text" id="surname" name="surname" required />
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email (*):</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Message (*):</label>
                    <textarea id="message" name="message" class="message-area" required></textarea>
                </div>
                <p class="form-required-p">(*) Required fields</p>
                <div class="form-submit-button">
                    <GenericButton value="Submit" :alt-style="true" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.contacts-links {
    color: var(--accent-color);
}
.content {
    width: var(--content-width);
    margin: 2rem auto;
}

.contact-info-box {
    width: min(800px, 100%);
}

.form-title {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-information-h2 {
    margin-bottom: 20px;
}

.contact-title {
    color: var(--accent-color);
}

.form-content {
    width: min(100%, 1000px);
    margin: 0 auto;
}

.form-required-p {
    color: rgb(169, 169, 169);
    margin: 10px;
}

.social-box {
    display: flex;
    gap: 1rem;
    margin: 1.5rem auto;
}

form {
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 1.25rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

input {
    margin-bottom: 1.25rem;
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.form-row .form-group {
    width: 48%;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 0.5rem;
}

.form-group textarea {
    resize: vertical;
}

.form-submit-button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.message-area {
    height: min(280px, 30vw);
}

input:focus,
textarea:focus {
    outline: 2px solid var(--accent-color);
}

@media (width < 1200px) {
    .contact-info-box {
        width: 100%;
    }
}

@media (max-width: 1000px) {
    .info {
        flex-direction: column; /* Switch to a column layout */
    }

    .form-row {
        flex-direction: column;
    }

    .form-row .form-group {
        width: 100%;
    }
}
</style>
