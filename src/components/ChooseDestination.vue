<template>
  <div class="container-sm px-5">
    <h1>ON?</h1>
    <p class="p-5">Tria on vols que enviem la comanda</p>
    <div class="radio col-sm-10 mb-3">
      <label><input type="radio" name="optradio" checked> Usar direcció del compte</label>
    </div>
    <div class="radio col-sm-10 mb-4">
      <label><input type="radio" name="optradio"> Usar direcció següent:</label>
    </div>
    <div class="form-group row">
      <label for="usr" class="col-form-label col-sm-4">Carrer, número, pis i porta:</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="usr">
      </div>
    </div>
    <div class="form-group row">
      <label for="pwd" class="col-form-label col-sm-4">Codi postal:</label>
          <div class="col-sm-6">
        <input type="text" class="form-control" id="pwd">
      </div>
    </div>
    <div class="form-group row">
      <label for="pwd" class="col-form-label col-sm-4">Municipi:</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="mun">
      </div>
    </div>
    <div class="row justify-content-center" id="end_buttons">
      <div class="col-4">
        <med-button link='/chooseDateTime'>ENRERE</med-button>
      </div>
      <div class="col-4">
        <med-button link='/choosePaymentMethod'>CONTINUAR</med-button>
      </div>
    </div>
  </div>
</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: "ChooseDestination",
  components: {
    MedButton
  }
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
