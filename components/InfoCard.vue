<script setup lang="ts">
/**
 * Component name: InfoCard
 * Description: this is the card used to display
 * single pieces of information in various pages
 * as attention grabbing accents.
 **/

 interface Props {
    icon_locator: string;
    title: string;
    info_text?: string;
 }

 const{ icon_locator, title, info_text } = defineProps<Props>();
 </script>

 <template>
    <main class="main_class_div">
        <div class="card-icon-div"><Icon :name="icon_locator"/></div>
        <h4 class="card-title">{{ title }}</h4>
        <div class="text-container"><p class="info-text">{{ info_text }}</p></div>
    </main>
 </template>

 <style scoped>
    .main_class_div{
        width: 240px;
        height: 200px;
        color: var(--bg-color);
        box-shadow: 0.1rem 0.2rem 0.5rem #888888;
        border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
        margin: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-title{
        color: var(--title-color);
        font-size: 1.25rem;
        font-weight: 600;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    } 
    
    .info-text{
        color: var(--par-color);
    }

    .text-container{
        text-align: center;
        padding-left: 0.5rem;
        padding-bottom: 0.75rem;
        padding-right: 0.5rem;
    }

    .card-icon-div{
        display: flex;
        justify-content: center;
        gap: 0.2rem;
        margin-top: 1rem;
    }

</style>