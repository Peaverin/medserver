<template>
  <div class="container-sm px-5">
    <h1 class="p-4 section__title">On?</h1>
    <p class="p-3">Tria on vols que enviem la comanda</p>
    <div class="radio col-sm-10 mb-3">
      <label><input v-model="changeAdress" type="radio" name="optradio" v-bind:value="0" checked> Usar direcció del compte: C/ Abat Bassa 132, 2n 3a, 08017, Barcelona</label>
    </div>
    <div class="radio col-sm-10 mb-4">
      <label><input v-model="changeAdress" type="radio" name="optradio" v-bind:value="1"> Usar direcció següent:</label>
    </div>
    <div class="form-group row">
      <label for="usr" class="col-form-label col-sm-4">Carrer, número, pis i porta:</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="usr" :disabled="disableFields" v-model="street">
      </div>
    </div>
    <div class="form-group row">
      <label for="pwd" class="col-form-label col-sm-4">Codi postal:</label>
          <div class="col-sm-6">
        <input type="text" class="form-control" id="pwd" :disabled="disableFields" v-model="cp">
      </div>
    </div>
    <div class="form-group row">
      <label for="pwd" class="col-form-label col-sm-4">Municipi:</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="mun" :disabled="disableFields" v-model="city">
      </div>
    </div>
    <b-row class="row-buttons" align-h="center">
      <b-col>
        <med-button link='/chooseDateTime'>ENRERE</med-button>
      </b-col>
      <b-col>
        <med-button-call link='/choosePaymentMethod' :disabled="isDisable">CONTINUAR</med-button-call>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import MedButton from './MedButton.vue'
import MedButtonCall from './MedButtonCall.vue'
export default {
  name: "ChooseDestination",
  components: {
    MedButton,
    MedButtonCall
  },
  data () {
    return {
      changeAdress: 0,
      street: "",
      cp: "",
      city: ""
    }
  },
  computed: {
    isDisable () {
      return this.changeAdress==="" || (this.changeAdress === 1) && (this.street === "" || this.cp === "" || this.city === "");
    },
    disableFields () {
      return this.changeAdress === 0;
    }
  },
  updated() {
    console.log(this.changeAdress)
    var address = this.street + ', ' + this.cp + ', ' + this.city;
    if (this.changeAdress === 0) {
      globalStore.finalAddress = globalStore.defaultAddress;
    } else {
      globalStore.finalAddress = address
    }
    console.log(globalStore.finalAddress)

  },
}
</script>

<style scoped>
.radio{
  margin-left: auto;
  text-align: start;
}
.col-form-label{
  text-align: start;
  margin-left: auto;
}
#end_buttons{
  margin-top: 70px;
}
.row-buttons {
  margin-top: 15px;
}
</style>
