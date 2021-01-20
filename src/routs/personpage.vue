<template>
    <div>
        <div class="overflow"
        v-if="!person.name">
            <div class="lds-hourglass"></div>
        </div>
        <div
        v-else>{{person}}</div>
    </div>
</template>

<script>
export default {
    name: 'personpage',
    data() {
        return {
            person: {}
        }
    },
    props: {
    },
    components: {

    },
    mounted() {
        fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(json => this.person = json.results.find((person) => {
                
                return person.name === this.$route.params.name
            }
        ))
    }
}
</script>