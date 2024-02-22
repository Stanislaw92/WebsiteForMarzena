<template>
  <div class="opinions_container" id="opinions"> 
        <div class="opinions_title_style" :class="{active_title: content_show}">OPINIE</div>
        <div class="opinions">
            <div class="opinions_text_author transform_animation_left"
                :class="{animation_active: content_show}"
                
            >
                <span><i class="fa-solid fa-quote-left icon_styling"></i>
                Nie mogę sobie wyobrazić lepszego florysty na nasz ślub! [Twoje Imię] stworzyła dla nas niesamowite bukiety ślubne i dekoracje kwiatowe, które były dokładnie tym, o czym marzyliśmy. Nasz dzień był jeszcze piękniejszy dzięki jej talentowi i profesjonalizmowi. Polecam ją każdemu, kto pragnie, by ich wyjątkowy dzień był jeszcze bardziej wyjątkowy.<i class="fa-solid fa-quote-right icon_styling"></i></span>
                <div> Ewa G. - Konsultacje Florystyczne</div>
            </div>
            <div class="opinions_text_author transform_animation_right desktop_visible"
                :class="{animation_active: content_show}"
            >
                <span><i class="fa-solid fa-quote-left icon_styling"></i>
                Miałam przyjemność pracować z [Twoje Imię] przy wyborze kwiatów na mój ślub. Jej wiedza i umiejętność słuchania moich pomysłów były niesamowite. Dzięki jej konsultacjom otrzymałam idealne kwiaty na mój wielki dzień. To florystka, na której można polegać!<i class="fa-solid fa-quote-right icon_styling"></i></span>
                <div>Anna K. - Ślub Marzeń</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'OpinionsComponent',
    props: [],
    data(){
        return {
            content_show: false,
            div_object: 0,
        }
    },
    updated() {
        if ( this.content_show == false ){ 
            if ( this.isInAViewPort(this.div_object) ) {
                this.content_show = true
            }
        }
    },
    mounted() {
        this.div_object = document.getElementById(`opinions`)
    }
}
</script>

<style scoped>
    .opinions_container {
        padding: 5% 7% 5% 7%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    .opinions_title_style {
        opacity: 0;
        align-self: flex-end;
        display: flex;
        justify-content: flex-end;
        width: 55%;
        border-bottom: 1px  rgba(106, 106, 106, 1) solid;
        font-size: 4vw;
        color:rgba(106, 106, 106, 1);
        margin-bottom: 10%;
    }

    .opinions {
        height: 20vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .opinions_text_author {
        height: 100%;
        width: 40%;
        font-family: Raleway;
        font-size: 1.25vw;
        font-weight: 400;
        line-height: 1.95vw;
        letter-spacing: 0.02em;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .opinions_text_author div {
        width: 100%;
        font-weight: 600;
    }

    .icon_styling {
        color: rgba(254, 232, 240, 1);
        font-weight: 600;
        font-size: 2vw;
    }

    .transform_animation_left{
        opacity: 0;
        transform: translateX(-50vw);
    }

    .transform_animation_right{
        opacity: 0;
        transform: translateX(50vw);
    }

    .animation_active {
        opacity: 1;
        transform: translateX(0);
        transition: transform 2s, opacity 2s;
    }

    .active_title {
        opacity: 1;
        transition: opacity 3s;
    }

    @media (max-width: 1000px) {
        .opinions_container {
            height: 40vw;
            padding-top: 10%;
        }
        .desktop_visible {
            display: none;
        }

        .opinions_text_author {
            font-size: 2.5vw;
            width: 80%;
            line-height: 3vw;
        }
        .opinions_text_author span {
            font-size: 2vw;
            line-height: 3.5vw;
            width: 100%;
        }
        .opinions {
            height: 30vw;
        }
    }

    @media (max-width: 500px) {
        .opinions_container {
            padding-top: 10%;
            height: 60vw;
        }
        .opinions_title_style {
            font-size: 5vw;
        }
        .opinions_text_author {
            font-size: 2.5vw;
            width: 90%;
            line-height: 5vw; 
        }

        .opinions {
            height: 40vw;
        }
    }
</style>