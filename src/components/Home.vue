<template>
  <div>
    <img src='./../assets/logo.jpeg' style="width:15%; min-width:100px"/>
    <h1>Medserver</h1>
    <h2>Medicaments a domicili</h2>
    <centered-button link="products">Nova Comanda</centered-button>
    <centered-button link="chat">Consulta amb un farmacèutic</centered-button>
    <centered-button link="login">Iniciar Sessió</centered-button>
    <centered-button link="register">Registrar-se</centered-button>
  </div>
  
</template>

<script>
import CenteredButton from './CenteredButton.vue'

export default {
  name: 'Home',
  components: {
    CenteredButton
  }
}
</script>

<!-- Add "s
    CenteredButtoncoped" attribute to limit CSS to this component only -->
