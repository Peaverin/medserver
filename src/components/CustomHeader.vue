<template>
   <b-navbar toggleable="lg" class="header" style="background-color:var(--main-color)">
        <b-navbar-brand @click="$router.push('/')" class = "section__title title" >
      <img src="./../assets/logo1.png" style="width:80px; margin-bottom:-10px; margin-top:-10px;" class="d-inline-block" alt="MedServer">
      MedServer
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse" v-if="loggedIn">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav v-if="loggedIn">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <span class="option mr" id="compte">EL MEU COMPTE</span>
            </template>
            <user-info-page/>
          </b-nav-item-dropdown>
          <b-nav-item href="#">
            <span class="option ml">LES MEVES COMANDES</span>
          </b-nav-item>
          <b-nav-item href="#">
            <span class="option ml" @click="$router.push('/chat')">CONSULTA AMB UN FARMACEUTIC</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

  </b-navbar>
</template>

<style scoped>
.header{

}
.title {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--main-color-darker);
    cursor: pointer;
}
.option {
    border-radius: 5px;
    transition: all 0.5s ease;
    padding:0.5rem;
    font-size: 0.99rem;
    color: var(--main-color-darker);
    cursor: pointer;
    font-weight: bold;
}
.option:hover {
    background-color: white;
    transform: scale(1.1);
}
.options span {
  display: inline-block;
}
</style>

<script>
import UserInfoPage from './UserInfoPage.vue'
import {globalStore} from '../main.js'
export default {
  components: {UserInfoPage},
  name: 'CustomHeader',
      computed: {
    loggedIn: function () {
      // `this` points to the vm instance
      return globalStore.loggedIn
    }
  }
}
</script>

