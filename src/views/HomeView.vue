<template>
    <div class="home_container">
        <PhotoTextComponent />
        <AboutMeComponent 
            :posY="scrollY"
        />
        <OpinionsComponent 
            :posY="scrollY"
        />
        <OfferComponent 
            :posY="scrollY"
        />
        <ContactComponent 
            :posY="scrollY"
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
            posY_for_each_width: [
                [204,0,0],
                [876, 270, 806],
                [1327, 768, 1110]
            ],
            window_size: 0,
            // screen_position_y: this.checkWindowWidth
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
            console.log(this.scrollY)
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