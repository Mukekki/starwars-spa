<template>
    <div class="col s12 m6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light col s12">
                <img class="activator" src="">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{person.name}}<i class="material-icons right">more_vert</i></span>
                <p><router-link 
                tag="a" :to="'/personpage/' + person.name">More info...</router-link></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{person.name}}<i class="material-icons right">close</i></span>
                <div class="card-content">
                    
                    <router-link
                    tag="button"
                    class="waves-effect waves-light btn-large deep-purple darken-4"
                    :to="'/personpage/' + person.name"> Learn more </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personcard',
    props: {
        link: {
            type: String,
            require: true,
        },
    },
   data() {
        return {
            person: {},
            personphoto: [
                // {name: 'Tatooine',images: '2.jpg'},
            ],
        }
    },
    computed: {
    },
    components: {

    },
    mounted() {
        fetch(this.link)
        .then(response => response.json())
        .then(json => this.person = json)
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

</style>