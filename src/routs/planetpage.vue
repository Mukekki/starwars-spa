<template>
    <div>
        <img class="materialboxed" width="100%" :src="findImage" ref="image">
        <div class="overflow"
        v-if="!planet.name">
            <div class="lds-hourglass"></div>
        </div>
        <div
        v-else>{{planet}}
        </div>

    </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize'
export default {
    name: 'planetpage',
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
                {name: 'Coruscant',images: 'fDSC100142932.jpg'},
                {name: 'Kamino', images: 'artsfon.com-147871.jpg'},
            ],
        }
    },
    computed: {
        findImage() {
            const object = this.planetphoto.find((planet) => {
                return planet.name === this.$route.params.name
            })
            console.log(object)
            if (object !== undefined) {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
                console.error('can\'t find image')
            return '#'}
        }
    },
    methods: {
    },
    mounted() {
        // console.log(this.$route.params.name)
        fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(json => this.planet = json.results.find((planet) => {
                return planet.name === this.$route.params.name
            }
        ))
            M.Materialbox.init(this.$refs.image)
    },
}
</script>

<style>
.lds-hourglass {
        padding-top: 25%;
        margin: 0 auto;
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        z-index: 1001;
    }
    .lds-hourglass:after {

        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid #cef;
        border-color: #cef transparent #cef transparent;
        animation: lds-hourglass 1.2s infinite;
    }
    @keyframes lds-hourglass {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
            transform: rotate(1800deg);
        }
    }

    .overflow {
        position: fixed;
        left: 0;
        top: 0%;
        width: 100%;
        height: 100%;
        background-color: rgb(37, 37, 37);
        z-index: 1000;
    }
</style>