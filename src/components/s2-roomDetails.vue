<template>
  <section>
    <v-row>
      <v-col cols="12">
        <h3>Check-in: 08/06/2020 Checkout: 10/06/2020</h3>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col class="align-center" cols="2">
          Oda Tipi: 
          </v-col>

          <v-col cols="10">
            <v-radio-group
              :row="true"
            >
              <v-radio label="Standart"></v-radio>
              <v-radio label="Deluxe"></v-radio>
              <v-radio label="Suit"></v-radio>
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
            >
              <v-radio label="Deniz"></v-radio>
              <v-radio label="Kara"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="less">

</style>