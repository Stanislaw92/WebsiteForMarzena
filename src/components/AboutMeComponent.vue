<template>
    <div class="about_me_container" id="about">
        <span v-if="screenWidth <= 1000" class="about_me_title_style invisible_component" 
            :class="{activate_img: content_show}">O MNIE</span>
        <div class="about_me_photo_text_container" 
            :class="{activate_img: content_show}"
        > 

            <div class="about_me_img"
                
            >
                <img alt="" id="photo">
            </div>
            <div class="about_me_text ">
                <span v-if="screenWidth > 1000" class="about_me_title_style">O MNIE</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Id sagittis imperdiet suspendisse ut condimentum proin malesuada tempor. In imperdiet orci sit sagittis amet malesuada commodo facilisis purus. Lectus ultricies pellentesque in volutpat nec urna. Habitant tristique pharetra non amet molestie eu nec. Nec quam lectus risus sollicitudin elementum. Eu diam commodo dignissim lacus faucibus. Eu ut a justo nunc morbi arcu nunc. Integer at eget sed ultrices. Et semper integer nulla imperdiet vestibulum <br/><br/><br/>

                    Lorem ipsum dolor sit amet consectetur. Id sagittis imperdiet suspendisse ut condimentum proin malesuada tempor. In imperdiet orci sit sagittis amet malesuada commodo facilisis purus. Lectus ultricies pellentesque in volutpat nec urna. Habitant tristique pharetra non amet molestie eu nec. Nec quam lectus risus sollicitudin elementum. 
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data_src'],
    name: 'AboutMeComponent',
    data(){
        return {
            screenWidth: window.innerWidth,
            content_show: false,
            div_object: 0,
        }
    },
    methods: {
        lazyShowContent() {
            this.content_show = true 
            const photo = document.getElementById('photo')
            photo.src = this.data_src
        }
    },
    updated() {
        if ( this.content_show == false ){ 
            if ( this.content_show == false && window.innerWidth < 1000){ 
                if ( this.isInAViewPort(this.div_object, -100) ) {
                    this.lazyShowContent()
                }
            } else if ( this.isInAViewPort(this.div_object) ) {
                    this.lazyShowContent()
            }
        }
    },
    mounted() {
        this.div_object = document.getElementById(`about`)
        if ( this.content_show == false && window.innerWidth < 1000){ 
            if ( this.isInAViewPort(this.div_object, -200) ) {
                this.lazyShowContent()
            }
        } else if ( this.isInAViewPort(this.div_object) ) {
                this.lazyShowContent()
        }
    }
}
</script>

<style scoped>
    img {
        width: 100%;
    }
    .about_me_container {

        margin: 5% 0 0% 0;
        padding:5% 7% 5% 7%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(254, 232, 240, 1);
    }
    .about_me_photo_text_container {
        opacity: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .invisible_component {
        opacity:0;
    }

    .about_me_img {
        width: 40%;
        object-fit: fill;

    }



    .about_me_text {
        width: 55%;
    }

    .about_me_title_style {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        border-bottom: 1px  rgba(106, 106, 106, 1) solid;
        font-size: 4vw;
        color:rgba(106, 106, 106, 1);
        margin-bottom: 10%;
    }

    .activate_img {
        opacity: 1;
        transition: opacity 2s;
    }

    .about_me_text p {
        text-align: right;
        font-size: 1.6vw;
        margin: 0;

        font-family: Raleway;
        font-weight: 400;
        line-height: 2.4vw;
        letter-spacing: 0.02em;
        text-align: right;
    }

    @media (min-width: 500px) and ( max-width: 1000px) {
        .about_me_container {
            flex-direction: column;
            align-items: flex-end;

        }
        .about_me_img {
            width: 40%;
        }
        .about_me_text {
            width: 50%;
            padding:0;

        }
        .about_me_text p {
            text-align: right;
            font-size: 1.7vw;
            line-height: 2.55vw;
            
        }
        .about_me_title_style {
            width: 70%;
            font-size: 4vw;
            padding: 6% 0 3% 0;
        }
    }

    @media (max-width: 500px){
        .about_me_photo_text_container {
            flex-direction: column;
        }
        .about_me_container {
            flex-direction: column;
            align-items: flex-end;

        }
        .about_me_img {
            width: 90%;
        }
        .about_me_text {
            width: 90%;
            padding: 6% 0 6% 0;
        }
        .about_me_text p {
            text-align: justify;
            font-size: 2.5vw;
            line-height: 5vw;
        }
        .about_me_title_style {
            width: 50%;
            font-size: 5vw;
            padding: 6% 0 3% 0;
        }
    }
</style>