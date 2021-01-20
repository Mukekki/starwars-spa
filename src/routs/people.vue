<template>
    <div>
        <div>
        <div class="overflow"
        v-if="persons.length < 1">
            <div class="lds-hourglass"></div>
        </div>
        <personcard 
        v-else
        v-for="(person) of persons" :key="person.id"
        v-bind:link="person.url"
        />
        
    </div>
    </div>
</template>

<script>
import personcard from '../components/personcard'
export default {
    name: 'persons',
    data() {
        return {
            persons: []
        }
    },
    components: {
        personcard,

    },
    mounted() {
        fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(json => this.persons = json.results)
        
    }
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

</style>