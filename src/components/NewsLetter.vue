<template>
  <div>
      <b-modal
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
          invalid-feedback="É preciso Email"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>
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
            email:''
        }
        
    },

    methods: {
        timedNewsLetter(){
            console.log("timed activated")
            setTimeout(()=>{this.newsLetterModal = true;}, 2000);
        },

        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.emailState = valid
            return valid
        },
        resetModal() {
            this.email = ''
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
            // Push the name to submitted names
            this.submittedNames.push(this.email)
            // Hide the modal manually
            this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
            })
        }
     
    },

    mounted() {
        this.$root.$on('timedNewsLetter', () => {
            this.timedNewsLetter()
        })
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