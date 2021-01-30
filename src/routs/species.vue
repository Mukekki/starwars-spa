<template>
    <div>
        <div class="overflow"
        v-if="!species.results">
            <div class="lds-hourglass"></div>
        </div>
        <speciescard
        v-else
        v-for="(type) of species.results" :key="type.url"
        v-bind:link="type.url" />
        <div class="pagebuttons">
            <router-link 
            v-bind:class="{disabled: !species.previous }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/species/' + this.previospage">back</router-link>
            <div class="pagelinks">
                <router-link
                v-for="(page) of this.pages" :key="page"
                v-bind:page="page"
                v-bind:class="[$route.params.pageid === page ? 'disabled' : 'deep-purple darken-4']"
                tag="button"
                :to="'/species/' + page"
                class="waves-effect waves-light btn-large indigo darken-3"
                >{{page}}</router-link>
            </div>
            <router-link
            v-bind:class="{disabled: !species.next }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/species/' + this.nextpage">Next</router-link>
        </div>
    </div>
</template>

<script>
import speciescard from '../components/speciescard'
export default {
    name: 'species',
    components: {
        speciescard
    },
     data() {
        return {
            species: [],
            pages: ['1','2','3','4'],
            nextpage: +this.$route.params.pageid + 1,
            previospage: +this.$route.params.pageid - 1,
        }
    },
    mounted() {
        fetch(`http://swapi.dev/api/species/?page=${this.$route.params.pageid}`)
            .then(responce => responce.ok ? responce : Promise.reject(responce))
            .then(response => response.json())
            .then(json => this.species = json)
            .catch(() => this.$router.push('/error'))
    }
}
</script>