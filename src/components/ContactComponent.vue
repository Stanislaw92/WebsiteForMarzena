<template>
    <div class="contact_container" id="contact">
        <div class="contact_title_style" :class="{active_title: content_show}">KONTAKT</div>
        <div class="map_adress">
            <img class="transform_animation_left" :class="{animation_active: content_show}" alt="" id="contact_photo">
            <div class="contact_text transform_animation_right" :class="{animation_active: content_show}">
                <div class="contact_description">Zapraszamy do kontaktu. Działamy na terenie woj. mazowieckiego - Warszawa i okolice.</div>
                <div class="contact_detail"><span><i class="fa-solid fa-location-pin icon-color"></i>&ensp;&nbsp;Adres </span>&nbsp;&emsp;Warszawa</div>
                <div class="contact_detail"><span><i class="fa-solid fa-phone icon-color"></i>&nbsp; Telefon </span>&nbsp;&nbsp;+48 732 703 131</div>
                <div class="contact_detail"><span><i class="fa-regular fa-envelope icon-color"></i>&nbsp; E-mail </span>&ensp;&ensp;frajdakreatywna@gmail.com</div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    props: ['data_src', 'posY'],
    name: 'ContactComponent',
    components: {

    },
    data(){
        return {
            content_show: false,
            div_object: 0,
        }
    },
    methods:{
        lazyShowContent() {
            this.content_show = true 
            const photo = document.getElementById('contact_photo')
            console.log(photo)
            photo.src = this.data_src
        }
    },

    updated() {
        if ( this.content_show == false ){ 
            if ( this.isInAViewPort(this.div_object) ) {
                this.lazyShowContent()
            }
        }
    },
    mounted() {
        this.div_object = document.getElementById(`contact`)
    }
}
</script>

<style scoped>
    .contact_container {
        margin: 0% 0 0% 0;
        padding: 5% 7% 10% 7%;
        display: flex;
        justify-content:flex-end;
        align-items: center;
        flex-direction: column;
    }

    .contact_title_style {
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

    .map_adress {
        height: 30vw;
        width: 90vw;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .map_adress img {
        width: 40%;
        object-fit: contain;
        height: 90%;
    }

    .contact_text {
        width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        height: 90%;
        font-size: 1.5vw;
        font-weight: 500;
        line-height: 3vw;
        letter-spacing: 0em;
        text-align: left;
        font-family: Raleway;
    }

    .contact_text span {
        font-weight: 700;
        font-size: 1.6vw;
    }

    .icon-color {
        color: rgba(208, 61, 116, 1);
    }

    .transform_animation_left{
        opacity: 0;
        transform: translateX(-50vw);
    }

    .transform_animation_right{
        opacity: 0;
        transform: translateX(50vw);
    }


    .active_title {
        opacity: 1;
        transition: opacity 3s;
    }

    .animation_active {
        opacity: 1;
        transform: translateX(0);
        transition: transform 2s, opacity 2s;
    }


    @media (max-width: 500px){
        .contact_container {
            padding-top:10%;
        }
        .contact_title_style {
            font-size: 5vw;
        }
        .map_adress {
            flex-direction: column-reverse;
            height: auto;
        }

        .map_adress img {
            width: 90%;
            padding: 10% 0 10% 0;

        }
        .contact_text {
            height: 60vw;
            align-items: center;
            width: 90%;
            font-size: 3vw;
            text-align: center;
            line-height: 4.5vw;
        }

        .contact_description {
            font-size: 3.5vw;
            line-height: 7vw;
            margin-bottom: 5vw;
            margin: 0;
            font-weight: 400;
            
        }

        .contact_text span {
            font-weight: 700;
            font-size: 3vw;
        }
        .contact_detail {
            align-self: flex-start;
            padding-left: 5%;
        }

    }
</style>