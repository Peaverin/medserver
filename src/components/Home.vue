<template>
  <div>
    <img src='./../assets/logo.jpeg' style="width:15%; min-width:100px"/>
    <h1>Medserver</h1>
    <h2>Medicaments a domicili</h2>
    <centered-button link="products">Nova Comanda</centered-button>
    <centered-button link="chat">Consulta amb un farmacèutic</centered-button>
    <div v-if="!loggedIn">
      <centered-button link="login">Iniciar Sessió</centered-button>
      <centered-button link="register">Registrar-se</centered-button>
    </div>

  </div>
  
</template>

<script>
import CenteredButton from './CenteredButton.vue'
import {globalStore} from '../main.js'
export default {
  name: 'Home',
  components: {
    CenteredButton
  },
    computed: {
    loggedIn: function () {
      // `this` points to the vm instance
      return globalStore.loggedIn
    }
  }
}
</script>

<!-- Add "s
    CenteredButtoncoped" attribute to limit CSS to this component only -->
