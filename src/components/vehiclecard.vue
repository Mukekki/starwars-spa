<template>
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light col s12">
                <img class="activator" :src="findImage()">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{car.name}}<i class="material-icons right">more_vert</i></span>
                <p><router-link 
                v-if="car.url"
                tag="a" :to="'/vehiclepage/' + findId(car.url)">More info...</router-link></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{car.name}}<i class="material-icons right">close</i></span>
                <div class="card-content">
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
                    <router-link
                    tag="button"
                    v-if="car.url"
                    class="waves-effect waves-light btn-large deep-purple darken-4"
                    :to="'/vehiclepage/' + findId(car.url)"
                    v-bind:url="car.url"> Learn more </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vehiclecard',
    props: {
      link: {
         type: String,
         required: true
      }
    },
    methods: {
        findId(url) {
            return url.match(/\d{1,}/g)[0]
        },
        findImage() {
            const object = this.vehiclesphoto.find((object) => {
                return object.name === this.car.name
            })
            if (object && object.images !== '') {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
                return require(`../assets/images/planets/nophoto-1.jpg`)}
        }
    },
   data() {
        return {
            car: {},
            vehiclesphoto: [
            ],
        }
    },
    computed: {
        
    },
    components: {

    },
    mounted() {
        fetch(this.link)
        .then(response => response.json())
        .then(json => this.car = json)

        
    }
}
</script>

<style lang="scss" scoped>
.card-content {
    div{
        padding: 3px;
        margin: 0 auto;
    }
    button{
        bottom: -10px;
        margin: 0 auto;
    }
    margin: 0 auto;
}
p {
        display: block;
        margin: 0 auto;
}
.card-content {
    min-height: 135px;
}
.card {
    opacity: .8;
    transition: all 0.3s;
}
.card:hover {
    opacity: 1;
}
i:hover {
    color: rgba(82, 34, 255, 0.692);
}

.secondpage {
    max-width: 145px;
}
</style>