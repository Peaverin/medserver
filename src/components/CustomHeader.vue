<template>
    <header>
        <div class="container-fluid">
            <b-row v-if="loggedIn">
                <span class="title col-sm-4 px-5" @click="$router.push('/')">MedServer</span>
                <div class="options col-sm pl-5">
                    <b-dropdown size="sm"  variant="transparent" toggle-class="text-decoration-none" boundary="scrollParent" no-caret>
                        <template #button-content>
                        <span class="option mr" id="compte">El meu compte</span>
                        </template>
                        <user-info-page/>
                    </b-dropdown>
                    <span class="option ml">Les meves comandes</span>
                </div>
            </b-row>
            <div class="row" v-else>
                <span class="title col-sm-4" @click="$router.push('/')">MedServer</span>
                <div class="options col-sm pl-5">
                        <span class="option mr" id="compte"  @click="$router.push('/login')" > Iniciar Sessió</span>

                    <span class="option ml" @click="$router.push('/register')">Registrar-se</span>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
  height: auto; /* Set the fixed height of the footer here */
  background-color: var(--main-color);
  z-index: 5;
}

.title {
    font-size: 3rem;
    margin-top: 0.5rem;
    align-self: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: var(--main-color-darker);
    cursor: pointer;
}

.options {
    align-self: center;
    margin: 10px;
}

.mr {
  margin-right: 1rem;
}

.ml {
  margin-left: 1rem;
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
  components: { UserInfoPage },
  name: 'CustomHeader',
      computed: {
    loggedIn: function () {
      // `this` points to the vm instance
      return globalStore.loggedIn
    }
  }
}
</script>

