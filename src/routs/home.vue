<template>
    <div>
        <h1>Starwars wiki</h1>
        <h3>What is this?</h3>
        <div class="text">The starwars wiki includes almost all information on the Star Wars film series!</div>
        <div>I get Api from <a href="https://swapi.dev/">swapi.dev</a> and created this SPA</div>
        <div>
            <hr>
            <h3>this SPA include info about 60 planets</h3>
            
                <div class="row">
                    <planetcard 
                    v-for="(planet) of this.planets" :key='planet + Math.random()'
                    v-bind:link="'http://swapi.dev/api/planets/' + planet + '/'"/>
                </div>
                <router-link to="/planets/1" tag="button" class="waves-effect waves-light btn-large deep-purple darken-4">get more planets</router-link>
        </div>
        <div>
            <hr>
            <h3>82 person</h3>
                <div class="row">
                    <personcard 
                    v-for="(person) of this.people" :key='person + Math.random()'
                    v-bind:link="'http://swapi.dev/api/people/' + person + '/'"/>
                </div>
                <router-link to="/people/1" tag="button" class="waves-effect waves-light btn-large deep-purple darken-4">get more people</router-link>
        </div>
        <div>
            <hr>
            <h3>6 films</h3>
                <div class="row">
                    <filmcard 
                    v-for="(film) of this.films" :key='film + Math.random()'
                    v-bind:link="'http://swapi.dev/api/films/' + film + '/'"/>
                </div>
                <router-link to="/films/1" tag="button" class="waves-effect waves-light btn-large deep-purple darken-4">get more films</router-link>
        </div>
         <div>
            <hr>
            <h3>37 species</h3>
                <div class="row">
                    <speciescard 
                    v-for="(type) of this.species" :key='type + Math.random()'
                    v-bind:link="'http://swapi.dev/api/species/' + type + '/'"/>
                </div>
                <router-link to="/species/1" tag="button" class="waves-effect waves-light btn-large deep-purple darken-4">get more species</router-link>
        </div>
        <h4>wait a second ... <br>
        not the best solution to tell about everything here <br>
        <a href="#">enjoy it! ;)</a></h4>
    </div>
</template>

<script>
import planetcard from '../components/planetcard'
import personcard from '../components/personcard'
import filmcard from '../components/filmcard'
import speciescard from '../components/speciescard'
export default {
    name: 'home',
    components: {
        planetcard,
        personcard,
        filmcard,
        speciescard,
    },
    data(){
        return {
            planets: [Math.round(Math.random() * (60 - 1) + 1), Math.round(Math.random() * (60 - 1) + 1),Math.round(Math.random() * (60 - 1) + 1),Math.round(Math.random() * (60 - 1) + 1)],
            people: [Math.round(Math.random() * (82 - 1) + 1), Math.round(Math.random() * (82 - 1) + 1), Math.round(Math.random() * (82 - 1) + 1), Math.round(Math.random() * (82 - 1) + 1)],
            films: [Math.round(Math.random() * (6 - 1) + 1), Math.round(Math.random() * (6 - 1) + 1)],
            species: [Math.round(Math.random() * (37 - 1) + 1), Math.round(Math.random() * (37 - 1) + 1), Math.round(Math.random() * (37 - 1) + 1), Math.round(Math.random() * (37 - 1) + 1),],
            }
    },
    mounted(){
        // const getRandomArbitrary = (min, max) => {
        //     return Math.random() * (max - min) + min;
        // }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
    button {
        display: block;
        margin: 0 auto;
    }
</style>