<template>
    <div class="welcome">
        <h1>Welcome</h1>
        <h1 style="margin-top:-45vh">to WebDevils</h1>

        <router-link to="/home"><b-button variant="light" id="btn">Check us Out</b-button></router-link>

        <svg id="svg1" xmlns="http://www.w3.org/2000/svg" xml:lang="en"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
        <title>Circular Text Path</title>

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
                    textLength="942"> WE ARE WEBDEVILS .</textPath>
        </text>
    </svg>
    </div>
</template>

<style scoped>
div {
    background: #D33F49;
    font-family: 'Poppins';
    font-style: italic;
    margin: 0;
    height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
}

h1{
    color: white;
    font-size: 4rem;
}

svg {
    width: 100px;
    position: absolute;
    animation: rotation 4.5s infinite linear;
    pointer-events: none;
    transition: top 1s, left 1s;
    transition-timing-function: ease-out;
}

text {
    font-size: 4em;
    font-family: 'Poppins';
    font-style: italic;
    fill: white
}

button {
    margin-top: -60vh;
    background: #D95961;
    border: none;
    font-style: italic;
    padding: 2em;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    letter-spacing: .2em;
    font-size: .9rem;
    cursor: pointer;
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

<script>

export default({
   name: "Welcome",
   mounted(){
    const circleSvg = document.getElementById('svg1')
    const btn = document.getElementById('btn')

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
        /*let tl = gsap.timeline({defaults: {ease: "power2.inOut"}})
        tl.to(circleSvg, {width: 0, opacity: 0})
        tl.to('body, button', {background: 'white'})
        tl.pause()
        tl.then()*/
    btn.addEventListener('click', () => {
        //tl.play()
        console.log("Main Page")
    })
   }
})
</script>
