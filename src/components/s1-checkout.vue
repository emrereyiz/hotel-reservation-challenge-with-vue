<template>
  <section>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col class="align-center" cols="5">
          Check-in Tarihi: 
          </v-col>
          <v-col cols="7">

              <v-menu
                transition="scale-transition"
                offset-y
                min-width="200px"
              >

                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="checkinDate"
                    label="Gidiş Tarihini Seçiniz"
                    prepend-icon="fas fa-calendar-week"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>

                <v-date-picker
                v-model="checkinDate"
                :min="minDate"
                ></v-date-picker>

              </v-menu>

          </v-col>
          
        </v-row>
        <v-row>
          <v-col class="align-center" cols="5">
          Check-out Tarihi: 
          </v-col>
          <v-col cols="7">
            
              <v-menu
                transition="scale-transition"
                offset-y
                min-width="200px"
              >

                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="checkoutDate"
                    label="Dönüş Tarihini Seçiniz"
                    prepend-icon="fas fa-calendar-week"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>

                <v-date-picker
                v-model="checkoutDate"
                :min="checkinDate"
                ></v-date-picker>

              </v-menu>

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
      checkinDate: null,
      checkoutDate: null
    }
  },
  watch: {
    checkinDate () {
    }
  },
  computed: {
    minDate () {
      return this.$store.getters.minDate
    }
  }
}
</script>
<style lang="less">
  .align-center{
    display: flex;
  }
</style>