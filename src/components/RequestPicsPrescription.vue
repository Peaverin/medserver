<template>
  <div class="container-xl">
    <h1 class="p-5 section__title">Penja les següents fotografies:</h1>
    <div class="form-group row">
      <div class="col-sm" id="components-demo">
        <p>Puja una fotografa de la recepta mèdica</p>
        <ChooseImage></ChooseImage>
      </div>
      <div class="col-sm" id="components-demo2">
        <p>Puja una fotografa de la targeta sanitària</p>
        <ChooseImage></ChooseImage>
      </div>
    </div>
    <div class="botons">
      <med-button link="/products">ENRERE</med-button>
      <med-button-call link="/chooseDateTime">CONTINUAR</med-button-call>
    </div>
  </div>
</template>

<script>
import ChooseImage from './ChooseImage.vue'
import MedButton from "./MedButton";
import MedButtonCall from "./MedButtonCall";
export default {
  name: "RequestPicsPrescription",
  components: {
    ChooseImage,
    MedButton,
    MedButtonCall
  }
}
</script>

<style scoped>
.botons {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
}
</style>
