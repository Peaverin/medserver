<template>
  <div>
    <img src='./../assets/logo.jpeg' style="width:15%; min-width:100px"/>
    <h1>Medserver</h1>
    <h2>Medicaments a domicili</h2>
    <centered-button link="products">Nova Comanda</centered-button>
    <centered-button>Consulta amb un farmacèutic</centered-button>
    <div class="row">
      <div class="col-4 offset-4 lowerbtn">
        <med-button link="login">Iniciar Sessió</med-button>
      </div>
    </div>
    <div class="row">
      <div class="col-4 offset-4 lowerbtn">
        <med-button link="register">Registrar-se</med-button>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import CenteredButton from './CenteredButton.vue'
import MedButton from './MedButton.vue'
export default {
  name: 'Home',
  components: {
    CenteredButton,
    MedButton
  }
}
</script>

<!-- Add "s
    CenteredButtoncoped" attribute to limit CSS to this component only -->
