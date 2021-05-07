<template>
  <div>
      <b-modal
        id="modal-prevent-closing"
        title="Submit Your Email"
        v-model="newsLetterModal"
        centered
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
    >
       <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Please insert your email or just click the 'cancel' button"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
            id="checkbox-1"
            v-model="privacyCheck"
            name="checkbox-1"
            value="accepted"
            unchecked-value="declined"
        >
      I accept the terms and use
    </b-form-checkbox>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default ({
    data() {
        return{
            newsLetterModal: false,
            emailState: null,
            email:'',
            privacyCheck: 'declined',
        }
        
    },

    methods: {
        timedNewsLetter(){
            let newsLetterCheck = this.$store.getters.getNewsLetterCheck
            if(newsLetterCheck == false){
                console.log("timed activated")
                setTimeout(()=>{this.newsLetterModal = true;}, 2000);
                
            }
            
        },

        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.emailState = valid
            return valid
        },
        resetModal() {
            this.email = ''
            this.privacyCheck = 'declined'
            this.emailState = null
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
            return
            }
            this.$store.commit('CHECK_NEWS_LETTER')
            this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
            })
        }
     
    },

    mounted() {
        this.timedNewsLetter()
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