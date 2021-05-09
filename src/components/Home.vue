<template>
  <div class="home">
    <img src='./../assets/logo1.png' style="height:15vh; max-height:200px"/>
    <h1 style="font-size: 60px">MedServer</h1>
    <h2>Medicaments a domicili</h2>
    <centered-button-call link="products">Nova Comanda</centered-button-call>
    <centered-button link="chat">Consulta amb un farmacèutic</centered-button>
    <div v-if="!loggedIn">
      <centered-button link="login">Iniciar Sessió</centered-button>
      <centered-button link="register">Registrar-se</centered-button>
    </div>

  </div>
  
</template>

<script>
import CenteredButton from './CenteredButton.vue'
import CenteredButtonCall from './CenteredButtonCall.vue'
import {globalStore} from '../main.js'
export default {
  name: 'Home',
  components: {
    CenteredButton,
    CenteredButtonCall
  },
    computed: {
    loggedIn: function () {
      // `this` points to the vm instance
      return globalStore.loggedIn
    }
  },
  mounted(){
        globalStore.modifyOrder = false
  }
}
</script>


<style scoped>

.home {
  margin-top: 70px;
  vertical-align: center;
}

h2 {
  margin-bottom: 40px;
}


  
</style>
