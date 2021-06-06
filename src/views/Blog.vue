<template>
  <div class="blog">
    <NavBar />
    <header class="mt-4">
      <div
        class="pricing-header p-3 pb-md-4 mx-auto text-center"
        style="position: relative; text-align: center; max-width: 500px"
      >
        <svg
          id="blob"
          viewBox="0 0 200 200"
          style="transform: rotate(90deg)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(211, 63, 73, 0.15)"
            d="M18.9,-25.7C23.4,-9.3,25.4,-1.5,24.8,7.4C24.1,16.4,20.9,26.4,9.8,39C-1.4,51.6,-20.3,66.6,-32.9,62.7C-45.5,58.8,-51.7,36,-56.9,13C-62.2,-10,-66.5,-33.3,-56.9,-50.8C-47.2,-68.4,-23.6,-80.2,-8.2,-73.7C7.1,-67.1,14.3,-42.1,18.9,-25.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <div>
          <h1
            class="display-4 fw-normal"
            style="font-family: 'Poppins'; font-style: italic; color: #d33f49"
            text-center
          >
            Blog Posts
          </h1>
        </div>
      </div>
    </header>

    <div id="articles">
      <b-container fluid>
        <b-row fluid style="margin-top: 15vh" class="px-5">
          <b-col>
            <h2>#1 - How to make your business more LGBTQ+ friendly</h2>
            <p class="mt-5">Hey everyone, happy pride! 🏳️‍🌈</p>
            <p></p>
            <p>
              Given that it's pride month we thought there would be no better
              opportunity to give you some tips on how to make your business as
              welcoming as it can be to LGBTQ+ people. so let's get right into
              it!
            </p>
            <p>
              1. never forget your allyship towards the LGBTQ+ community! all
              year round, when making business decisions make sure to always
              associate yourself with causes and people that support and
              definitely not harm or disregard them!
            </p>
            <p>
              2. always do your research before you post anything! if good
              research isn't behind the content you create it could be
              potentially harmful towards the people you're trying to reach and
              connect with. posting rainbows and donating to organizations
              without researching beforehand is not enough to call yourself an
              ally.
            </p>
            <p>
              3. reach out to the LGBTQ+ community whenever you have any
              questions! if you're wondering if a campaign is "good enough" or
              good allyship chances are there are a bunch of queer people in the
              marketing industry (at Web Devils included!) that can help you
              make sure your campaign isn't tone deaf and can actually make
              positive change and have the impact you initially desired!
            </p>
            <p>
              And that's it, these are the tips we have for you today! keep
              these in mind (all year round) and enjoy pride month! 🏳️‍🌈💙
            </p>
          </b-col>
          <b-col class="px-5">
            <b-img
              src="../assets/pride.jpg"
              alt="Self Advertising"
              fluid
              rounded
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>


<script>
import NavBar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Blog",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
main {
  font-family: "Poppins";
}

p {
  color: black;
  font-style: normal;
}

#articles {
  font-family: "Poppins";
  font-style: italic;
  color: #d33f49;
  margin: 2%;
  text-align: left;
}

#blob {
  width: 450px;
  position: absolute;
  top: -100%;
  left: 0rem;
}

text {
  font-family: "Poppins";
  font-style: italic;
  font-size: 4.5em;
  fill: #d33f49;
}
</style>