<template>
    <div class="page">
        <div class="data">
            <div><span>Created </span>{{new Date(person.created).toLocaleDateString()}}</div>
            <div><span>Edited </span>{{new Date(person.edited).toLocaleDateString()}}</div>
        </div>
        <img 
        class="materialboxed" width="100%" :src="findImage()" ref="image">
        <hr>
        <div class="overflow"
        v-if="!person.name">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else-if="person">
            <div class="info">
                <h2>{{person.name}}</h2>
                <h3>info</h3>
                <div>height : {{person.height}}</div>
                <div>mass : {{person.mass}}</div>
                <div>hair color : {{person.hair_color}}</div>
                <div>skin color : {{person.skin_color}}</div>
                <div>eye color : {{person.eye_color}}</div>
                <div>birth_year : {{person.birth_year}}</div>
                <div>gender : {{person.gender}}</div>
                <hr>
            </div>
            <div class="homeworld">
                <h2>Homeworld</h2>
                <planetcard 
                v-if="this.person.homeworld"
                v-bind:link="this.person.homeworld"/>
            </div>
            <div class="films"
            v-if="person.films.length >= 1">
            <hr>
                <h2>Films</h2>
                <div class="row">
                    <filmcard
                    v-for="(link) of person.films" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            </div>
            <div class="species"
            v-if="person.species.length >= 1">
                <hr>
                <h2>Species</h2>
                <div class="row">
                    <speciescard
                    v-for="(species) of person.species" :key="species"
                    v-bind:link="species"
                    />
                </div>
            </div>
            <div class="vehicles"
            v-if="person.vehicles.length >= 1">
                <hr>
                <h2>Vehicles</h2>
                <div class="row">
                    <vehiclecard 
                    v-for="(car) of person.vehicles" :key='car'
                    v-bind:link='car'
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import M from 'materialize-css'
import filmcard from '../components/filmcard'
import planetcard from '../components/planetcard'
import speciescard from '../components/speciescard'
import vehiclecard from '../components/vehiclecard'
export default {
    name: 'personpage',
    data() {
        return {
            person: {},
            personphoto: [],
            image: {}
        }
    },
    props: {
    },
    components: {
        filmcard, planetcard, speciescard, vehiclecard
    },
    methods: {
        findImage() {
            const object = this.personphoto.find((person) => {
                return person.name === this.person.name
            })
            if (object !== undefined) {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
            return require(`../assets/images/planets/nophoto-1.jpg`)
            }
        },
    },
    mounted() {
        fetch(`http://swapi.dev/api/people/${this.$route.params.id}/`)
        .then(responce => responce.ok ? responce : Promise.reject(responce))
            .then(response => response.json())
            .then(json => this.person = json)
            .catch(() => this.$router.push('/error'))
        this.image = M.Materialbox.init(this.$refs.image)
    },
    destroyed() {
        if (this.image && this.image.destoy){
            this.image.destroy()
        }
    }
} 
</script>