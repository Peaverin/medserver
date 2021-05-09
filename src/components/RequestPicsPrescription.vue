<template>
  <div class="container-xl">
    <h1 class="p-4 section__title">Penja les següents fotografies:</h1>
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
    <b-row class="row-buttons" align-h="center">
      <b-col>
        <med-button link="/products">ENRERE</med-button>
      </b-col>
      <b-col>
        <med-button-call link="/chooseDateTime">CONTINUAR</med-button-call>
      </b-col>
    </b-row>
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

.row-buttons {
  margin-top: 15px;
}

#components-demo, #components-demo2 {
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  background-color: var(--main-color-lightest);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
