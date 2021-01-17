<template>
    <div>
        <nav class="nav-extended deep-purple darken-4">
            <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">Logo</router-link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                
                <li><a href="sass.html">1</a></li>
                <li><a href="badges.html">2</a></li>
                <li><a href="collapsible.html">3</a></li>
            </ul>
            </div>
            <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li class="tab"><router-link class="active" to="/planets">Planets</router-link></li>
                <li class="tab"><router-link class="active" to="/people">People</router-link></li>
                <li class="tab"><router-link class="active" to="/films">Films</router-link></li>
                <li class="tab"><router-link class="active" to="/species">species</router-link></li>
                <li class="tab"><router-link class="active" to="/vehicles">vehicles</router-link></li>
                <li class="tab"><router-link class="active" to="/starships">starships</router-link></li>
                <li class="tab disabled"><a href="#test4">Disabled Tab</a></li>
            </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    
    methods: {
    },
    mounted() {
    }
} 
</script>

<style lang="scss" scoped>
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