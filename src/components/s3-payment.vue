<template>
  <section>
    <v-row>
      <v-col cols="12">
        <h3>Check-in: {{checkinDate}} Checkout: {{checkoutDate}}</h3>
      </v-col>
      <v-col cols="12">
        <h3>Oda Tipi: {{roomType}} / {{roomView}}</h3>
      </v-col>
      <v-col cols="12">
        <app-card></app-card>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import creditCard from "./creditCard"
export default {
  components: {
    appCard: creditCard
  },
  data () {
    return {

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
  }
}
</script>
<style lang="less">

</style>