<template>
<div>
  <div :class="`card ${back}`">

    <span class="card__number">
      {{cardNumber}}
    </span>
    <span class="card__name">
      {{cardName}}
    </span>
    <span class="/card__date">
      {{cardDate}}
    </span>
    <span class="card__cvc">
      {{cardCVC}}
    </span>
    
    <span class="card__logo"></span>
    <span class="card__bg">
    </span>
  </div>
  <button @click="reverse">Çevir</button>

  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="cardName"
        label="Kart Üzerindeki İsim"
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        v-model="cardNumber"
        label="Kart Numarası"
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field
        v-model="cardDate"
        label="Son Kullanma Tarihi"
      ></v-text-field>
    </v-col>
    <v-col cols="3">
      <v-text-field
        v-model="cardCVC"
        label="Güvenlik Numarası (CVC)"
        @focus="back = true"
        @blur="back = false"
      ></v-text-field>
    </v-col>
  </v-row>

</div>
</template>
<script>
export default {
  data () {
    return {
      back: false,
      cardNumber: '0000 0000 0000 0000',
      cardName: 'Emre Köklü',
      cardDate: '09/20',
      cardCVC: '999'
    }
  },
  methods: {
    reverse () {
      this.back = !this.back
    }
  }
}
</script>
<style lang="less" scoped>
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
  }

  .card__name,
  .card__date{
    z-index: 2;
    padding:0 20px 20px 20px;
    color:#686b73;
    text-shadow: 1px 1px 1px #fff;
    font-size: 20px;
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