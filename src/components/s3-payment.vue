<template>
  <section>
    <v-row>
      <v-col cols="12">
        <h3>Check-in: 08/06/2020 Checkout: 10/06/2020</h3>
      </v-col>
      <v-col cols="12">
        <h3>Oda Tipi: Standart Manzara / Deniz</h3>
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
  }
}
</script>
<style lang="less">

</style>