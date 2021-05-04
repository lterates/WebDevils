<template>
    <div class="welcome">
        <b-button>Check us Out</b-button>

        <svg xmlns="http://www.w3.org/2000/svg" xml:lang="en"
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
body {
    background: #D33F49;
    font-family: 'Poppins';
    margin: 0;
    height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
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
    font-weight: bold;
    fill: white
}

button {
    background: #D95961;
    border: none;
    outline: none;
    padding: 2em;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    letter-spacing: .3em;
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