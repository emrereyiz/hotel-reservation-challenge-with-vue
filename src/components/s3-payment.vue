<template>
  <section>
    <v-row>
      <v-col class="text-center" cols="12" md="12">
        <h3>
          Check-in: {{checkinDate}} 
          <v-divider></v-divider>
          Checkout: {{checkoutDate}}
          </h3>
      </v-col>
      <v-col class="text-center" cols="12" md="12">
        <h3>Oda Tipi: {{roomType}} / {{roomView}}</h3>
        <v-divider></v-divider>
      </v-col>
      <v-col class="mx-auto" cols="12" md="6">
        <div :class="`mx-auto card ${back}`">

          <span class="card__number">
            {{!cardNumber ? placeNumber : cardNumber }}
          </span>
          <span class="card__name">
            {{!cardName ? placeName : cardName }}
          </span>
          <span class="card__date">
            {{!cardDate ? placeDate : cardDate }}
          </span>
          <span class="card__cvc">
            {{!cardCVC ? placeCVC : cardCVC }}
          </span>
          
          <span class="card__logo"></span>
          <span class="card__bg">
          </span>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              :maxlength="30"
              v-model="cardName"
              label="Kart Üzerindeki İsim ve Soyisim"
              @focus="focusInput('cardName')"
              @blur="blurInput('cardName')"
              :class="{
                'has-error': (buttonStatus && !this.$v.cardName.required) || (buttonStatus &&  !this.$v.cardName.minLength),
                'has-success': !this.$v.cardName.$invalid,
                }"
            ></v-text-field>
            <label v-if="buttonStatus && !this.$v.cardName.required" for="" class="error-message">Lütfen isim ve soyisim giriniz</label>
            <label v-if="buttonStatus &&  !this.$v.cardName.minLength" for="" class="error-message">Lütfen minimum 3 karakter giriniz</label>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              type="tel"
              v-model="cardNumber"
              v-mask="'#### #### #### ####'"
              label="Kart Numarası"
              @focus="focusInput('cardNumber')"
              @blur="blurInput('cardNumber')"
              :class="{
                'has-error': (buttonStatus && !this.$v.cardNumber.required) || (buttonStatus &&  !this.$v.cardNumber.minLength),
                'has-success': !this.$v.cardNumber.$invalid,
                }"
            >
            </v-text-field>
            <label v-if="buttonStatus && !this.$v.cardNumber.required" for="" class="error-message">Lütfen kart numaranızı giriniz</label>
            <label v-if="buttonStatus &&  !this.$v.cardNumber.minLength" for="" class="error-message">Lütfen kart numaranızın tamamını giriniz</label>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              type="tel"
              v-mask="'##/##'"
              v-model="cardDate"
              label="Son Kullanma Tarihi"
              @focus="focusInput('cardDate')"
              @blur="blurInput('cardDate')"
              :class="{
                'has-error': (buttonStatus && !this.$v.cardDate.required) || (buttonStatus &&  !this.$v.cardDate.minLength),
                'has-success': !this.$v.cardDate.$invalid,
                }"
            ></v-text-field>
            <label v-if="buttonStatus && !this.$v.cardDate.required" for="" class="error-message">Lütfen kartınızın son kullanma tarihini giriniz</label>
            <label v-if="buttonStatus &&  !this.$v.cardDate.minLength" for="" class="error-message">Lütfen kartınızın son kullanma tarihinin tamamını giriniz</label>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              type="tel"
              v-mask="'###'"
              v-model="cardCVC"
              label="Güvenlik Numarası (CVC)"
              @focus="focusInput('cardCVC')"
              @blur="blurInput('cardCVC')"
              :class="{
                'has-error': (buttonStatus && !this.$v.cardCVC.required) || (buttonStatus &&  !this.$v.cardCVC.minLength),
                'has-success': !this.$v.cardCVC.$invalid,
                }"
            ></v-text-field>
            <label v-if="buttonStatus && !this.$v.cardCVC.required" for="" class="error-message">Lütfen kartınızın güvenlik numarasını giriniz</label>
            <label v-if="buttonStatus &&  !this.$v.cardCVC.minLength" for="" class="error-message">Lütfen kartınızın güvenlik numarasının tamamını giriniz</label>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <app-button 
    class="float-left"
      @click.native="prevStep"
      :index="stepIndex-1"
    >
    Geri
    </app-button>
    <app-button 
      @click.native="nextStep"
      :index="stepIndex"
    >
    Ödeme Yap
    </app-button>
  </section>
