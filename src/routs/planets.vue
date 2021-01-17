<template>
    <div>
        <div class="lds-hourglass"
        v-if="planets.length < 1"></div>
        <planetcard 
        v-else
        v-for="(planet, i) of planets" :key="planet.id"
        v-bind:planet="planet"
        v-bind:index="i"
        />
    </div>
</template>

<script>
import planetcard from '../components/planetcard'
export default {
    name: 'planets',
    components: {
        planetcard,
    },

    data() {
        return {
            planets: []
        }
    },
    mounted() {
        fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(json => this.planets = json.results)
    }
}
</script>

<style>
    .lds-hourglass {
        padding-top: 2rem;
        margin: 0 auto;
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
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

</style>