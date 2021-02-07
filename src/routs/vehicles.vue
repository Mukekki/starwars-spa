<template>
    <div>
        <div class="overflow"
        v-if="!vehicles.results">
            <div class="lds-hourglass"></div>
        </div>
        <vehiclecard 
        v-else
        v-for="(car) of vehicles.results" :key="car.name"
        v-bind:link="car.url"
        />
        <div class="pagebuttons">
            <router-link 
            v-bind:class="{disabled: !vehicles.previous }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/vehicles/' + this.previospage">back</router-link>
            <div class="pagelinks">
                <router-link
                v-for="(page) of this.pages" :key="page"
                v-bind:page="page"
                v-bind:class="[$route.params.pageid === page ? 'disabled' : 'deep-purple darken-4']"
                tag="button"
                :to="'/vehicles/' + page"
                class="waves-effect waves-light btn-large indigo darken-3"
                >{{page}}</router-link>
            </div>
            <router-link
            v-bind:class="{disabled: !vehicles.next }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/vehicles/' + this.nextpage">Next</router-link>
        </div>
    </div>
</template>

<script>
import vehiclecard from '../components/vehiclecard'
export default {
    name: 'vehicles',
    components: {
        vehiclecard
    },

    data() {
        return {
            vehicles: [],
            nextpage: +this.$route.params.pageid + 1,
            previospage: +this.$route.params.pageid - 1,
            pages: ['1','2','3','4']
        }
    },
    methods: {
    },
    mounted() {
        fetch(`http://swapi.dev/api/vehicles/?page=${this.$route.params.pageid}`)
            .then(response => response.ok ? response : Promise.reject(response))
            .then(response => response.json())
            .then(json => this.vehicles = json)
            .catch(() => this.$router.push('/error'))
    }
}
</script>

<style lang='scss'>
    
</style>