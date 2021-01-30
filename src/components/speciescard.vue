<template>
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light col s12">
                <img class="activator" :src="findImage()">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{type.name}}<i class="material-icons right">more_vert</i></span>
                <p>
                    <router-link 
                    v-if="type.url"
                    tag="a" :to="'/speciespage/' + this.findId(this.type.url)">More info...</router-link>
                </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{type.name}}<i class="material-icons right">close</i></span>
                <div class="card-content">
                    
                    <router-link
                    v-if="type.url"
                    tag="button"
                    class="waves-effect waves-light btn-large deep-purple darken-4"
                    :to="'/speciespage/' + this.findId(this.type.url)"> Learn more </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'speciescard',
    props: {
        link: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            type: {},
            speciesphoto: []
        }
    },
    components: {

    },
    methods: {
        findId(url) {
            return url.match(/\d{1,}/g)[0]
        },
        findImage() {
            const object = this.speciesphoto.find((object) => {
                return object.name === this.type.name
            })
            if (object && object.images !== '') {
            return require(`../assets/images/planets/${object.images}`)
            }
            else {
                return require(`../assets/images/planets/nophoto-1.jpg`)}
        }
    },
    mounted() {
        fetch(this.link)
        .then(response => response.json())
        .then(json => this.type = json)
    }
}
</script>