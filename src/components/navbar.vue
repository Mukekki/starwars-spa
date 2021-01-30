<template>
    <div class="nav">
        <nav class="nav-extended deep-purple darken-4">
            <div class="nav-wrapper">
            <router-link to="/" class="brand-logo"><img src="../assets/vader.png" alt="#" style="width: 40px; padding-top: 10px;"></router-link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><router-link tag="a" to="/">Home</router-link></li>
                    <li><router-link tag="a" to="/about/">About this project</router-link></li>
                </ul>
            </ul>
            </div>
            <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li class="tab"><router-link class="active" to="/planets/1">Planets</router-link></li>
                <li class="tab"><router-link class="active" to="/people/1">People</router-link></li>
                <li class="tab"><router-link class="active" to="/films/1">Films</router-link></li>
                <li class="tab"><router-link class="active" to="/species/1">Species</router-link></li>
                <li class="tab"><router-link class="active" to="/vehicles/1">Vehicles</router-link></li>
                <li class="tab"><router-link class="active" to="/starships/1">Starships</router-link></li>
            </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo"
        ref="sidenav">
            <li class="tab" tag='a'><router-link class="active" to="/planets/1">Planets</router-link></li>
            <li class="tab" tag='a'><router-link class="active" to="/people/1">People</router-link></li>
            <li class="tab" tag='a'><router-link class="active" to="/films/1">Films</router-link></li>
            <li class="tab" tag='a'><router-link class="active" to="/species/1">species</router-link></li>
            <li class="tab" tag='a'><router-link class="active" to="/vehicles/1">vehicles</router-link></li>
            <li class="tab" tag='a'><router-link class="active" to="/starships/1">starships</router-link></li>
        </ul>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name: 'navbar',
    props: {
    },

    data(){
        return{
            sidenav: {}
        }
    },
    methods: {
    },
    mounted() {
        this.sidenav = M.Sidenav.init(this.$refs.sidenav, {
            onCloseStart() {
            }
        })
    },
    destroyed(){
        if (this.sidenav && this.sidenav.destroy){
            this.sidenav.destroy()
        }
    }
} 
</script>

<style lang="scss">
.nav-wrapper {
    padding: 0px 15px;
}
.dropdown-content {
    transition: .3s;
}
.dropdownopen {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: normal;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    line-height: 64px;
    box-sizing: inherit;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
    background-color: #fff;
    margin: 0;
    min-width: 100px;
    overflow-y: auto;
    position: absolute;
    z-index: 9999;
    padding-left: 0;
    list-style-type: none;
    outline: 0;
    display: block;
    width: 137.594px;
    left: 331.312px;
    top: 0px;
    height: 151px;
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scaleX(1) scaleY(1);
}
.nav-wrapper {
    z-index: 0;
}
</style>