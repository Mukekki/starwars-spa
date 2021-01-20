<template>
    <div>
        <div class="overflow"
        v-if="!planets.results">
            <div class="lds-hourglass"></div>
        </div>
        <planetcard 
        v-else
        v-for="(planet) of planets.results" :key="planet.name"
        v-bind:link="planet.url"
        />
        <div class="pagebuttons">
            <router-link 
            v-bind:class="{disabled: !planets.previous }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/planets/' + this.previospage">back</router-link>
            <div>
                <router-link
                tag="button"
                :to="'/planets/1'"
                class="waves-effect waves-light btn-large indigo darken-3">1</router-link>
                <router-link
                tag="button"
                :to="'/planets/2'"
                class="waves-effect waves-light btn-large indigo darken-3">2</router-link>
                <router-link
                tag="button"
                :to="'/planets/3'"
                class="waves-effect waves-light btn-large indigo darken-3">3</router-link>
                <router-link
                tag="button"
                :to="'/planets/4'"
                class="waves-effect waves-light btn-large indigo darken-3">4</router-link>
                <router-link
                tag="button"
                :to="'/planets/5'"
                class="waves-effect waves-light btn-large indigo darken-3">5</router-link>
                <router-link
                tag="button"
                :to="'/planets/6'"
                class="waves-effect waves-light btn-large indigo darken-3">6</router-link>
            </div>
            <router-link
            v-bind:class="{disabled: !planets.next }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/planets/' + this.nextpage">Next</router-link>
        </div>
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
            planets: [],
            nextpage: +this.$route.params.number,
            previospage: +this.$route.params.number,
        }
    },
    methods: {
    },
    mounted() {
        fetch(`http://swapi.dev/api/planets/?page=${this.$route.params.number}`)
            .then(response => response.json())
            .then(json => this.planets = json)    
            this.nextpage = this.nextpage + 1
            this.previospage = this.previospage - 1
    }
}
</script>

<style>
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
</style>