<template>
    <div class="row">
      <div class="col-10 offset-1">
       <med-button> <slot/> </med-button>
      </div>
    </div>  
</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: 'CenteredButton',
  components: {
    MedButton
  }
}
</script>
