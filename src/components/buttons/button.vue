<template>
  <div>
      <v-btn
        color="primary"
        class="float-right"
        @click="setStep(index)"
      >
      <slot>
        Devam
      </slot>
      </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      required: true
    }
  },
  methods: {
    setStep (index) {
      index ? this.$store.commit("setActiveStep", Number(index)) : ""
    }
  }
}
</script>
<style lang="less">

</style>