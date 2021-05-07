<template>
  <div class="home">
     <NavBar/>
     <Banner/>
     <!-- ~~~~~~~~~~~~~~CURSOR FOLLOW~~~~~~~~~~~~~~~~ -->
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
                    textLength="942">GET STARTED TODAY .</textPath>
        </text>
    </svg>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
     <PrivacyModal/>
     <NewsLetter/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar.vue";
import Banner from "@/components/Banner.vue";
import PrivacyModal from "@/components/PrivacyModal.vue"
import NewsLetter from "@/components/NewsLetter.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
    PrivacyModal,
    NewsLetter
  },


  data: () => ({
    

  }),

  methods:{
    function(){

    }


  

  },

  beforeMount(){

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
};

</script>

<style scoped>
  div {
    overflow: hidden;
  }

  svg {
    width: 100px;
    position: absolute;
    animation: rotation 4.5s infinite linear;
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