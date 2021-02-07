<template>
    <div>
        <div class="overflow"
        v-if="!this.films.results">
            <div class="lds-hourglass"></div>
        </div>
        <filmcard
        v-for="(film) of this.films.results" 
        v-bind:key="film.url.match(/\d{1,}/g)[0]"
        v-bind:link="film.url"/>
    </div>
</template>

<script>
import filmcard from '../components/filmcard'
export default {
    name: 'films',
    data() {
        return {
            films: [],
        }
    },
    components: {
        filmcard,
    },
    mounted() {
        fetch(`https://swapi.dev/api/films/`)
            .then(response => response.ok ? response : Promise.reject(response))
            .then(response => response.json())
            .then(json => this.films = json)
            .catch(() => this.$router.push('/error'))
    },
}
</script>

<style lang="scss">
.lds-hourglass {
        padding-top: 25%;
        margin: 0 auto;
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        z-index: 1001;
    }
    .lds-hourglass:after {

        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid #cef;
        border-color: #cef transparent #cef transparent;
        animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
            transform: rotate(1800deg);
        }
    }

    .overflow {
        position: fixed;
        left: 0;
        top: 0%;
        width: 100%;
        height: 100%;
        background-color: rgb(37, 37, 37);
        z-index: 1000;
    }
    .pagebuttons {
        display: flex;
        justify-content: space-around;
    }
    @media (max-width: 584px) {
        .pagelinks {
            display: none;
    }}
    

</style>