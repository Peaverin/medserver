<template>

  <div id="app" content="user-scalable=0;">
    <div class = "sticky-top" style="background-color: white">
      <custom-header v-if="$route.meta.header === true" ref="cheader"></custom-header>
      <wizard v-if="$route.meta.wizard === true" transition name="fade"></wizard>
    </div>
     
    <!--
    <div ref = "header_margin" style = "height: 80px; "></div>
    -->
    <router-view/>
    
    <custom-footer/>

  </div>
</template>

<script>
import CustomFooter from './components/CustomFooter.vue'
import CustomHeader from './components/CustomHeader.vue'
import Wizard from './components/Wizard.vue'
export default {
  components: {Wizard, CustomFooter, CustomHeader},
  name: 'App',
  mounted() {

  }
}


</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active, .routrans-enter-active, .routrans-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to, .routrans-enter, .routrans-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
