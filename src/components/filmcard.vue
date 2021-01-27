<template>
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light col s12">
                <img class="activator" :src="this.findImage">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{film.title}}<i class="material-icons right">more_vert</i></span>
                <p><router-link 
                v-if="film.url"
                tag="a" :to="'/filmpage/' + this.findId(this.film.url)">More info...</router-link></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{film.title}}<i class="material-icons right">close</i></span>
                <div class="card-content">
                    
                    <router-link
                    v-if="film.url"
                    tag="button"
                    class="waves-effect waves-light btn-large deep-purple darken-4"
                    :to="'/filmpage/' + this.findId(this.film.url)"> Learn more </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filmcard',
    props: {
        link: {
            type: String,
            require: true,
        },
    },
    methods: {
        findId(url) {
            return url.match(/\d{1,}/g)[0]
        },
    },
    data() {
        return {
            film: {},
            filmsphoto: [
                {name: 'A New Hope',images: 'A New Hope.jpg'},
                {name: 'The Empire Strikes Back',images: 'The Empire Strikes Back.jpg'},
                {name: 'Return of the Jedi',images: 'Return of the Jedi.jpg'},
                {name: 'The Phantom Menace',images: 'The Phantom Menace.jpeg'},
                {name: 'Revenge of the Sith',images: 'Revenge of the Sith.jpg'},
                {name: 'Attack of the Clones',images: 'Attack of the Clones.jpg'},
            ],
        }
    },
    computed: {
        findImage() {
            const object = this.filmsphoto.find((film) => {
                return film.name === this.film.title
            })
            if (object && object.images !== '') {
            return require(`../assets/images/films/${object.images}`)
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
        .then(json => this.film = json)
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

.card {
    min-width: 140px;
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