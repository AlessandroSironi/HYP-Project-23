<script setup lang="ts">

/**
 * Contacts page.
 * This page contains contact information to reach out to the company, as well as
 * a mail form. 
 * This form lets the user send a mail to Core Venture. 
 * The form checks the validity of the mail address through a RegEx and by implementing
 * the correct <input> types. 
 * Errors and confirmation messages are reported to the user. 
 */
 
useSeoMeta({
    title: 'Core Investments | Contacts',
    description: 'This is the contacts page with a form for sending emails.',
});

const name = ref('');
const surname = ref('');
const email = ref('');
const message = ref('');

const isCheckingActive = ref(false);
const mailStatus = ref(0);
const showPopUp = ref(false);

function resetForm() {
    name.value = '';
    surname.value = '';
    email.value = '';
    message.value = '';
    isCheckingActive.value = false;
}

function activateChecking() {
    isCheckingActive.value = true;
}

const validateEmail = computed(() => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (isCheckingActive.value) {
        return regex.test(email.value.toLowerCase());
    } else return true;
});

async function sendEmail() {
    if (!validateEmail.value) return;

    const { data, error } = await useFetch('/api/emailSender', {
        method: 'POST',
        body: {
            data: {
                name: name.value,
                surname: surname.value,
                email: email.value,
                message: message.value,
            },
        },
    });

    showPopUp.value = true;

    console.log('data: ', data.value);
    if (data.value?.status === 200) {
        mailStatus.value = 200;
        resetForm();
    } else {
        mailStatus.value = 500;
    }

    setInterval(() => {
        showPopUp.value = false;
    }, 3000);
}
</script>

<template>
    <div class="content">
        <h2 class="orientational-info">Contacts</h2>
        <ComplexParagraph image_url="supabase/contacts/contacts.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXNvdXJjZXMvY29udGFjdHMvY29udGFjdHMud2VicCIsImlhdCI6MTY4NTAyMTQyNCwiZXhwIjoxMDAxNjg1MDIxNDIzfQ.WTlg9AP4VfwyEJX-J-ZJbMw6mfMkY0KAkFYGPq7IkZU&t=2023-05-25T13%3A30%3A24.378Z" image_alt="Photo of our offices" :width="700">
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
                    <NuxtLink to="mailto:info@coreventure.vercel.app" class="contacts-links">info@coreventure.com</NuxtLink>
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
            <p> Feel free to contact us if you want to make your company thrive or if you need any information about our work </p>
        </div>
        <div class="form-content">
            <form id="contact-form" @submit.prevent="sendEmail">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Name (*):</label>
                        <input type="text" id="name" name="name" required v-model="name" />
                    </div>
                    <div class="form-group">
                        <label for="surname">Surname (*):</label>
                        <input type="text" id="surname" name="surname" required v-model="surname" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email (*):</label>
                    <input type="email" id="email" name="email" required v-model="email" @focus="activateChecking" :class="!validateEmail ? 'incorrect' : ''" />
                    <p v-if="!validateEmail" class="incorrect-text">Please insert a valid email address. For example, info@coreventure.com</p>
                </div>
                <div class="form-group">
                    <label for="message">Message (*):</label>
                    <textarea id="message" name="message" class="message-area" required v-model="message"></textarea>
                </div>
                <p class="form-required-p">(*) Required fields</p>
                <div class="form-submit-button">
                    <GenericButton value="Submit" :alt-style="true" />
                </div>
            </form>
        </div>
        <div class="pop-up" :class="!showPopUp ? 'closed' : 'open'">
            <div class="success" v-if="mailStatus === 200">Mail was sent successfully! <Icon name="gg:check-o"></Icon></div>
            <div class="fail" v-if="mailStatus === 500">Error while sending, try again later. <Icon name="mi:circle-error"></Icon></div>
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
    color: rgb(68, 68, 68);
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

.incorrect {
    outline: 2px solid rgb(252, 80, 80);
}

.incorrect-text {
    color: rgb(252, 80, 80);
    margin-bottom: 1rem;
}

input:focus,
textarea:focus {
    outline: 2px solid var(--accent-color);
}

.closed {
    transform: translateY(0);
    opacity: 0;
    transition: all ease-in 1s linear;
}

.open {
    transform: translateY(-60vh);
    opacity: 1;
    transition: all ease-out 1s linear;
}

.pop-up {
    text-align: center;
    margin: 2rem 1rem;
    --success-bg: rgb(119, 250, 185);
    --fail-bg: rgb(255, 118, 118);
    --success-text: rgb(52, 157, 104);
    --fail-text: rgb(147, 64, 64);
    position: relative;
    transition: all 0.3s ease-in;
}

.pop-up div {
    padding: 2rem;
    width: min(90%, 450px);
    border-radius: 0.75rem;
    margin: 0 auto;
    box-shadow: 0.1rem 0.2rem 0.5rem #888888;
}

.pop-up .success {
    background-color: var(--success-bg);
    color: var(--success-text);
}

.pop-up .fail {
    background-color: var(--fail-bg);
    color: var(--fail-text);
}

@media (width < 1200px) {
    .contact-info-box {
        text-align: center;
    }
    .contact-info-box * {
        justify-content: center;
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
