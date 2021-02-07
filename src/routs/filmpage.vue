<template>
    <div class="page">
        <div class="data">
            <div><span>Created </span>{{new Date(film.created).toLocaleDateString()}}</div>
            <div><span>Edited </span>{{new Date(film.edited).toLocaleDateString()}}</div>
        </div>
        <img 
        class="materialboxed" width="100%" :src="findImage" ref="image">
        <div class="overflow"
        v-if="!film.title">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else-if="film">
            <div class="info">
                <hr>
                <h2>{{film.title}}</h2>
                <div>{{film.opening_crawl}}</div>
                <hr>
                <div>Producer - {{film.producer}} </div>
                <div>Director - {{film.director}}</div>
                <div>Release date - {{film.release_date}}</div>
            </div>
            <div class="characters"
            v-if="film.characters">
                <div class="row">
                    <hr>
                    <h2>Characters</h2>
                    <personcard
                    v-for="(link) of film.characters" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            </div>
            <div class="planets"
            v-if="film.planets">
                <div class="row">
                    <hr>
                    <h2>Planets</h2>
                    <planetcard
                    v-for="(planet) of film.planets" :key="planet.url"
                    v-bind:link="planet"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize'
import personcard from '../components/personcard'
import planetcard from '../components/planetcard'
export default {
    name: 'filmpage',
    data() {
        return {
            film: {},
            filmsphoto: [
                {name: 'A New Hope',images: 'A New Hope.jpg'},
                {name: 'The Empire Strikes Back',images: 'The Empire Strikes Back.jpg'},
                {name: 'Return of the Jedi',images: 'Return of the Jedi.jpg'},
                {name: 'The Phantom Menace',images: 'The Phantom Menace.jpeg'},
                {name: 'Revenge of the Sith',images: 'Revenge of the Sith.jpg'},
                {name: 'Attack of the Clones',images: 'Attack of the Clones.jpg'},
            ],
            persons: [],
            image: {}
        }
    },
    components: { 
        personcard, planetcard
    },
  
    computed: {
        findImage() {
            const object = this.filmsphoto.find((object) => {
                return object.name === this.film.title
            })
            if (object !== undefined) {
            return require(`../assets/images/films/${object.images}`)
            }
            else {
            return require(`../assets/images/planets/nophoto-1.jpg`)
            }
        },
        
    },
    methods: {
        fetchdata(num) {
            fetch(`http://swapi.dev/api/films/${num}/`)
            .then(response => response.ok ? response : Promise.reject(response))
            .then(response => response.json())
            .then(json => this.film = json)
            .catch(() => this.$router.push('/error'))
        }
    },
    mounted() {
        this.fetchdata(this.$route.params.id)
        this.image = M.Materialbox.init(this.$refs.image)
        },
    destroyed() {
        if (this.image && this.image.destoy){
            this.image.destroy()
        }
    }
}
</script>

<style lang="scss" scoped>

    .page {
        color: rgb(255, 255, 255);
    }
    .data {
        text-align: right;
        div {
        font-style: italic;
        color: rgb(150, 150, 150);
            span {
                color: rgb(100, 100, 100)
            }
        }
    }
    
    
</style>