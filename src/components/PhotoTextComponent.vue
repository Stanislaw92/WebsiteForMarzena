<template>
   <div class="home_text_img_container">
        <div class="home_text">
            <h1>Twoje Kwiaty, Nasza Pasja: Wyjątkowe Kompozycje Florystyczne</h1>
            <h3>Tworzymy piękno w kwiatowym stylu</h3>
            <ButtonComponent
                :text = "button1"
            />
        </div>
        <div class="img_container">
            <img src="../assets/Rectangle 6.png" alt="">
        </div>
   </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'

export default {
    name: 'PhotoTextComponent',
    components: {
        ButtonComponent
    },
    data(){
        return {
            button1: 'OFERTA'
        }
    }
}
</script>

<style scoped>
img {
    width: 100%;
}

h1 {
    text-align: right;
}

.home_text_img_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.home_text {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width: 48%;
    color: #6A6A6A;
    font-family: "Raleway", sans-serif;
}

.home_text h1 {
    
    margin: 0 0 0 28%;
    padding-bottom: 10px;
    
    /* width: 53%; */
    border-bottom: 1px rgba(0, 0, 0, 0.393) solid;
    font-size: 3.5vw;

    text-shadow: rgba(0, 0, 0, 0.25) 0px 2px 1px;

    line-height: 5.25vw;
}

.home_text h3 {
    font-size:2vw;
    font-weight: 400;
}

.img_container {
    width: 50%;
}

@media (max-width: 500px){
    .home_text_img_container {
        flex-direction: column-reverse;
    }

    .home_text {
        width: 80%;
        
    }

    .home_text h1 {
        width: 100%;
        font-size: 6vw;
        line-height: 9vw;
        margin-left: 0;
    }

    .home_text h3 {
        font-size: 4vw;
    }

    .img_container {
        height: 300px;
        width: 80%;
        margin: 5% 0 5% 0;
    }

    .img_container img {
        height: 100%;
        object-fit: cover;
    }
    
}
</style>