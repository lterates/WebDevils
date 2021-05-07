<template>
  <div>
    <b-modal hide-footer v-model="privacyModal" centered title="Acordo de Privacidade">
        <b-container fluid class="text-center">
        <b-row align-v="center">
           <b-col>
               <b-button style="background-color: #D33F49; border: none;" class="p-3" variant="primary" @click="accept()">Aceitar</b-button>
            </b-col> 
            <b-col>
                <b-button variant="dark" class="p-3" @click="refuse()">Recusar</b-button>
            </b-col>
        </b-row>
        </b-container>
        
    </b-modal>
  </div>
</template>

<script>
export default ({
    data() {
        return{
            email:"",
            privacyModal: true
        }
    },

    methods: {
        accept(){
            this.$store.commit('ACCEPT_PRIVACY_POLICY')
            this.$root.$emit('timedNewsLetter')
            this.privacyModal = false
        },
        refuse(){
            this.privacyModal = false
        }
     
    },

     mounted(){
          this.privacyModal = true
      }
})
</script>


<style scoped>
    div {
        font-family: 'Poppins';
        background: white;
        color: #D33F49;
    }

    h1 {
        font-size: 3rem;
    }
</style>