<template>
      <div class="vertical-center">
        <div class="inner-block">
    <div class="vue-tempalte">
        <form>
            <h3>Has oblidat la contrassenya?</h3>
            <p>
                No pateixis, escriu el teu correu electrònic i rebràs instruccions per recuperar-la.
            </p>
            <div class="form-group">
                <label>Correu electrònic</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="center">
                <med-button>Recuperar contrassenya</med-button>
            </div>

        </form>
    </div>
        </div>
      </div>
</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: 'RecoverForm',
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
    margin-left:0px;
}

.vertical-center{
    margin-top:8em;
}
.navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
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
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
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
  
  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7a7a7a;
    margin: 0;
  }
  
  .forgot-password a {
    color: #2554FF;
  }

</style>