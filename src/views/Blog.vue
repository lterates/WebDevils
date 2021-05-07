<template>
    <div class="blog">
        <NavBar/>
        <header class="mt-5">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal" style="font-family: 'Poppins'; font-style: italic; color: #D33F49">Blog</h1>
            </div>
        </header>
        <div id="articles">
            <b-container fluid>
                <b-row>
                    <b-col>
                        <h2>First Article</h2>
                    </b-col>  
                </b-row>
                <b-row>
                    <b-col>
                        <p>This is the first article</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>Second Article</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <p>This is the second article</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>Third Article</h2>
                    </b-col>
                    
                </b-row>
                <b-row>
                    <b-col>
                        <p>This is the third article</p>
                    </b-col>
                </b-row>
            </b-container>
            
        </div>
        
    </div>
</template>


<script>
import NavBar from "@/components/navbar.vue";

export default ({
    name: "Blog",
    components: {
        NavBar,
    }
})
</script>

<style scoped>
    .pricing {
        font-family: 'Poppins';
    }

    main {
        font-family: 'Poppins';
    }
    #articles{
        font-family: 'Poppins'; 
        font-style: italic; 
        color: #D33F49;
        margin:2%;
        text-align: left;
    }

</style>