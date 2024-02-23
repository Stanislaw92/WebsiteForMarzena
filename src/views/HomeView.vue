<template>
    <div class="home_container">
        <PhotoTextComponent />
        <AboutMeComponent 
            :posY="scrollY"
            :data_src="aboutMeSRC"
        />
        <OpinionsComponent 
            :posY="scrollY"
        />
        <OfferComponent 
            :posY="scrollY"
            :data_src1 ="offer1_src"
            :data_src2 ="offer2_src"
            :data_src3 ="offer3_src"
            :data_src4 ="offer4_src"
        />
        <ContactComponent 
            :posY="scrollY"
            :data_src ="contact_src"
        />

    </div>
</template>

<script>
import ContactComponent from '@/components/ContactComponent.vue'
import OfferComponent from '@/components/OfferComponent.vue'
import AboutMeComponent from '@/components/AboutMeComponent.vue'
import PhotoTextComponent from '../components/PhotoTextComponent.vue'
import OpinionsComponent from '@/components/OpinionsComponent.vue'
export default {
    name: "HomeView",
    components: {
        PhotoTextComponent,
        AboutMeComponent,
        OpinionsComponent,
        OfferComponent,
        ContactComponent
        
    },
    data() {
        return {
            scrollY: 0,
            screenWidth: 0,
            window_size: 0,
            aboutMeSRC: 'https://s3-alpha-sig.figma.com/img/4832/c602/b5b07662a9b7d602ea5b887d14707591?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TK4Gw~ivIQB56wh1pOCbV0nRBbmjkTjYGjNId461YZ-GvKiTq8YpWJ7qaSTXQH7uqpv1utYXClw8howvLV21HcTjwhNq5s5JLhqtzxlavojK-fLxEO4LANb4YOoc-BySzlIOPsQ4HR9uvpjNpvQ6y9LSEPA6l7ufAMos8pbFg87tjF6AtbAxUIX4B9b~OWgboIbQA3qG3HC5WBjsQI9b9vPtKk7MuVtozKxKz8bLjbJtRvEa1bRs3xGV0OjSJovCvIX03ODPADXnqq~MxS34JEHOWTkSZRdtPqhrD~HUOj7No26ClHAA5T5A0MyNp32byMzEs0EEMIdHg2vCFTWtXQ__',
            offer1_src: 'https://s3-alpha-sig.figma.com/img/4832/c602/b5b07662a9b7d602ea5b887d14707591?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TK4Gw~ivIQB56wh1pOCbV0nRBbmjkTjYGjNId461YZ-GvKiTq8YpWJ7qaSTXQH7uqpv1utYXClw8howvLV21HcTjwhNq5s5JLhqtzxlavojK-fLxEO4LANb4YOoc-BySzlIOPsQ4HR9uvpjNpvQ6y9LSEPA6l7ufAMos8pbFg87tjF6AtbAxUIX4B9b~OWgboIbQA3qG3HC5WBjsQI9b9vPtKk7MuVtozKxKz8bLjbJtRvEa1bRs3xGV0OjSJovCvIX03ODPADXnqq~MxS34JEHOWTkSZRdtPqhrD~HUOj7No26ClHAA5T5A0MyNp32byMzEs0EEMIdHg2vCFTWtXQ__',
            offer2_src: "https://s3-alpha-sig.figma.com/img/5dc8/cb19/8aa364015145e78ecf65259aaece37ec?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umk9tw6n5gKXniIQIpMTR3MfzR9rwVTMriBszP8DzCotDULM5GLrcTAlGk-Gkn0clzryMCI8tyH5dHxSGIT3ovVkXuYdmMyAEajmM5tKjowlhz0pMlA3HomySn3EJjKLVogrCbELg3j~duv9j9JWJGO9OUnAb9UJ4t~qKYph5Oc7E9-~qfLcK4luZ0INkDHdMXemWayS~SId3bf5q5mpzXAiQCXGp721NR41nYsE6xPSG8IoYbFSL88YP5-~vvLWtjbv7jBgBWrqQi2BmwNGBl4Y299PxtgFhA0Hj7ayEhiOigRo1XGfgu-T9h26~Km9TUKYbHm3KGKWDU6-MOQOnQ__",
            offer3_src: "https://s3-alpha-sig.figma.com/img/b583/e309/0a073806abc968b600803977e7659e03?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTq-dtyByai61S7DC1JuI8XYyqXL-aq9zS9S1A7xq6-B2dakvs2fEo8vXRtRrZg0mv-~LwVYinM-DV9QkqclaU3vc0Y4FXqgV6sChWUc6rL5R19xKPQN-VVrJwgiM7CeUEU5XIyw4L65GpMx0YpvkHHnwHHuiPWT7~N1b3ZbMRpPG58FNa3~oP8AfocofflsFSb5RHFO~okZSjfLX99SAm2E77KIE0jp3duCuuBZW8ZZL4uqT2~k8ZOf~mQ9HDBNsDHiE0ritw1fK6~JX5EFmPYX08CShtkz2Sm5OKkRpB-Mh0qF6mrSuU~4Zd1C7dhIQKt6WFZ0OWoimDKGkqpX~Q__",
            offer4_src: 'https://i.pinimg.com/originals/35/94/ff/3594ffe30d86328a0db1b342d6a531a6.jpg',
            contact_src: "https://s3-alpha-sig.figma.com/img/dcf3/3c18/e2083b40c6309cef6324224f87231c0c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BaA04gQRzuOgO9Qa8sY-hIaqIBVK23cPaU-8MBAFqSH6VufYWmd2lSF6cmHYzKQohEbhmVEc~O27i2lNlxjt39qVTl~WmXvlp9Puw4XFTGpqe9I8oYMvyu2aQQimnEzcSGegsDYB2FGeCUngXA0IL2fTELfWsrqk6vgZJgpMHc5eQTW2tQLRp8a0K97V19mlqGZ0n4Lpp~McopKZ~6skALFMCyY9I4nxYzu2z7JPOxxEKWJRoBEhxBmQFHF77Y3kVqg7pIUMxpL7iSsm91UTifIFypXLjtUwXHc8EvswaqY~GxvLoErgyLPzSo~RtG5nDh5nxPYJHkv4dqce0Ob6ZQ__"
        }
    },
    computed: {
    },
    methods: {
        updateScreenWidth(){
            this.screenWidth = window.innerWidth
            if (this.screenWidth >= 1000){
                this.window_size = 0
            } else if (this.screenWidth >= 500 && this.screenWidth < 1000) {
                this.window_size = 1
            } else {
                this.window_size = 2
            }
        },
        onScreenResize() {
            window.addEventListener('resize', ()=>{
                this.updateScreenWidth()
            })
        },
        onScroll(){
            window.addEventListener('scroll', ()=>{
                this.updatePosY()
            })
        },
        updatePosY() {
            this.scrollY = window.scrollY
            // console.log(this.scrollY)
            // console.log(this.scrollY)
            // console.log(document.documentElement.clientHeight)
        }
    },
    created() {
        this.updateScreenWidth()
        this.onScreenResize()
        this.onScroll()
        this.updatePosY()
    },
    mounted() {
    }
}
</script>

<style>
body {
    margin: 0;
}
.home_container {
    width: 100%
}
</style>