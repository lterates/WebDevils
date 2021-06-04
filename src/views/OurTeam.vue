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
                        textLength="942">MEET THE TEAM .</textPath>
            </text>
        </svg>
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        
        <div id="team">
        <b-container>
            <b-row>
                <b-col>
                    <b-img src="../assets/luis.jpg" rounded="circle" alt="Circle image" fluid></b-img>
                </b-col>
                <b-col class="ml-5 mr-5">
                    <b-img src="../assets/eduardo.png" rounded="circle" alt="Circle image" fluid></b-img>
                </b-col>
                <b-col>
                    <b-img src="../assets/maria.jpg" rounded="circle" alt="Circle image" fluid></b-img>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h2>Luis Pires</h2>
                </b-col>
                <b-col class="ml-5 mr-5">
                     <h2>Eduardo Ferreira</h2>
                </b-col>
                <b-col>
                    <h2>Maria Santos</h2>
                </b-col>
            </b-row>
                  <b-row>
                <b-col>
                    <p>Full Stack Programmer</p>
                </b-col>
                <b-col class="ml-5 mr-5">
                    <p>Web Designer</p>
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

#team {
    margin-top: 15vh;
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

h2 {
    font-family: 'Poppins';
    font-style: oblique;
    font-size: 2.3em;
    margin-top: 4vh;
    color: #D33F49;
}

p {
 font-family: 'Poppins';
    font-style: normal;
    font-size: 1.5em;
    color: black;
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