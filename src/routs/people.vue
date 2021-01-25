<template>
    <div>
        <div>
        <div class="overflow"
        v-if="persons.length < 1">
            <div class="lds-hourglass"></div>
        </div>
        <personcard 
        v-else
        v-for="(person) of persons.results" :key="person.id"
        v-bind:link="person.url"
        />
        
        <div class="pagebuttons">
            <router-link 
            v-bind:class="{disabled: !persons.previous }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/people/' + this.previospage">back</router-link>
            <div class="pagelinks">
                <router-link
                v-for="(page) of this.pages" :key="page"
                v-bind:page="page"
                v-bind:class="[$route.params.pageid === page ? 'disabled' : 'deep-purple darken-4']"
                tag="button"
                :to="'/people/' + page"
                class="waves-effect waves-light btn-large indigo darken-3"
                >{{page}}</router-link>
            </div>
            <router-link
            v-bind:class="{disabled: !persons.next }"
            tag="button"
            class="waves-effect waves-light btn-large deep-purple darken-4"
            :to="'/people/' + this.nextpage">Next</router-link>
        </div>

    </div>
    </div>
</template>

<script>
import personcard from '../components/personcard'
export default {
    name: 'persons',
    data() {
        return {
            persons: [],
            pages: ['1','2','3','4','5','6','7','8','9'],
            nextpage: +this.$route.params.pageid + 1,
            previospage: +this.$route.params.pageid - 1, 
        }
    },
    components: {
        personcard,

    },
    mounted() {
        fetch(`https://swapi.dev/api/people/?page=${this.$route.params.pageid}`)
        .then(response => response.json())
        .then(json => this.persons = json)
        
    }
}
</script>

<style lang='scss'>
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
    .pagebuttons {
        display: flex;
        justify-content: space-around;
    }
    @media (max-width: 584px) {
        .pagelinks {
            display: none;
    }}
    
</style>