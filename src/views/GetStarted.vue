<template>
    <div class="getStarted">
        <NavBar/>
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
        
        <div id="blobForm" class="" style="position: relative; text-align: center;">
        <svg id="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(211, 63, 73, 0.15)" d="M40.5,-67.5C53.7,-62.5,66.5,-54.1,72.6,-42.3C78.7,-30.5,78.1,-15.3,73.2,-2.8C68.3,9.6,59.2,19.3,53.4,31.5C47.5,43.6,44.8,58.3,36.4,66C28.1,73.7,14,74.4,-0.3,74.9C-14.7,75.5,-29.3,75.8,-40.5,69.8C-51.8,63.7,-59.5,51.3,-63.2,38.6C-66.9,25.9,-66.4,13,-65.2,0.7C-63.9,-11.5,-61.9,-23,-56.5,-32.8C-51.2,-42.6,-42.5,-50.6,-32.5,-57.4C-22.6,-64.3,-11.3,-70,1.2,-72C13.6,-74,27.3,-72.4,40.5,-67.5Z" transform="translate(100 100)" />
        </svg>

        <div id="form">
        <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
            id="input-group-1"
            label="Company"
            label-for="input-group-company"
            description="Type your brand name if you don't have a company"
        >
            <b-form-input
            id="input-company"
            v-model="form.company"
            type="company"
            placeholder="Enter Company Name"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-name" label="Name" label-for="input-name">
            <b-form-input
            id="input-name"
            v-model="form.name"
            placeholder="Enter name"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-email" label="Email" label-for="input-email">
            <b-form-input
            id="input-email"
            v-model="form.email"
            placeholder="Enter your email"
            required
            ></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-phone" label="Phone Number" label-for="input-phone">
            <b-form-input
            id="input-phone"
            v-model="form.phone"
            placeholder="Enter your phone number"
            required
            ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-plan" label="Selected Plan" label-for="input-plan">
          <b-form-select required id="input-plan" v-model="selected" :options="options"></b-form-select>
          <div class="mt-3" v-if="selected!=null">Selected: <strong>{{ selected }}</strong></div>
        </b-form-group><br>
        <b-button type="submit" variant="danger">Register</b-button>
        </b-form>
        </div>
        </div>
      <Footer/>
    </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer
  },

  data(){
    return{
        selected: null,
        options: [
          {value: null, text: "Please pick a Plan"},
          {value: 'Free', text: "Free Plan"},
          {value: 'Pro', text: "Pro Plan"},
          {value: 'Enterprise', text: "Enterprise Plan"},
        ],

        form: {
          company: '',
          name: '',
          phone:'',
          email:''
        },
        show: true
      }
  },
     methods: {
      onSubmit(event) {
        event.preventDefault()

        this.$swal({
            icon: 'success',
            title: 'Thank You',
            text: 'One of our agents will contact you soon',
        });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.company = ''
        this.form.name = ''
        this.form.phone = ''
        this.form.email = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
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
}
</script>



<style scoped>
.getStarted {
  font-family: 'Poppins';
  font-style: normal;
  color: black;
}

#blob {
  z-index: -1;
  width: 45vw;
  position: absolute;
  left: 26vw;
  top: -18vh;
}

#form{
    margin-top: 12vh;
    margin-inline: auto;
    min-width: 210px;
    max-width: 20%;
}

#svg1 {
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