</template>
<script>
import button from './buttons/button'
import { required, minLength  } from 'vuelidate/lib/validators'
export default {
  components: {
    appButton: button
  },
  data () {
    return {
      back: false,
      cardNumber: null,
      cardName: null,
      cardDate: null,
      cardCVC: null,

      placeNumber: '0000 0000 0000 0000',
      placeName: 'Teknasyon',
      placeDate: '00/00',
      placeCVC: '000',
      
      stepIndex: null,
      buttonStatus: false
    }
  },
  validations: {
    cardNumber: {
      required,
      minLength: minLength(19)
    },
    cardName: {
      required,
      minLength: minLength(6)
    },
    cardDate: {
      required,
      minLength: minLength(5)
    },
    cardCVC: {
      required,
      minLength: minLength(3)
    }
  },
  watch: {
    stepIndex () {
      this.$store.commit("setActiveStep", this.stepIndex)
    }
  },
  computed: {
    checkinDate () {
      return this.$store.getters.getCheckinDate
    },
    checkoutDate () {
      return this.$store.getters.getCheckoutDate
    },
    roomType () {
      return this.$store.getters.getRoomType
    },
    roomView () {
      return this.$store.getters.getRoomView
    }
  },
  methods: {
    prevStep () {
      this.$store.commit("setActiveStep", 2)
    },
    nextStep () {
      this.buttonStatus = true
      if(this.stepIndex === null && !this.$v.$invalid){
        this.$store.commit("setCompletedStep", 4)
      }
      !this.$v.$invalid ? this.stepIndex = 4 : ""

      const cardDetail = {
        name: this.cardName,
        number: this.cardNumber,
        date: this.cardDate,
        cvc: this.cardCVC
      }
      this.$store.commit("setCard", cardDetail)
    },
    focusInput (type) {
      if (type === "cardCVC") {
        this.back = true
      }
    },
    blurInput (type) {
      if (type === "cardCVC") {
        this.back = false
      }
    }
  },
  created () {
    const storage = JSON.parse(localStorage.getItem("reservationObj"))
    if(storage != null){
      this.cardName = storage.card.name
      this.cardNumber = storage.card.number
      this.cardDate = storage.card.date
      this.cardCVC = storage.card.cvc
    }    
  }
}
</script>
<style lang="less">

  .card{
    width: 500px;
    height: 250px;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    transition:0.5s;

      @media screen and (max-width:767px){
          width:100%;
          height:280px
      }
      @media screen and (max-width:450px){
        width:100%;
        height:200px;
      }

    .card__cvc{
      opacity: 0;
      z-index: 2;
      width: 100%;
      text-align: left;
      background:#000;
      color:#fff;
      padding:10px;
      margin:0 0 20px 0;
      position: absolute;
      font-size: 25px;
      transform:rotateY(180deg);
      text-align: right;
    }
  
  > * {
    transition: 0.5s;
  }

  }
  .true{
    transform:rotateY(180deg);
    .card__number,
    .card__name,
    .card__date{
      opacity: 0;
    }
    .card__logo{
      transform:rotateY(180deg);
    }
    .card__cvc{
      opacity: 1;
      display: inline-block;
      position: static;
    }
  }

  .card__number{
    z-index: 2;
    width:100%;
    text-align: center;
    font-size: 38px;
    color:#babfce;
    text-shadow: 1px 1px 1px #fff;
    margin:40px 0 0 0;
    background-color:#f5f5f5;
    border: solid 1px #06b4e4;
    border-left: 0;
    border-right: 0;
    @media screen and (max-width:450px){
        font-size: 20px;
    }
  }

  .card__name,
  .card__date{
    z-index: 2;
    padding:0 20px 20px 20px;
    color:#686b73;
    text-shadow: 1px 1px 1px #fff;
    font-size: 20px;
    @media screen and (max-width:450px){
        font-size: 12px;
    }
  }


  .card__bg,
  .card__logo{
    position: absolute;
    width:100%;
    height: 100%;
    border-radius: 10px;
    background: #C9D6FF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .card__logo{
    background-image:url('../assets/teknasyon-logo.png');
    background-repeat: no-repeat;
    background-position: top 20px left 20px;
    z-index: 2;
    background-size:40%;
  }

</style>