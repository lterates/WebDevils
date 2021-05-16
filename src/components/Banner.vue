<template>
    <div class="container">
        <div class="row g-3">
            <div id="bannerText" class="col-6 px-0">
                <h1>Get ready to unlock your Brands potencial</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis sapiente praesentium.</p>
                <b-button variant="light" class="shadow-lg" @click="pushGetStarted">Get started</b-button>
            </div>
            <div class="col">
                <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="img-fluid shadow-sm"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Banner",

    methods:{
        pushGetStarted(){
            this.$router.push('getStarted')
        }
    }
}
</script>


<style scoped>
    div {
        margin-top: 2em;
        font-family: 'Poppins';
        font-style: italic;
        background: white;
        color: #D33F49;
        text-align: left;
    }

    .row {
        margin-top: 0px;
    }

    img {
        border-radius: 5px;
    }

    button:hover {
        background-color: #D95961;
        color: white;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 3vh;
    }

    p {
        margin-bottom: 3vh;
    }

    button {
        background: #D33F49;
        border: none;
        font-style: italic;
        padding: 2em;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        letter-spacing: .2em;
        font-size: .9rem;
        cursor: pointer;
    }
</style>