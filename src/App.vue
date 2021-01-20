<template>
    <div id="app">
        <navbar />
        <div class="container">
            <router-view
            :key="$route.path"/>
        </div>
    </div>
</template>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
body {
    background-color: rgb(51, 50, 50);
}
</style>

<script>
import navbar from '../src/components/navbar'

export default {
    components: {
        navbar,
        },
        mounted() {
        }
}
</script>
<style>
    .container {
        background-color: rgba(87, 87, 87, 0.295);
        padding: 10px;
    }
    .card-content {
    min-height: 145px;
}
</style>
