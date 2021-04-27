<template>
  <div class="container-sm px-5">
    <h1 class="m-5">COM?</h1>
    <p class="m-5">Tria com vols pagar la comanda</p>
    <div class="radio col-sm-10 mb-3">
      <label><input type="radio" name="optradio" checked> Pagar a contra reemborsament</label>
    </div>
    <div class="radio col-sm-10 mb-4">
      <label><input type="radio" name="optradio"> Pagar amb targeta de crèdit</label>
    </div>
    <div class="radio col-sm-10 mb-4">
      <label><input type="radio" name="optradio"> Pagar amb PayPal</label>
    </div>
    <div class="row justify-content-center" id="end_buttons">
      <div class="col-4">
        <med-button>ENRERE</med-button>
      </div>
      <div class="col-4">
        <med-button>REALITZAR PAGAMENT</med-button>
      </div>
    </div>
  </div>
</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: "ChoosePaymentMethod",
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
