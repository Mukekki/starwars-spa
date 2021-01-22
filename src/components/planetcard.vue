<template>
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light col s12">
                <img class="activator" :src="findImage">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{planet.name}}<i class="material-icons right">more_vert</i></span>
                <p><router-link 
                v-if="planet.url"
                tag="a" :to="'/planet/' + findId(planet.url)">More info...</router-link></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{planet.name}}<i class="material-icons right">close</i></span>
                <div class="card-content">
                    <div>Period rotation : {{planet.rotation_period}}</div>
                    <div>Orbital period : {{planet.orbital_period}}</div>
                    <div>Diameter : {{planet.diameter}}</div>
                    <div>Climate : {{planet.climate}}</div>
                    <div>Gravity : {{planet.gravity}}</div>
                    <div>Terrain : {{planet.terrain}}</div>
                    <div>Surface water : {{planet.surface_water}}</div>
                    <div>Population : {{planet.population}}</div>
                    <router-link
                    tag="button"
                    class="waves-effect waves-light btn-large deep-purple darken-4"
                    :to="'/planetpage/' + planet.name"
                    v-bind:url="planet.url"> Learn more </router-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'planetcard',
    props: {
      link: {
         type: String,
         required: true
      }
    },
    methods: {
        findId(url) {
            return url.match(/\d{1,}/g)[0]
        }
    },
   data() {
        return {
            planet: {},
            planetphoto: [
                {name: 'Tatooine',images: '2.jpg'},
                {name: 'Alderaan',images: '1.png'},
                {name: 'Yavin IV',images: 'rogue-one_3656.jpg'},
                {name: 'Hoth',images: 'a77f486665f37182fa04cbbfd202a7ab.jpg'},
                {name: 'Dagobah',images: '18.jpg'},
                {name: 'Bespin',images: 'vfhsarvog4t11.jpg'},
                {name: 'Endor',images: 'f0855d03f0c81856c1860ff818f28ae558ba4589r1-1920-1080v2_uhq.jpg'},
                {name: 'Naboo', images: 'wp3724197.jpg'},
                {name: 'Coruscant',images: 'Background_6.jpg'},
                {name: 'Kamino', images: 'artsfon.com-147871.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Utapau', images: '17abb6060f10bab2d6832af886df71ef.png'},
                
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
                {name: 'Geonosis', images: 'look.com.ua-216928.jpg'},
            ],
        }
    },
    computed: {
        findImage() {
            const object = this.planetphoto.find((planet) => {
                return planet.name === this.planet.name
            })
            if (object !== undefined) {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
                return ''}
        }
    },
    components: {

    },
    mounted() {
        fetch(this.link)
        .then(response => response.json())
        .then(json => this.planet = json)
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
</style>