<template>
      <div class="vertical-center">
        <div class="inner-block">
          <div class="vue-tempalte">
        <form>
            <h3 class="section__title">Registre</h3>

            <div class="form-group">
                <label>Correu electrònic</label>
                <input type="email" class="form-control form-control-lg" placeholder="exemple@gmail.com"/>
                <small id="emailHelp" class="form-text text-muted">Mai compartirem el vostre correu electrònic amb ningú.</small>
            </div>

            <div class="form-group">
                <label>Contrasenya</label>
                <input type="password" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Repeteix la contrasenya</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <div class="center">
                <med-button link="/products">Registrar-se</med-button>
            </div>

            <p>
                Si ja tens compte, <router-link to="/login">Inicia sessió</router-link>
            </p>
        </form>
    </div>
        </div>
      </div>

</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: 'RegisterForm',
  components: {
    MedButton
  }
}
</script>

<style scoped>
.align-center{
    align-content: center;
}

.center{
    margin-left:70px;
}


.navbar-light {
    background-color: #ffffff;

  }

.vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;
  }

.inner-block {
    width: 450px;
    margin: auto;
    background: #ffffff;

    padding: 40px 55px 45px 55px;

    transition: all .3s;
  }

.vertical-center .form-control:focus {
    border-color: #2554FF;
    box-shadow: none;
  }

  .vertical-center h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  label {
    font-size:20px;
    font-weight: 500;
  }


</style>
