<template>
    <div class="col s12 m6">
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
                    v-if="planet.url"
                    class="waves-effect waves-light btn-large deep-purple darken-4"
                    :to="'/planet/' + findId(planet.url)"
                    v-bind:url="planet.url"> Learn more </router-link>
                </div>
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
                {name: 'Mustafar', images: 'futuristic-lava-concept-art-science-fiction-artwork-1920x1080-49788.jpg'},
                {name: 'Kashyyyk', images: 'STAR_WARS_Battlefront_II_20171222121517.jpg'},
                {name: 'Polis Massa', images: 'starwarsIII_8409.jpg'},
                {name: 'Mygeeto', images: 'mygeeto45.jpg'},
                {name: 'Felucia', images: '01_169_2070e38e.jpeg'},
                {name: 'Cato Neimoidia', images: '39d4d68d65f92470b5a626eb4d8fe23be26aaaf01023c57a7007ccfd4310d06a.jpg'},
                {name: 'Stewjon', images: ''},
                {name: 'Corellia', images: 'Coronet-EotESoF.jpg'},
                {name: 'Rodia', images: 'd16184f3916fa528e74a3a9a58f8b1dd.png'},
                {name: 'Nal Hutta', images: '93089.jpg'},
                {name: 'Dantooine', images: 'patch-5-10-3.jpg'},
                {name: 'Bestine IV', images: '5eb56859fc593d5a2757c87d.png'},
                {name: 'Ord Mantell', images: 'image_cdc70c91.jpeg'},
                {name: 'Trandosha', images: 'swtor-patch-3_1.jpg'},
                {name: 'Socorro', images: '805f2429857cc67df9e4ece11961c121.jpg'},
                {name: 'Mon Cala', images: 'mon-cala-city.jpg'},
                {name: 'Chandrila', images: '2E2F2807-4535-411C-892D-995249738FBF.jpeg'},
                {name: 'Sullust', images: '29040c433aadcb8a724660b4c7780055.jpg'},
                {name: 'Toydaria', images: 'databank_toydaria_01_169_70b20e0e.jpeg'},
                {name: 'Malastare', images: 'databank_malastare_01_169_59df245f.jpeg'},
                {name: 'Dathomir', images: 'maxresdefault.jpg'},
                {name: 'Ryloth', images: 'clone-wars1x20_0242.jpg'},
                {name: '', images: '.jpg'},
                {name: '', images: '.jpg'},
                {name: '', images: '.jpg'},
                {name: '', images: '.jpg'},
            ],
        }
    },
    computed: {
        findImage() {
            const object = this.planetphoto.find((planet) => {
                return planet.name === this.planet.name
            })
            if (object && object.images !== '') {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
                return require(`../assets/images/planets/nophoto-1.jpg`)}
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

.secondpage {
    max-width: 145px;
}
</style>