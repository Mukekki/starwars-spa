<template>
    <div class="personpage">
        <img 
        class="materialboxed" width="100%" :src="findImage()" ref="image">
        <div class="overflow"
        v-if="!person.name">
            <div class="lds-hourglass"></div>
        </div>
        <div v-else-if="person">
            <div class="planetinfo">
                <h2>{{person.name}}</h2>
                <div>height : {{person.height}}</div>
                <div>mass : {{person.mass}}</div>
                <div>hair color : {{person.hair_color}}</div>
                <div>skin color : {{person.skin_color}}</div>
                <div>eye color : {{person.eye_color}}</div>
                <div>birth_year : {{person.birth_year}}</div>
                <div>gender : {{person.gender}}</div>
            </div>
            <div class="films">
                <h2>Films</h2>
                <div class="row">
                    <filmcard
                    v-for="(link) of person.films" :key="link.id"
                    v-bind:link="link"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import M from 'materialize-css'
import filmcard from '../components/filmcard'
export default {
    name: 'personpage',
    data() {
        return {
            person: {},
            personphoto: [],
        }
    },
    props: {
    },
    components: {
        filmcard
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
                console.log('error')
            return require(`../assets/images/planets/nophoto-1.jpg`)
            }
        },
    },
    mounted() {
        fetch(`http://swapi.dev/api/people/${this.$route.params.id}/`)
        .then(response => response.json())
        .then(json => this.person = json)
        M.Materialbox.init(this.$refs.image)
    }
} 
</script>