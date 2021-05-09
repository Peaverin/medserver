<template>
<div class="container">
    <div class="row">
      <div class="col-10 offset-1">
       <med-button-call :link="link"> <slot/> </med-button-call>
      </div>
    </div>  
  </div>
</template>

<script>
import MedButtonCall from './MedButtonCall.vue'
export default {
  name: 'CenteredButtonCall',
  components: {
    MedButtonCall
  },
  props: {
        link: {
            type: String,
            required: true,
        },
    },
}
</script>
