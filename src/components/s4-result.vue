<template>
  <section>
    <v-alert
      color="success"
      dark
      icon="fas fa-check-circle"
      border="left"
      prominent
    >
      Sayın {{cardDetail.name}}, rezervasyon başarıyla oluşturuldu. {{checkinDate}} tarihinde sizi otelimize bekliyoruz. Detaylar aşağıda yer almaktadır.
    </v-alert>
    <v-card
      class="mx-auto"
      max-width="100%"
      tile
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Giriş / Çıkış Tarihleri</v-list-item-title>
          <v-list-item-subtitle>
            {{checkinDate}} / {{checkoutDate}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Oda / Manzara Tipi</v-list-item-title>
          <v-list-item-subtitle>
            {{roomType}} / {{roomView}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Ödeme Detayı</v-list-item-title>
          <v-list-item-subtitle>
            {{cardDetail.name}}
            <br>
            Kart Numarası: {{ cardDetail.number /*`${cardDetail.number.substring(0,12)}** ****`*/}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </section>
</template>
<script>
export default {
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
    },
    cardDetail () {
      return this.$store.getters.getCard
    },
    activeStep () {
      return this.$store.getters.getActiveStep
    }
  },
  watch: {
    activeStep () {
      if(this.activeStep === 4){
        const obj = {
          date: {
            checkin: this.checkinDate,
            checkout: this.checkoutDate,
          },
          room: {
            type: this.roomType,
            view: this.roomView
          },
          card: this.cardDetail
        }
        localStorage.setItem("reservationObj", JSON.stringify(obj));


        console.log(
          `
          Giriş Tarihi: ${obj.date.checkin} \n
          Çıkış Tarihi: ${obj.date.checkout} \n
          Oda Tipi: ${obj.room.type} \n
          Oda Manzarası: ${obj.room.view} \n
          Kart Üzerideki İsim: ${obj.card.name} \n
          Kart Numarası: ${obj.card.number} \n
          Kart Son Kullanma Tarihi: ${obj.card.date} \n
          Kart Güvenlik Numarası: ${obj.card.cvc} \n
          `
        )

      }
    }
  },
}
</script>
<style lang="less">

</style>