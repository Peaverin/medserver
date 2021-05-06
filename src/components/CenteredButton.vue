<template>
<div class="container">
    <div class="row">
      <div class="col-10 offset-1">
       <med-button :link="link"> <slot/> </med-button>
      </div>
    </div>  
  </div>
</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: 'Menuutton',
  components: {
    MedButton
  },
  props: {
        link: {
            type: String,
            required: true,
        },
    },
}
</script>
