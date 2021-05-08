<template>
  <b-container class="choose-date-time">
    <h1 class="mb-5">QUAN?</h1>
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
        <div>
          <date-picker
              v-model="day"
              format="YYYY-MM-DD"
              type="date"
              placeholder="Select date"
          ></date-picker>
        </div>
      </b-col>
      <b-col>
        <date-picker
            v-model="date"
            :time-picker-options="{
                start: '01:00',
                step: '00:30',
                end: '24:30',
              }"
            format="hh:mm a"
            type="time"
            placeholder="hh:mm a"
        ></date-picker>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <med-button link='/products'>SEGUIR COMPRANT</med-button>
      </b-col>
      <b-col>
        <med-button link='/chooseDestination'>CONTINUAR</med-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/es';
  import MedButton from './MedButton.vue'
  export default {
    name: "ChooseDateTime",
    components: {
      DatePicker,
      MedButton
    },
    data() {
      return {
        day: null,
        date: null
      }
    }
  }
</script>

<style scoped>

</style>
