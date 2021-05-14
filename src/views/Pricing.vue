<template>
    <div class="pricing">
        <NavBar/>
    <header class="mt-5">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal" style="font-family: 'Poppins'; font-style: italic; color: #D33F49">Pricing</h1>
      <p class="fs-5 mt-3 text-muted">Quickly build an effective Marketing Strategy for your company or personal project. Check our three different pricing tiers below.</p>
    </div>
  </header>
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
  <main>
    <div id="cardGroup" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">0€<small class="text-muted fw-light">/month</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Newsletter Access</li>
              <li>Accurate Statistics</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for our Newsletter</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">15€<small class="text-muted fw-light">/month</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Unlimited Reports</li>
              <li>Powerful Analytics</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" style="background-color: #D95961; border: none">Get Started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm" style="border: 2px solid #D95961">
          <div class="card-header py-3 text-white" style="background-color: #D95961;">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" style="background-color: #D95961; border: none">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";

export default ({
    name: "Pricing",
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

    #cardGroup {
        margin-left: 14rem;
        margin-right: 14rem;
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