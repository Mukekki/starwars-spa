<template>
    <div class="page">
        <div class="data">
            <div><span>Created </span>{{new Date(type.created).toLocaleDateString()}}</div>
            <div><span>Edited </span>{{new Date(type.edited).toLocaleDateString()}}</div>
        </div>
        <img 
        class="materialboxed" width="100%" :src="findImage" ref="image">
        <div class="overflow"
        v-if="!type.name">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else-if="type">
            <div class="info">
                <hr>
                <h2>{{type.name}}</h2>
                <h3>Info</h3>
                <div>Classification : {{type.classification}}</div>
                <div>Designation : {{type.designation}}</div>
                <div>Average height : {{type.average_height}}</div>
                <div>Skin color : {{type.skin_colors}}</div>
                <div>Hair colors : {{type.hair_colors}}</div>
                <div>Eye colors : {{type.eye_colors}}</div>
                <div>Average lifespan : {{type.average_lifespan}}</div>
                <div>Language : {{type.language}}</div>
            </div>
            <div class="homeworld"
            v-if="type.homeworld !== null">
                <hr>
                <h2>Homeworld</h2>
                <planetcard 
                v-bind:link="type.homeworld"/>
            </div>
            <div class="characters"
            v-if="type.people">
                <hr>
                <div class="row">
                    <h2>People</h2>
                    <personcard
                    v-for="(link) of type.people" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            <hr>
            </div>
            <div class="films"
            v-if="type.films">
                <div class="row">
                    <h2>Films</h2>
                    <filmcard
                    v-for="(film) of type.films" :key="film"
                    v-bind:link="film"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize'
import personcard from '../components/personcard'
import filmcard from '../components/filmcard'
import planetcard from '../components/planetcard'
export default {
    name: 'speciespage',
    data() {
        return {
            type: {},
            typephoto: [
            ],
            image: {}
        }
    },
    components: { 
        personcard, 
        filmcard,
        planetcard
    },
  
    computed: {
        findImage() {
            const object = this.typephoto.find((object) => {
                return object.name === this.type.name
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
            fetch(`http://swapi.dev/api/species/${num}/`)
            .then(responce => responce.ok ? responce : Promise.reject(responce))
            .then(response => response.json())
            .then(json => this.type = json)
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