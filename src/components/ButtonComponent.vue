<template>
    <button class="button">
        {{text}}
    </button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: ['text']
}
</script>

<style scoped>
    .button {
        margin-top: 5%;
        padding: 1.5vw 5vw 1.5vw 5vw;
        height: auto;
        /* width: 100px; */
        border-radius: 5px;
        border: 0;
        color: white;
        font-size: 1.5vw;
        font-weight: 500;
        background-color:rgba(246, 157, 191, 1) ;
    }


    @media (max-width: 500px){
        .button {
            font-size: 3vw;
            padding: 2vw 6vw 2vw 6vw;
        }
    }
</style>