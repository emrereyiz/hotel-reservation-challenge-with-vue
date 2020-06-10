<template>
  <section>
    <v-row>
      <v-col class="mx-auto" cols="12" sm="12" md="6">
        <v-row>
          <v-col class="align-center" cols="12" sm="12" md="5">
            Check-in Tarihi: 
          </v-col>
          <v-col
            cols="12" sm="12" md="7"
            :class="{
              'has-error': buttonStatus && this.$v.checkinDate.$invalid,
              'has-success': !this.$v.checkinDate.$invalid,
            }"
          >
            <v-menu
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="checkinDate"
                  label="Giriş Tarihini Seçiniz"
                  prepend-icon="fas fa-calendar-week"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                ></v-text-field>
              </template>

              <v-date-picker
              v-model="checkinDate"
              :min="minDate"
              locale="tr"
              @change="changeCheckin"
              ></v-date-picker>
            </v-menu>
              <label v-if="buttonStatus && this.$v.checkinDate.$invalid" for="" class="error-message">Lütfen Giriş Tarihini Seçiniz</label>
          </v-col>
          
        </v-row>
        <v-row>
          <v-col class="align-center" cols="12" sm="12" md="5">
            Check-out Tarihi: 
          </v-col>
          <v-col 
            cols="12" sm="12" md="7"
            :class="{
              'has-error': buttonStatus && this.$v.checkoutDate.$invalid,
              'has-success': !this.$v.checkoutDate.$invalid,
            }"
          >
            
              <v-menu
                transition="scale-transition"
                offset-y
              >

                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="checkoutDate"
                    label="Çıkış Tarihini Seçiniz"
                    prepend-icon="fas fa-calendar-week"
                    v-bind="attrs"
                    v-on="on"
                    readonly
                    :disabled="!checkinDate"
                  ></v-text-field>
                </template>

                <v-date-picker
                v-model="checkoutDate"
                :min="checkinDate"
                locale="tr"
                ></v-date-picker>

              </v-menu>
              <label v-if="buttonStatus && this.$v.checkoutDate.$invalid" for="" class="error-message">Lütfen Çıkış Tarihini Seçiniz</label>

          </v-col>
          
        </v-row>
      </v-col>
    </v-row>
    <app-button
    @click.native="nextStep"
    :index="stepIndex"
    ></app-button>
  </section>
</template>
<script>
import button from './buttons/button'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    appButton: button
  },
  validations: {
    checkinDate: {
      required
    },
    checkoutDate: {
      required
    }
  },
  data () {
    return {
      checkinDate: null,
      checkoutDate: null,
      stepIndex: null,
      buttonStatus: false,
      count: 0
    }
  },
  methods: {
    nextStep () {
      this.buttonStatus = true
      if(this.stepIndex === null && !this.$v.$invalid){
        this.$store.commit("setCompletedStep", 2)
      }
      !this.$v.$invalid ? this.stepIndex = 2 : ""
    },
    changeCheckin () {
      this.checkoutDate = this.checkinDate
    }
  },
  watch: {
    checkinDate () {
      this.$store.commit("setCheckinDate", this.checkinDate)
    },
    checkoutDate () {
      this.$store.commit("setCheckoutDate", this.checkoutDate)
    },
    stepIndex () {
      this.$store.commit("setActiveStep", this.stepIndex)
    }
  },
  computed: {
    minDate () {
      return this.$store.getters.minDate
    }
  },
  created () {
    const storage = JSON.parse(localStorage.getItem("reservationObj"))
    if(storage != null){
      this.checkinDate = storage.date.checkin
      this.checkoutDate = storage.date.checkout
    }    
  }
}
</script>
<style lang="less">
  .align-center{
    display: flex;
  }
  @c-error: #FF5252;
  @c-success: #81C784;
  .error-message{
    color:@c-error;
    font-size: 12px;
    margin:0;
    padding:0;
  }
  .v-application{
    .has-error{
      .v-label{
        color:@c-error !important;
        caret-color:@c-error !important;
      }
      .v-text-field > .v-input__control > .v-input__slot::before{
        border-color:@c-error !important;
      }
      input{
        color:@c-error !important;
      }
    }
    .has-success{
      .v-label{
        color:@c-success !important;
        caret-color:@c-success !important;
      }
      .v-text-field > .v-input__control > .v-input__slot::before{
        border-color:@c-success !important;
      }
    }
  }
</style>