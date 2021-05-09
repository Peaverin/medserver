<template>
  <div class="menuUserInfo">

    <h3>El meu compte</h3>

    <div class="dropdown-divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-9">
          <li class="label">Nom</li>
          <li class="info">{{nameUser}}</li>
          <li class="label">Correu</li>
          <li class="info">{{emailUser}}</li> 
        </div>
        <div class="col-3" style="text-align:center;">
          <button class="editbutton" @click="changeName">Edita</button>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-9">
          <li class="label">Contrassenya</li>
          <li class="info">**********</li>
        </div>
        <div class="col-3" style="text-align:center;">
          <button class="editbutton" @click="changePassword">Edita</button>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-9">
          <li class="label">Adreça</li>
          <li class="info">{{defaultAddress}}</li>
        </div>
        <div class="col-3" style="text-align:center;">
          <button class="editbutton" @click="changeAdress">Edita</button>
        </div>
      </div>
    </div>

    <div class="dropdown-divider"></div>
    <div class="col" style="text-align:center;">
      <button class="logout" @click="logout">Tanca la sessió</button>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
export default {
  name: 'UserInfoPage',
  components: {
  },
  methods: {
    changeName () {
      alert("Dialog emulating change name and email");
    },
    changePassword () {
      alert("Dialog emulating change password");
    },
    changeAdress () {
      alert("Dialog emulating change adress");
    },
    logout () {
      alert("Dialog emulating logging out");
    },    
  },
  computed: {
    nameUser () {
      return globalStore.nameUser
    },
    emailUser () {
      return globalStore.emailUser
    },
    defaultAddress () {
      return globalStore.defaultAddress
    }
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
}

li {
  list-style: none;
  align-items: baseline;
  text-align: left;
}
  
.label {
    font-size:14px;
    font-weight: 600;
    color: var(--main-color-darkest);
}

.info {
  font-size:14px;
  font-weight: 300;
  color: black;
}

.editbutton {
  font-size:14px;
  font-weight: 600;
  color: var(--accent-color-1-darkest);
  background-color: var(--accent-color-1-lighter);
  border-radius: 10px;
  border-color: var(--accent-color-1-lightest);
  padding: 0px 5px 0px 5px;
}

.logout {
  justify-content: center;
  text-align: center;
  font-size:14px;
  font-weight: 600;
  color: var(--accent-color-2-darkest);
  background-color: var(--accent-color-2-lighter);
  border-color: var(--accent-color-2-lightest);
  border-radius: 10px;
  padding: 5px 5px 5px 5px;
  margin: 5px 50px 5px 50px;
}

.col-9 {
  width: 230px;
}
  
</style>