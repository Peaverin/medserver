<template>

  <div id="app">
    <transition name="fade">
     <custom-header v-if="$route.meta.header === true"></custom-header>
    </transition>
      <router-view/>
    <custom-footer/>
  </div>
</template>

<script>
import CustomFooter from './components/CustomFooter.vue'
import CustomHeader from './components/CustomHeader.vue'
export default {
  components: { CustomFooter, CustomHeader},
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}
.fade-enter-active, .fade-leave-active, .routrans-enter-active, .routrans-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to, .routrans-enter, .routrans-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
