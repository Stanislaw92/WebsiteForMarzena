<template>
    <div class="portfolio_container">
        <div class="portfolio_title_style">PORTFOLIO</div>
        <div class="photos_container">
            <h2 class="rows_title">
                DEKORACJE ŚLUBNE
            </h2>
            <div class="photos_row">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="photos_row">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ButtonComponent class="button_adjust" :text="btn1_text" /> 
        </div>
        <div class="photos_container second_and_another_container">
            <h2 class="rows_title">
                DEKORACJE OKOLICZNOŚCIOWE
            </h2>
            <div class="photos_row">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="photos_row">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ButtonComponent class="button_adjust" :text="btn1_text" /> 
        </div>
        <div class="photos_container second_and_another_container">
            <h2 class="rows_title">
                DEKORACJE SEZONOWE I KOŚCIOŁÓW
            </h2>
            <div class="photos_row">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="photos_row">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ButtonComponent class="button_adjust" :text="btn1_text" /> 
        </div>
    </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent.vue'
export default {
    name: 'PortfolioView',
    components: {
        ButtonComponent
    },
    data() {
        return {
            btn1_text: 'Zobacz więcej'
        }
    }
}
</script>

<style scoped>
    .portfolio_container, .photos_container, .photos_row {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .portfolio_container {
        padding: 10% 5% 10% 5%;
        display: flex;
        flex-direction: column;
    }

    .portfolio_title_style {
            display: flex;
            justify-content: center;
            width: 50%;
            border-bottom: 1px  rgba(106, 106, 106, 1) solid;
            font-size: 4vw;
            color:rgba(106, 106, 106, 1);
            margin: 7% 0 10% 0;
    }

    .photos_container {
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 650px;
    }

    .photos_row {
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
    }

    .photos_row div {
        border: 1px solid black;
        width: 250px;
        height: 250px;
    }

    .rows_title {
        font-family: Raleway;
        align-self: flex-start;
        padding-left: 5%;
        font-size: 2.5vw;
        font-weight: 600;
        line-height: 3vw;
        letter-spacing: 0.02em;
        margin: 0;
    }

    .button_adjust {
        margin: 0;
        align-self: flex-start;
        margin-left: 5%;
    }

    .second_and_another_container {
        margin-top: 10%;
    }
</style>