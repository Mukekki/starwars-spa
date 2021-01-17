<template>
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <!-- <img class="activator" src="images/office.jpg"> -->
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
      },
      index: Number
      
   },
    components: {

    },
    mounted() {
        // fetch(this.planet.residents[1])
        // .then(response => response.json())
        // .then(json =>console.log(json))
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