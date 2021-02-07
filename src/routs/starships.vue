<template>
    <div>
        <div class="overflow"
        v-if="!starships.results">
            <div class="lds-hourglass"></div>
        </div>
        <starshipcard
        v-for="(ship) of starships.results" :key="ship.url"
        v-bind:link="ship.url"/>

        <div class="pagebuttons"
        v-if="starships">
            <router-link 
            v-bind:class="{disabled: !starships.previous }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/starships/' + this.previospage">back</router-link>
            <div class="pagelinks">
                <router-link
                v-for="(page) of this.pages" :key="page"
                v-bind:page="page"
                v-bind:class="[$route.params.pageid === page ? 'disabled' : 'deep-purple darken-4']"
                tag="button"
                :to="'/starships/' + page"
                class="waves-effect waves-light btn-large indigo darken-3"
                >{{page}}</router-link>
            </div>
            <router-link
            v-bind:class="{disabled: !starships.next }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/starships/' + this.nextpage">Next</router-link>
        </div>
    </div>
</template>

<script>
import starshipcard from '../components/starshipcard'
export default {
    name: 'starships',
    data() {
        return {
            starships: [],
            nextpage: +this.$route.params.pageid + 1,
            previospage: +this.$route.params.pageid - 1,
            pages: ['1','2','3','4']
        }
    },
    components: {
        starshipcard
    },
    mounted() {
        fetch(`http://swapi.dev/api/starships/?page=${this.$route.params.pageid}`)
            .then(response => response.ok ? response : Promise.reject(response))
            .then(response => response.json())
            .then(json => this.starships = json)
            .catch(() => this.$router.push('/error'))
    }
}
</script>