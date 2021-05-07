<template>
  <div class="home">
     <NavBar/>
     <Banner/>
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

  }
};

</script>
