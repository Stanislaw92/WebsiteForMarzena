<template>
    <div class="offer_container" id="offer" ref="offer">
        <div class="offer_title_style" :class="{active_title: content_show}">OFERTA</div>
        <div class="offers">
            <div class="circle_photos">
                <div class="photo_text_pair">
                    <div class="single_circle_photo transform_animation_left" :class="{animation_active_2: content_show}">
                        <img alt="" id="photo1">
                    </div>
                    <div class="text_for_photo transform_animation_left" :class="{animation_active: content_show}">
                        <div>
                            <i class="fa-solid fa-circle icon"></i> Dekoracje ślubne
                        </div>
                        <p>
                            Przygotujemy piękne dekoracje na Twoją ceremonię i przyjęcie weselne, dostosowane do Twojego stylu.
                        </p>
                    </div>
                </div>
                <div class="photo_text_pair">
                    <div class="single_circle_photo transform_animation_left" :class="{animation_active_2: content_show}">
                        <img alt="" id="photo2">
                    </div>
                    <div class="text_for_photo transform_animation_left" :class="{animation_active: content_show}">
                        <div>
                            <i class="fa-solid fa-circle icon"></i> Dekoracje okolicznościowe
                        </div>
                        <p>
                            Tworzymy urocze dekoracje na różne wydarzenia tj. urodziny, jubileusze, chrzciny, komunie, baby shower.
                        </p>
                    </div>
                </div>
                <div class="photo_text_pair">
                    <div class="single_circle_photo transform_animation_left" :class="{animation_active_2: content_show}">
                        <img alt="" id="photo3">
                    </div>
                    <div class="text_for_photo transform_animation_left" :class="{animation_active: content_show}">
                        <div>
                            <i class="fa-solid fa-circle icon"></i> Dekoracje sezonowe
                        </div>
                        <p>
                            Zajmujemy się dekorcjami sezonowymi na Boże Narodzenie, Wielkanoc, dekoracje kościołów i wiele innych świąt.
                        </p>
                    </div>
                </div>
            </div>
            <div class="square_photo" :class="{active_title: content_show}">
                <div>
                    <img alt="" id="photo4">
                </div>
                <ButtonComponent 
                    :text = 'button_text'
                />
            </div>
        </div>

    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    props: ['data_src1','data_src2','data_src3', 'data_src4'],
    name: "OfferComponent",
    components: {
        ButtonComponent,

    },
    data() {
        return {
            button_text: 'NASZE REALIZACJE',
            content_show: false,
            div_object: 0,
        }
    },
    methods:{
        lazyShowContent() {
            this.content_show = true 
            const photo1 = document.getElementById('photo1')
            const photo2 = document.getElementById('photo2')
            const photo3 = document.getElementById('photo3')
            const photo4 = document.getElementById('photo4')
            photo1.src = this.data_src1
            photo2.src = this.data_src2
            photo3.src = this.data_src3
            photo4.src = this.data_src4
        }
    },
    updated() {
        if ( this.content_show == false && window.innerWidth < 1000){ 
            if ( this.isInAViewPort(this.div_object, -200) ) {
                this.lazyShowContent()
            }
        } else if (this.content_show == false && window.innerWidth > 1000) {
            if ( this.isInAViewPort(this.div_object) ) {
                this.lazyShowContent()
            } 
        }
    },
    mounted() {
        this.div_object = document.getElementById(`offer`)
        
    }
}
</script>

<style scoped>
    .offer_container {
        margin: 5% 0 0% 0;
        padding: 5% 7% 5% 7%;
        display: flex;
        justify-content:flex-end;
        align-items: center;
        flex-direction: column;
        background-color: rgba(254, 232, 240, 1);
    }
    .offer_title_style {
        opacity: 0;
        align-self: flex-end;
        display: flex;
        justify-content: flex-end;
        width: 55%;
        border-bottom: 1px  rgba(106, 106, 106, 1) solid;
        font-size: 4vw;
        color:rgba(106, 106, 106, 1);
        margin-bottom: 5%;
    }
    .offers {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .circle_photos {
        width: 45%;
        height: 40vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }

    .photo_text_pair {
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: space-between;
    }
    .single_circle_photo {
        width: 26.25%;
    }

    .single_circle_photo img {
        border-radius: 50%;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .text_for_photo {
        align-self: center;
        height: 80%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        width: 65%;
        display: flex;

    }

    .text_for_photo div {
        font-family: Raleway;
        font-size: 1.5vw;
        font-weight: 600;
        line-height: 2.25vw;
        letter-spacing: 0.02em;
        margin-bottom: 1vw;

    }

    .text_for_photo p {
        padding-left: 1.4vw;
        text-align: justify;
        margin: 0;
        font-family: Raleway;
        font-size: 1.1vw;
        font-weight: 400;
        line-height: 2vw;
        letter-spacing: 0.02em;
        text-align: justified;

    }

    .icon {
        font-size: 1vw;
        transform: translateY(-0.2vw);
        color: rgba(246, 157, 191, 1)
;
    }

    .square_photo {
        opacity: 0;
        height: 40vw;
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        object-fit: contain;
    }
    .square_photo div {
        align-self: flex-end;
    }

    .square_photo div img{
        width: 38.1vw;
        height: 33vw;
        object-fit: cover;
    }

    .transform_animation_left{
        opacity: 0;
        transform: translateX(-50vw);
    }

    .animation_active {
        opacity: 1;
        transform: translateX(0);
        transition: transform 1.5s, opacity 2s;
    }

    .animation_active_2 {
        opacity: 1;
        transform: translateX(0);
        transition: transform 2.5s, opacity 2s;
    }

    .active_title {
        opacity: 1;
        transition: opacity 2s ease-in 0.5s;
    }

    @media (max-width:1000px) {
        .offer_container {
            padding-top: 10%;
        }
        .offers {
            flex-direction: column;
        }
        .square_photo {
            height: 75vw;
            flex-direction: column-reverse;
            justify-content:space-around;
            width: 70%;
        }

        .circle_photos {
            height: 60vw;
            width: 70%;
        }
        .square_photo div {
            width: 100%;
            align-self: center;
        }

        .square_photo div img {
            margin: 10% 0 10% 0;
            height: 50vw;
            width: 100%;
            margin: 0;
        }
        .single_circle_photo {
            width: 15vw;
        }
        .text_for_photo p {
            font-size: 1.8vw;
            line-height: 3vw;
        }

        .text_for_photo div {
            font-size: 2.5vw;
            line-height: 3.75vw;
        }
    }

    @media (max-width: 500px) {
        .offer_container {
            padding-top: 10%;
        }
        .offer_title_style {
            font-size: 5vw;
        }
        .photo_text_pair {
            flex-direction: column;
            width: 100%;
            height: 30%;
        }

        .circle_photos {
            height: 250vw;
            width: 90%;
        }

        .single_circle_photo {
            align-self: center;
            height: 40vw;
            width: 40vw;
        }

        .single_circle_photo img{
            height: 40vw;
            width: 40vw;
        }
        .text_for_photo {
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
        }
        .text_for_photo div {
            align-self: center;
            margin: 0;
            font-size: 4vw;
            margin: 2vw 0 2vw 0;
        }
        .icon {
            font-size: 3vw;
        }

        .text_for_photo p {
            font-size: 3vw;
            line-height: 4.5vw;
            padding: 0;
            width: 100%;
        }
        .square_photo {
            height: 100vw;
        }        
        .square_photo div img {
            height: 70vw;
        }
    }

</style>