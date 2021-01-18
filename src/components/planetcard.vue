<template>
        <div class="card ">
            <div class="card-image waves-effect waves-block waves-light col s12">
                <img class="activator" :src="findImage">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{planet.name}}<i class="material-icons right">more_vert</i></span>
                <p><router-link 
                tag="a" :to="'/planetpage/' + planet.name">More info...</router-link></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{planet.name}}<i class="material-icons right">close</i></span>
                <p>{{planet}}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'planetcard',
    props: {
      planet: {
         type: Object,
         required: true
      }
   },
   data() {
        return {
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
                return planet.name === this.planet.name
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
    components: {

    },
    mounted() {
    }
}
</script>

<style scoped>
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