<template>
    <div class="personpage">
        <div class="data">
            <div><span>Created </span>{{new Date(ship.created).toLocaleDateString()}}</div>
            <div><span>Edited </span>{{new Date(ship.edited).toLocaleDateString()}}</div>
        </div>
        <img 
        class="materialboxed" width="100%" :src="findImage()" ref="image">
        <div class="overflow"
        v-if="!ship.name">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else-if="ship">
            <div class="info">
                <h2>{{ship.name}}</h2>
                <hr>
                <h3>info</h3>
                <div>Model : {{ship.model}}</div>
                <div>Manufacturer : {{ship.manufacturer}}</div>
                <div>Cost in credits : {{ship.cost_in_credits}}</div>
                <div>Length : {{ship.length}}</div>
                <div>Max atmosphering speed : {{ship.max_atmosphering_speed}}</div>
                <div>Crew : {{ship.crew}}</div>
                <div>Passengers : {{ship.passengers}}</div>
                <div>Cargo capacity : {{ship.cargo_capacity}}</div>
                <div>Consumables : {{ship.consumables}}</div>
                <div>Hyperdrive rating : {{ship.hyperdrive_rating}}</div>
                <div>MGLT : {{ship.MGLT}}</div>
                <div>Starship class : {{ship.starship_class}}</div>
                <hr>
            </div>
            <div class="characters"
            v-if="ship.pilots.length >= 1">
                <h2>pilots</h2>
                <div class="row">
                    <personcard
                    v-for="(link) of ship.pilots" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            <hr>
            </div>
            <div class="films">
                <h2>Films</h2>
                <div class="row">
                    <filmcard
                    v-for="(link) of ship.films" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            </div>
        </div>
        <div class="error"
        v-if="res.ok">
        </div>
    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize'
import filmcard from '../components/filmcard'
import personcard from '../components/personcard'
export default {
    name: 'speciespage',
    data() {
        return {
            ship: {},
            res: {},
            starshipsPhoto: [
            ],
            image: {}
        }
    },
    components: { 
        filmcard, personcard
    },
  
    computed: {
    },
    methods: { 
        findImage() {
            const object = this.starshipsPhoto.find((person) => {
                return person.name === this.ship.name
            })
            if (object !== undefined) {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
            return require(`../assets/images/planets/nophoto-1.jpg`)
            }
        },
        fetchdata(num) {
            fetch(`http://swapi.dev/api/starships/${num}/`)
            .then(response => response.ok ? response : Promise.reject(response))
            .then(response => response.json())
            .then(json => this.ship = json)
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

<style lang="scss">
.error {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 2000;
}
</style>