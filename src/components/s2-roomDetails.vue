<template>
  <section>
    <v-row>
      <v-col cols="12">
        <h3>Check-in: {{checkinDate}} Checkout: {{checkoutDate}}</h3>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col class="align-center" cols="2">
          Oda Tipi: 
          </v-col>

          <v-col cols="10">
            <v-radio-group
              :row="true"
              v-model="roomType"
            >
              <v-radio value="Standart" label="Standart"></v-radio>
              <v-radio value="Deluxe" label="Deluxe"></v-radio>
              <v-radio value="Suit" label="Suit"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col class="align-center" cols="2">
          Manzara Seçimi: 
          </v-col>

          <v-col cols="10">
            <v-radio-group
              :row="true"
              v-model="roomView"
            >
              <v-radio value="Deniz" label="Deniz"></v-radio>
              <v-radio value="Kara" label="Kara"></v-radio>
            </v-radio-group>
          </v-col>
          
        </v-row>
      </v-col>
  
    </v-row>
  </section>
</template>
<script>
export default {
  data () {
    return {
      roomType: null,
      roomView: null
    }
  },
  watch: {
    roomType () {
      this.$store.commit("setRoomType", this.roomType)
    },
    roomView () {
      this.$store.commit("setRoomView", this.roomView)
    }
  },
  computed: {
    checkinDate () {
      return this.$store.getters.getCheckinDate
    },
    checkoutDate () {
      return this.$store.getters.getCheckoutDate
    }
  }
}
</script>
<style lang="less">

</style>