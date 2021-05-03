<style scoped>
.footer {
  height: auto;
  line-height: 60px;
  background-color: var(--main-color);
  color: var(--main-color-darkest);
  display: block;
  text-align: center;
}
</style>

<template>
    <footer class ="navbar fixed-bottom footer">
        <div v-if="$route.meta.wizard === true">
          <wizard/>
            
        </div>
        <div v-else>
          <p>Preguntes freqüents | Contacte | Qui Som? | Termes i condicions</p>
        </div>
        
    </footer>
</template>

<script>
import Wizard from './Wizard.vue'
export default{
  components: {Wizard},
  name: 'CustomFooter'
}
</script>
