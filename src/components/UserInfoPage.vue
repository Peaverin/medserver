<template>
      <div class="vertical-center">
            <h1>El meu compte</h1>
            <div class="col-4 offset-4 lowerbtn">
                <centered-button>Registrar-se</centered-button>
            </div>
      </div>
</template>

<script>
import CenteredButton from './CenteredButton.vue'
export default {
  name: 'UserInfoPage',
  components: {
    CenteredButton
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
  

</style>