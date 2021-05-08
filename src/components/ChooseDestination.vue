<template>
  <div class="container-sm px-5">
    <h1 class="section__title">On?</h1>
    <p class="p-5">Tria on vols que enviem la comanda</p>
    <div class="radio col-sm-10 mb-3">
      <label><input v-model="changeAdress" type="radio" name="optradio" v-bind:value="0" checked> Usar direcció del compte</label>
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
    <div class="row justify-content-center" id="end_buttons">
      <div class="col-4">
        <med-button link='/chooseDateTime'>ENRERE</med-button>
      </div>
      <div class="col-4">
        <med-button link='/choosePaymentMethod' :disabled="isDisable">CONTINUAR</med-button>
      </div>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import MedButton from './MedButton.vue'
export default {
  name: "ChooseDestination",
  components: {
    MedButton
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
</style>
