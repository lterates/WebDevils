<template>
    <div class="OurTeam">
        <NavBar/>
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
        <div id="team">
        <h1>Our Team</h1>
        <b-container>
            <b-row>
                <b-col>
                    <b-avatar src="https://placekitten.com/300/300" size="10rem"></b-avatar>
                    Hello World
                </b-col>
                <b-col>
                     <b-avatar src="https://placekitten.com/300/300" size="10rem"></b-avatar>
                </b-col>
                <b-col>
                    <b-avatar src="https://placekitten.com/300/300" size="10rem"></b-avatar>
                </b-col>
            </b-row>
           
            <b-row>
                <b-col>
                    <h2>Luis Pires</h2>
                </b-col>
                <b-col>
                     <h2>Maria Santos</h2>
                </b-col>
                <b-col>
                    <h2>Eduardo</h2>
                </b-col>
            </b-row>
                  <b-row>
                <b-col>
                    <p>Programador</p>
                </b-col>
                <b-col>
                    <p>Desiner</p>
                </b-col>
                <b-col>
                     <p>Public Relations</p>
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
h1{
    text-align: start;
    margin-bottom: 5%;
    font-family: 'Poppins';
    font-style: oblique;
    font-size: 3.5em;
    color: #D33F49;
}
#team{
    margin:10%;
}
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
h2{
 font-family: 'Poppins';
    font-style: oblique;
    font-size: 2.5em;
    color: #D33F49;
}

p{
 font-family: 'Poppins';
    font-style: italic;
    font-size: 1.5em;
    color: #D33F49;
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