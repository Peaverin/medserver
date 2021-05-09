<template>
  <b-container class="choose-date-time">
    <h1 class="p-4 section__title">Quan?</h1>
    <p class="p-3">Tria quan vols que enviem la comanda</p>
    <b-row align-h="around">
      <b-row align-h="around">
        <b-col>
          <label class="mb-5" >Dia de l'enviament</label>
          <div>
            <date-picker class="mb-5"
                v-model="day"
                format="YYYY-MM-DD"
                type="date"
                placeholder="Tria un dia"
            ></date-picker>
          </div>
        </b-col>

      </b-row>
      <b-row align-h="around">

        <b-col>
          <label class="mb-5" >Hora de l'enviament</label>
          <div>
            <date-picker class="mb-5"
                v-model="time"
                :time-picker-options="{
                start: '07:00',
                step: '00:30',
                end: '23:30',
              }"
                format="HH:mm"
                type="time"
                placeholder="Tria una hora"
            ></date-picker>
          </div>

        </b-col>
      </b-row>


    </b-row>
    <b-row class="row-buttons" align-h="center">
      <b-col>
        <med-button link='/requestPicsPrescription'>ENRERE</med-button>
      </b-col>
      <b-col>
        <med-button-call link='/chooseDestination' :disabled="isDisable">CONTINUAR</med-button-call>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {globalStore} from '../main.js'
import moment from 'moment'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/es';
  import MedButton from './MedButton.vue'
    import MedButtonCall from './MedButtonCall.vue'
  export default {
    name: "ChooseDateTime",
    components: {
      DatePicker,
      MedButton,
      MedButtonCall
    },
    data() {
      return {
        day: null,
        time: null
      }
    },
    updated() {
      var dateTime = moment(this.day).lang('ca').format('LL')+ ' a les ' + moment(this.time).lang('ca').format('LT');
      console.log(dateTime)
      globalStore.dateTime = dateTime
    },
    computed: {
      isDisable () {
        return (this.day === null) || (this.time === null)
      }
    }
  }
</script>

<style scoped>
.row-buttons {
  margin-top: 15px;
}
</style>
