<template>
    <div>
        <div class="lds-hourglass"
        v-if="!this.planet.name"></div>
        <div
        v-else>{{planet}}</div>
    </div>
</template>

<script>
export default {
    name: 'planetpage',
    data() {
        return {
            planet: {}
        }
    },
    mounted() {

        console.log(this.$route.params.name)
        fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(json => this.planet = json.results.find(
            (planet) => {
                return planet.name === this.$route.params.name
            }
        ))
    }
}
</script>