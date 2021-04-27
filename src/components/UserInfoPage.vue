<template>
  <div>

    <h3>El meu compte</h3>

    <div class="dropdown-divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <li class="label">Nom</li>
          <li class="info">Pepet</li>
          <li class="label">Correu</li>
          <li class="info">ppp@gmail.com</li> 
        </div>
        <div class="col-sm-3">
          <li class="editbutton">Edita</li>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <li class="label">Contrassenya</li>
          <li class="info">**********</li>
        </div>
        <div class="col-sm-3">
          <li class="editbutton">Edita</li>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <li class="label">Adreça</li>
          <li class="info">C/ Abat Bassa 132, 2n 3a, 08017, Barcelona</li>
        </div>
        <div class="col-sm-3">
          <li class="editbutton">Edita</li>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>

    <b-dropdown-item href="#">Tanca la sessió</b-dropdown-item>

  </div>
</template>

<script>
export default {
  name: 'UserInfoPage',
  components: {
  }
}
</script>

<style scoped>

.container{
  width: 300px;
}

h3 {
  text-align: center;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.align-center{
  align-content: center;
}

.center{
  margin-left:70px;
}

.vertical-center{
  margin-top:8em;
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

li {
  list-style: none;
  align-items: baseline;
  text-align: left;
}
  
.label {
    font-size:14px;
    font-weight: 600;
}

.info {
    font-size:14px;
    font-weight: 300;
}
  
</style>