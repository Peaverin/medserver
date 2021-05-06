<script>
import UserInfoPage from './UserInfoPage.vue'
export default {
  components: { UserInfoPage },
  name: 'CustomHeader'
}
</script>

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
}

.options {
    align-self: center;
    margin: 10px;
}
.option {
    margin: 5px;
    border-radius: 5px;
    transition: all 0.5s ease;
    margin: 1rem;
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

<template>
    <header>
        <div class="container-fluid">
          <b-row>
            <b-col>
              <span class="title col-sm-4 px-5" @click="$router.push('/')">MedServer</span>
          </b-col>
            <b-col>
              <div class="options col-sm">
                <b-dropdown size="sm"  variant="transparent" toggle-class="text-decoration-none" boundary="scrollParent" no-caret>
                  <template #button-content>
                    <span class="option" id="compte">El meu compte</span>
                  </template>
                  <user-info-page/>
                </b-dropdown>
                <span class="option">Les meves comandes</span>
              </div>
            </b-col>
            </b-row>
        </div>
    </header>
</template>
