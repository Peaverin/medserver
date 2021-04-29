<template>
  <b-container class="choose-date-time">
    <h1 class="m-5">QUAN?</h1>
    <b-row class="row justify-content-center mb-5">
      <p> Tria quan vols que enviem la comanda</p>
    </b-row>
    <b-row class="mb-5" align-h="around">
      <b-col>
        <label>Dia de l'enviament</label>
      </b-col>
      <b-col>
        <label>Hora de l'enviament</label>
      </b-col>
    </b-row>
    <b-row class="mb-5" align-h="around">
      <b-col>
        <datepicker placeholder="Select Date"></datepicker>
      </b-col>
      <b-col>
        <vue-timepicker :minute-interval="15"></vue-timepicker>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <med-button>SEGUIR COMPRANT</med-button>
      </b-col>
      <b-col>
        <med-button>CONTINUAR</med-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import MedButton from './MedButton.vue'
export default {
  name: "ChooseDateTime",
  components: {
    Datepicker,
    VueTimepicker,
    MedButton
  }
}
</script>

<style scoped>

</style>
