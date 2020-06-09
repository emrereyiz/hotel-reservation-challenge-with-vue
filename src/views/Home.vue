<template>
  <div class="home">
    {{activeStep}}
    <v-stepper v-model="stepIndex">
      <v-stepper-header>
        <v-stepper-step
        :editable="true"
        :complete="activeStep > 1"
        step="1"
        >
        Tarih Seçimi
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
        :editable="true"
        :complete="activeStep > 2"
        step="2"
        >
        Oda Seçimi
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
        :editable="true"
        :complete="activeStep > 3"
        step="3"
        >
        Ödeme
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
        :editable="true"
        :complete="activeStep > 3"
        step="4"
        >
        Sonuç
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <app-checkout></app-checkout>

          <v-btn
            color="primary"
            @click="setStep(2)"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <app-room></app-room>

          <v-btn
            color="primary"
            @click="setStep(3)"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <app-payment></app-payment>

          <v-btn
            color="primary"
            @click="setStep(4)"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <app-result></app-result>

          <v-btn
            color="primary"
            @click="setStep(1)"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import checkout from "../components/s1-checkout"
import room from "../components/s2-roomDetails"
import payment from "../components/s3-payment"
import result from "../components/s4-result"
  export default {
    components: {
      appCheckout: checkout,
      appRoom: room,
      appPayment: payment,
      appResult: result
    },
    data () {
      return {
        stepIndex: 1,
      }
    },
    watch: {
      stepIndex () {
        console.log('test')
        this.$store.commit('setActiveStep', this.stepIndex)
      }
    },
    methods: {
      setStep (index) {
        this.stepIndex = index
      }
    },
    computed: {
      activeStep () {
        return this.$store.getters.getActiveStep
      }
    }
  }
</script>
