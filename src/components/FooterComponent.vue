<template>
    <div class="footer_container">
        <div class="footer_logo_container" @click="scrollPageTo(0)">FrajdaKreatywna</div>
        <div class="footer_shortcuts_description">
            <div class="footer_contact">
                <div><span><i class="fa-solid fa-location-pin icon-color"></i>&ensp;&nbsp;Adres </span>&nbsp;&emsp;Warszawa</div>
                <div><span><i class="fa-solid fa-phone icon-color"></i>&nbsp; Telefon </span>&nbsp;+48 732 703 131</div>
                <div><span><i class="fa-regular fa-envelope icon-color"></i>&nbsp; E-mail </span>&ensp;&ensp;frajdakreatywna@gmail.com</div>
            </div>
            <div class="footer_offer">
                <div class="bold">OFERTA</div>
                <div>Dekoracje ślubne</div>
                <div>Dekoracje okolicznościowe</div>
                <div>Dekoracje sezonowe</div>
            </div>
            <div class="footer_shortcuts">
                <div class="bold">NA SKRÓTY</div>
                <div @click="pushPageAndSubject('/', 'about')">O mnie</div>
                <div @click="pushPageAndSubject('/', 'offer')">Oferta</div>
                <div @click="pushPageAndSubject('portfolio', 0)"> Portfolio</div>
            </div>
        </div>
        <div class="footer_bootom_sign"><i class="fa-regular fa-copyright"></i> Copyright, 2023</div>
    </div>
</template>

<script>
export default {
 name: 'FooterComponent',
 methods: {
        scrollPageTo(target){
            if (typeof target == "number") {
                this.$smoothScroll({
                    scrollTo: target,
                    duration: 1000,
                    offset: -50,
                })
            } else {
                const target_id = document.getElementById(`${target}`)
                this.$smoothScroll({
                    scrollTo: target_id,
                    duration: 1000,
                    offset: -50,
                })

            }
        },
        pushPageAndSubject(pageName, subject){
            this.$router.push(`${pageName}`)
            setTimeout(() => {
                this.scrollPageTo(subject)
            }, 100); 
        },
    },
    computed: {
        checkRoute() {
            if (this.$route.name == '/') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
    .footer_container {
        height: 35vw;
        background-color:rgba(161, 175, 166, 1);
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 4% 6% 3% 6%;
    }

    .footer_logo_container {
        align-self: flex-start;
        height: 15%;
        font-family: Poppins;
        letter-spacing: 0;
        font-size: 3.5vw;
        cursor: pointer;
        /* line-height: 45.36px; */
        font-weight: 700;
        /* color: var(--primary-color-red); */
        color: rgba(208, 61, 116, 1);

    }

    .footer_shortcuts_description {
        color: white;
        height: 60%;
        align-self: flex-end;
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer_contact, .footer_offer, .footer_shortcuts {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        height: 70%;
        font-size: 1.5vw;
        font-weight: 500;
        line-height: 3vw;
        letter-spacing: 0em;
        text-align: left;
    }

    .footer_contact{
        height: 60%;
    }

    .footer_contact div, .footer_offer div, .footer_shortcuts div {
        text-align: left;
        font-family: Raleway;

    }

    .footer_shortcuts {
        cursor: pointer;
    }

    .footer_contact span {
        font-weight: 700;
        font-size: 1.6vw;
    }

    .bold {
        cursor:auto;
        font-weight: 700;
        font-size: 1.6vw;
    }

    .footer_bootom_sign {
        font-family: Raleway;
        font-size: 2vw;
        font-weight: 400;
        letter-spacing: 0.02em;
        text-align: center;
        color: white;

    }

    .icon-color {
        color: rgba(208, 61, 116, 1);
    }


    @media (min-width: 500px) and ( max-width: 1000px) {
        .footer_container {
            height: 40vw;
            padding: 5% 10% 5% 10%;
        }
        .footer_logo_container {
            font-size: 5vw;
        }

        .footer_shortcuts_description {
            width: 100%;
            align-self: center;
        }
        .footer_contact, .footer_offer, .footer_shortcuts {
            font-size: 1.6vw;
        }

        .footer_contact span {
            font-size: 1.8vw;
        }
    }

    @media (max-width: 500px) {
        .footer_container {
            height: 50vw;
            padding: 5% 10% 5% 10%;
        }

        .footer_logo_container {

            font-size: 5vw;
        }
        
        .footer_shortcuts, .footer_offer {
            display: none;
        }

        .footer_shortcuts_description {
            width: 100%;

        }
        .footer_contact {
            font-size: 3vw;
            width: 100%;
            height: 100%;
            justify-content: space-around;
        }

        .footer_contact div {
            width: 100%;

        }

        .footer_contact span {
            margin-right: 5%;
            font-size: 3vw;
        }
    }
</style>