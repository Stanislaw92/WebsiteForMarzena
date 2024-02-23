<template>
    <div class="navbar_container">
        <div 
            v-if="desktop"
            class="navbar_logo_cuts_container">
            <div class="navbar_logo_container">
                FrajdaKreatywna
            </div>
            <div class="hamburger" @click="navToggle" :class="toggle_store.toggle ? 'hamburger--is-open' : ''">
                <div class="hamburger__item hamburger__item--first"></div>
                <div class="hamburger__item hamburger__item--middle" style="z-index: 300;"></div>
                <div class="hamburger__item hamburger__item--last"></div>
            </div>
            <div class="navbar_shortcuts_container">
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 0)"
                    >
                        HOME
                    </div>
                    <!-- <a class="navbar_short_cut " href="#about" v-smooth-scroll="{duration:1000, offset: -50 }">O MNIE</a> -->
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 'about')"
                    >
                        O MNIE
                    </div>
                    <!-- <a class="navbar_short_cut " href="#offer" v-smooth-scroll="{duration:1000, offset: -50 }">OFERTA</a> -->
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 'offer')"
                    >
                        OFERTA
                    </div>
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('portfolio', 0)"
                    >
                        PORTFOLIO
                    </div>
                    <!-- <a class="navbar_short_cut " href="#contact" v-smooth-scroll="{duration:1000, offset: -50 }">KONTAKT</a> -->
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 'contact')"
                    >
                        KONTAKT
                    </div>
            </div>
        </div>
        <Sidebar @close_offerts="close_offerts">
            <ul class="navbar_sidebar-panel-nav">
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 0)"
                    >
                        HOME
                    </div>
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 'about')"
                    >
                        O MNIE
                    </div>
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 'offer')"
                        
                    >
                        OFERTA
                    </div>
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('portfolio', 0)"
                    >
                        PORTFOLIO
                    </div>
                    <div
                        class="navbar_short_cut "
                        @click="pushPageAndSubject('/', 'contact')"
                    >
                        KONTAKT
                    </div>
            </ul>
        </Sidebar>
    </div>
</template>

<script>
// import {ref} from 'vue'
// import { Icon } from '@iconify/vue';
import { useToggleStore } from '@/stores/store.js'
import Sidebar from './SidebarComponent'
export default {
    name: 'NavbarComponent',
    data() {
        return {
            desktop: true,
            hamburgerOpen: false,
            toggle_store: useToggleStore(),
            offert_clicked: false,
            white_dropbar: true,
            
        }
    },
    methods: {
        scrollPageTo(target){
            console.log(typeof target)
            if (typeof target == "number") {
                this.closeNav()
                this.$smoothScroll({
                    scrollTo: target,
                    duration: 1000,
                    offset: -50,
                })
            } else {
                const target_id = document.getElementById(`${target}`)
                this.closeNav()
                this.$smoothScroll({
                    scrollTo: target_id,
                    duration: 1000,
                    offset: -50,
                })

            }
        },
        navToggle() {
            this.toggle_store.toggleNavbar()
        },
        closeNav(){
            this.toggle_store.closeNavbar()
        },
        closePanel() {
            this.hamburgerOpen = false
        },
        close_offerts(){
            this.offert_clicked = false
        },
        pushPageAndSubject(pageName, subject){
            this.closeNav()
            this.$router.push(`${pageName}`)
            setTimeout(() => {
                this.scrollPageTo(subject)
            }, 300); 
        },
        toggleOffert(){
            this.offert_clicked = !this.offert_clicked
        }
    },
    components: {
        Sidebar,
        // Icon
    },
    watch:{
        $route (){
            this.offert_clicked = false
            if (this.$route.path == '/') {
                this.white_dropbar = true
            } else {
                this.white_dropbar = false
            }
        },
    },
} 

</script>

<style scoped>
.navbar_container, .navbar_logo_container, .navbar_shortcuts_container, .navbar_logo_cuts_container
{
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar_container {
    position: fixed;
    /* min-width: 550px; */
    width: 100vw;
    max-width: 100%;
    height: 80px;
    justify-content: space-between;
    background: white;
    z-index: 10;
}

.navbar_logo_container {
    font-family: Poppins;
    letter-spacing: 0;
    font-size: 4vw;
    line-height: 45.36px;
    font-weight: 700;
    /* color: var(--primary-color-red); */
    color: rgba(208, 61, 116, 1);

}

.navbar_shortcuts_container {
    width: 40%;
    justify-content: space-evenly;
}


.navbar_short_cut {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--primary-blue-dark);
    text-decoration: none;
    cursor: pointer;
}


.navbar_logo_cuts_container {
    width: 100%;
    justify-content:space-between;
    /* margin-left: 20%; */
    /* margin-right: 5%; */
}

.hamburger {
  height: 30px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
.hamburger:hover {
  cursor: pointer;
}
.hamburger__item {
    height: 4px;
    width: 100%;
    background: rgb(0, 0, 0);
    transition: transform 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 400ms linear, background-color 400ms linear;
    z-index: 1000;


}
.hamburger--is-open .hamburger__item--first {
  transform: translate(0, 13px) rotate(45deg);
  background-color: rgb(0, 0, 0);
}
.hamburger--is-open .hamburger__item--middle {
  opacity: 0;
  background-color: rgb(0, 0, 0);
}
.hamburger--is-open .hamburger__item--last {
  transform: translate(0, -13px) rotate(-45deg);
  background-color: rgb(0, 0, 0);
}

.navbar_sidebar-panel-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px 0 20px;
}

.current_route {
    color: var(--primary-color-red);
}


@media (min-width: 1150px) {
    .navbar_logo_container {
        font-size: 46px;
    }
}

@media (min-width: 850px) {
    .hamburger {
        display: none;
    }   
    .navbar_logo_cuts_container {
        margin: 0 3% 0 10%;
    }
    .navbar_shortcuts_container {
        width: 50%;
    }
}

@media (max-width: 849px) {
    .navbar_shortcuts_container {
        display: none;
    }
    .navbar_logo_cuts_container {
        margin: 0 5% 0 10%;
        
    }
}

/* @media (max-width: 600px) {
    .navbar_logo_container {
        font-size: 6vw;
    }
} */

@media (max-width: 500px){
    .navbar_logo_container {
        font-size: 20px;
    }
}


</style>