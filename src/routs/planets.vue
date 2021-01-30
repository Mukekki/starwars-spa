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
            <div class="pagelinks">
                <router-link
                v-for="(page) of this.pages" :key="page"
                v-bind:page="page"
                v-bind:class="[$route.params.pageid === page ? 'disabled' : 'deep-purple darken-4']"
                tag="button"
                :to="'/planets/' + page"
                class="waves-effect waves-light btn-large indigo darken-3"
                >{{page}}</router-link>
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
            nextpage: +this.$route.params.pageid + 1,
            previospage: +this.$route.params.pageid - 1,
            pages: ['1','2','3','4','5','6']
        }
    },
    methods: {
    },
    mounted() {
        fetch(`http://swapi.dev/api/planets/?page=${this.$route.params.pageid}`)
            .then(responce => responce.ok ? responce : Promise.reject(responce))
            .then(response => response.json())
            .then(json => this.planets = json)
            .catch(() => this.$router.push('/error'))
    }
}
</script>

<style lang='scss'>
        
    
</style>