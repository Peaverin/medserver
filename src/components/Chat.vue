<template>
  <div class="col-12">
    <h2 class="section-title">Xat amb un farmacèutic/a</h2>
<div class="wrapper">


    <div class="main">

        <div class="px-2 scroll" id="scroller">
          <div class="text-center"><span class="between">dilluns 3 de maig de 2021 a les 19:27</span></div>

          <div class="d-flex align-items-center text-right justify-content-end ">
            <div class="pr-2"> <span class="name">{{nameUser}}</span>
              <p class="msg-right text-left">{{missatgeInicial}}</p>
            </div>
            <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-male.png" width="30" class="img1" /></div>
          </div>

          <div class="text-center"><span class="between">dilluns 3 de maig de 2021 a les 20:12</span></div>


            <div class="d-flex align-items-center text-left">
                <div class="text-left pr-1"><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" class="img1" /></div>
                <div class="pr-2 pl-1"> <span class="name">{{nomFarmacia}}</span>
                    <p class="msg-left">{{missatgeFarmacia}}</p>
                </div>
            </div>

          <div class="d-flex align-items-center text-right justify-content-end ">
            <div class="pr-2"> <span class="name">{{nameUser}}</span>
              <p class="msg-right text-left">{{missatgeSecundari}}</p>
            </div>
            <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-male.png" width="30" class="img1" /></div>
          </div>

          <div v-for="(message) in messages" :key="message.id">
            <div v-if="message.visible" class="text-center"><span class="between">{{message.time.lang('ca').format('LLLL')}}</span></div>
          <div class="d-flex align-items-center text-right justify-content-end ">

            <div class="pr-2"> <span class="name">{{nameUser}}</span>
              <p class="msg-right text-left">{{message.message}}</p>
            </div>
            <div class="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-male.png" width="30" class="img1" /></div>
          </div>
          </div>

        </div>
        <nav class="navbar bg-white navbar-expand-sm d-flex justify-content-between"> <input @keyup.enter="sendMessage" v-model="mess" type="text" name="text" class="form-control" placeholder="Escriu un missatge...">
            <div class="icondiv d-flex justify-content-end align-items-center align-content-center text-center ml-2">
              <font-awesome-icon  icon="paperclip" class="icon1" ></font-awesome-icon>
              <font-awesome-icon  icon="arrow-circle-right" class="icon2" @click="sendMessage"></font-awesome-icon>
              </div>
        </nav>
    </div>

</div>
    <div class="row">
        <med-button link='/products'>NOVA COMANDA</med-button>
    </div>
  </div>

</template>

<script>
import {globalStore} from '../main.js'
import moment from 'moment'
import MedButton from './MedButton.vue'
export default {
  name: 'ChatPage',
  components: {
    MedButton
  },
  data () {
    return {
      missatgeInicial: "Hola!\nFa unes hores que m'ha sorit un mussol a l'ull, i fa temps en vaig tenir un i vaig " +
          "utilitzar una pomada que em va anar molt bé. Tot i això no en recordo el nom, però sí que sé que la caixa" +
          "era de color blanc i blau. Quina pomada em recomanarieu per a curar el més ràpid possible el mussol?\n\n" +
          "Moltes gràcies,\nQuim Masset",
      nomFarmacia: "Farmàcia Sant Antoni",
      missatgeFarmacia: "Hola,\nPer a mussols va molt bé una pomada que s'anomena Terracortil, tot i que requereix" +
          " recepta mèdica. No obstant, té també la opció d'usar un esprai que es diu Ocudox, que no necessita" +
          "recepta.\nEspero que li hagi servit d'ajuda!\n\nFarmàcia Sant Antoni",
      missatgeSecundari: "D'acord, Moltíssimes gràcies! Ara mateix demano l'esprai pel web!",
      messages: [],
      mess: '',
    }
  },
  methods: {
    sendMessage () {
      if (this.mess !== '') {
        var visibility = true;
        var now = moment();
        if (this.messages.length > 0) {
          if (now - this.messages[this.messages.length - 1].time < 60*1000){
            visibility = false;
          }
        }
        this.messages.push({
          id: this.messages.length,
          message: this.mess,
          time: now,
          visible: visibility});
        this.mess = '';
      }
    },
  },
  updated() {
    var container = this.$el.querySelector("#scroller");
    container.scrollTop = container.scrollHeight*2;
  },
  computed: {
    nameUser () {
      return globalStore.nameUser
    },
  }

};

</script>

<style scoped>
body {
    background-color: #fff
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #eee
}

::-webkit-scrollbar-thumb {
    background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
  border-radius: 5px;
}

.wrapper {
  margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.main {
    background-color: #eee;
    width: 70%;
    position: relative;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 6px 0px 0px 0px;
}

.section-title {
  font-size: 32px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll {
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 400px;
}

.img1 {
    border-radius: 40%;
    background-color: var(--main-color-lighter);
}

.name {
    font-size: 12px;
  color: #888888;
  padding-right: 5px;
  padding-left: 5px;
}

.msg-left {
  background-color: #fff;
  font-size: 14px;
  padding: 10px;
  margin-right: 40px;
  border-radius: 10px;
  font-weight: 500;
  color: #3e3c3c;
  white-space: pre-wrap;
}

.msg-right {
  background-color: #fff;
  font-size: 14px;
  padding: 10px;
  margin-left: 40px;
  border-radius: 10px;
  font-weight: 500;
  color: #3e3c3c;
  white-space: pre-wrap;
}

.between {
    font-size: 11px;
  font-style: italic;
    font-weight: 500;
    color: #a09e9e
}

.navbar {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

.form-control {
    font-size: 13px;
    font-weight: 400;
    width: 70%;
    height: 30px;
    border: none
}

form-control:focus {
    box-shadow: none;
    overflow: hidden;
    border: none
}

.form-control:focus {
    box-shadow: none !important
}

.icon1 {
    color: var(--main-color-dark) !important;
    font-size: 28px !important;
    cursor: pointer;
}

.icon2 {
  color: var(--accent-color-1-dark) !important;
  background-color: var(--accent-color-1-lightest);
  font-size: 28px !important;
    position: relative;
    left: 8px;
    margin-left: 8px;
    cursor: pointer;
  border-radius: 14px;
}

.icondiv {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    padding: 2px;
    position: relative;
    bottom: 1px
}

.row {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>