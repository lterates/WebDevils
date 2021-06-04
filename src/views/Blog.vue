<template>
    <div class="blog">
        <NavBar/>
        <header class="mt-5">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal" style="font-family: 'Poppins'; font-style: italic; color: #D33F49">Blog Posts</h1>
            </div>
        </header>

         <svg id="svg1" xmlns="http://www.w3.org/2000/svg" xml:lang="en"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
            <title>Cursor</title>
            <defs>
                <path id="textcircle"
                    d="M250,400
                        a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    transform="rotate(12,250,250)"/>
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <text>
                <textPath xlink:href="#textcircle"
                        aria-label="All for One &amp; One for All"
                        textLength="942">CATCH UP WITH OUR BLOG .</textPath>
            </text>
        </svg>
        
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
    },
        mounted(){
        const circleSvg = document.getElementById('svg1')
        let mouseX = 0
        let mouseY = 0
        window.addEventListener('mousemove', (event) => {
            mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
            mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
    })
        const mouseMove = () => {
        circleSvg.style.top = mouseY
        circleSvg.style.left = mouseX
        window.requestAnimationFrame(mouseMove)
    }
        mouseMove()
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


     svg {
    width: 100px;
    position: absolute;
    animation: rotation 4s infinite linear;
    pointer-events: none;
    transition: top 1s, left 1s;
    transition-timing-function: ease-out;
    z-index: 9999;
  }

    text{
    font-family: 'Poppins';
    font-style: italic;
    font-size: 4.5em;
    fill: #D33F49;
  }

  @keyframes rotation {
    from {
      transform: rotate(359deg);
    }
    to {
      transform: rotate(0deg);
    }
}

</style>