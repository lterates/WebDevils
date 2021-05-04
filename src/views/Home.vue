<template>
  <div class="home">
     <NavBar/>
     <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navbar.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Banner
  },


  data: () => ({
    

  }),

  methods:{
    function(){

    }


  

  },

  beforeMount(){

  }
};

</script>
