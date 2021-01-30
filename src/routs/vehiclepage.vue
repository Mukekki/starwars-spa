<template>
    <div class="personpage">
        <div class="data">
            <div><span>Created </span>{{new Date(car.created).toLocaleDateString()}}</div>
            <div><span>Edited </span>{{new Date(car.edited).toLocaleDateString()}}</div>
        </div>
        <img 
        class="materialboxed" width="100%" :src="findImage()" ref="image">
        <div class="overflow"
        v-if="!car.name">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else-if="car">
            <div class="info">
                <hr>
                <h2>{{car.name}}</h2>
                <div>Model : {{car.model}}</div>
                <div>Manufacturer : {{car.manufacturer}}</div>
                <div>Cost in credits : {{car.cost_in_credits}}</div>
                <div>length : {{car.length}}</div>
                <div>Max atmosphering speed: {{car.max_atmosphering_speed}}</div>
                <div>Crew : {{car.crew}}</div>
                <div>Passengers : {{car.passengers}}</div>
                <div>Cargo capacity : {{car.cargo_capacity}}</div>
                <div>Consumables : {{car.consumables}}</div>
                <div>Vehicle class : {{car.vehicle_class}}</div>
            </div>
                <div class="pilots"
                v-if="car.pilots.length >= 1">
                    <hr>
                    <h2>Pilots</h2>
                    <div class="row">
                        <personcard 
                        v-for="(pilot) of car.pilots" :key="pilot"
                        v-bind:link="pilot"
                        />
                    </div>
                </div>
            <div class="films">
                <hr>
                <h2>Films</h2>
                <div class="row">
                    <filmcard
                    v-for="(link) of car.films" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import M from 'materialize-css'
import personcard from '../components/personcard'
import filmcard from '../components/filmcard'
export default {
    name: 'vehiclepage',
    data() {
        return {
            car: {},
            vehiclesphoto: [],
            image: {}
        }
    },
    props: {
    },
    components: {
        personcard, filmcard
    },
    methods: {
        findImage() {
            const object = this.vehiclesphoto.find((object) => {
                return object.name === this.car.name
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
        fetch(`http://swapi.dev/api/vehicles/${this.$route.params.id}/`)
        .then(responce => responce.ok ? responce : Promise.reject(responce))
            .then(response => response.json())
            .then(json => this.car = json)
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