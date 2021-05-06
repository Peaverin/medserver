<template>
  <div>
    <h1>OrderSummary</h1>
    <div class="col-4">
        <centered-button link='/orderFinished'>CONFIRMAR COMANDA</centered-button>
    </div>
  </div>
  
</template>

<script>
import CenteredButton from './CenteredButton.vue'
export default {
  name: 'OrderSummary',
  components: {
    CenteredButton
  }
}
</script>

<!-- Add "s
    CenteredButtoncoped" attribute to limit CSS to this component only -->
