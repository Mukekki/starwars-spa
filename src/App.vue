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
    .btn-large {
        padding: 0 15px;
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
    
</style>
