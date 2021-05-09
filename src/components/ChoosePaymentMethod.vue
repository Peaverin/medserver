<template>
  <div class="container">
    <h1 class="p-4 section__title">Com?</h1>
    <p class="p-3">Tria com vols pagar la comanda</p>
    <div class="accordion" role="tablist">
      <div class="card">
        <b-card no-body class="mb-1" @click="select(1)">
          <b-card-header header-tag="header" class="p-1 card-header" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info" class="btn-light">
              <div class="d-flex align-items-center justify-content-between">
                <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30">
              </div>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel" @click="select(1)">
            <b-card-body>
              <input type="text" class="form-control" placeholder="Paypal email" v-model="email">
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1" @click="select(2)">
          <b-card-header header-tag="header" class="p-1 card-header" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info" class="btn-light">
              <div class="d-flex align-items-center justify-content-between">
                <span>Targeta de crèdit</span>
              <div class="icons"> <img src="https://i.imgur.com/2ISgYja.png" width="30"> <img src="https://i.imgur.com/W1vtnOV.png" width="30"> <img src="https://i.imgur.com/35tC99g.png" width="30"> <img src="https://i.imgur.com/2ISgYja.png" width="30"> </div>
            </div></b-button>
          </b-card-header>
          <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
            <b-card-body class="payment-card-body">
              <span class="font-weight-normal card-text d-flex align-items-center justify-content-between">Número de targeta</span>
              <b-input-group>
                <b-input-group-prepend>
                  <span class="input-group-text"><i class="fa fa-credit-card"></i></span>
                </b-input-group-prepend>
                <b-form-input type="text" class="LoginInput form-control" size="lg" placeholder="0000 0000 0000 0000" v-model="numTarja">
                </b-form-input>
              </b-input-group>
              <div class="row mt-3 mb-3">
                <div class="col-md-6"> <span class="font-weight-normal card-text d-flex align-items-center justify-content-between">Data de caducitat</span>
                  <b-input-group>
                    <b-input-group-prepend>
                      <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                    </b-input-group-prepend>
                    <b-form-input type="text" class="LoginInput form-control" size="lg" placeholder="MM/AA" v-model="data">
                    </b-form-input>
                  </b-input-group>
                </div>
                <div class="col-md-6"> <span class="font-weight-normal card-text d-flex align-items-center justify-content-between">CVC/CVV</span>
                  <b-input-group>
                    <b-input-group-prepend>
                      <span class="input-group-text"><i class="fa fa-lock"></i></span>
                    </b-input-group-prepend>
                    <b-form-input type="text" class="LoginInput form-control" size="lg" placeholder="000" v-model="codi">
                    </b-form-input>
                  </b-input-group>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="text-left mb-1" @click="select(3)">
          <b-card-header header-tag="header" class="p-1 card-header" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info" class="btn-light"><div class="d-flex align-items-center justify-content-between"> <span>Contra reemborsament</span><img src="https://bedzzle.tips/wp-content/uploads/2017/04/Metodo-di-conferma-prenotazione-Pagamento-in-loco-Hotel.png" width="30"></div></b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text><strong>Contra reemborsament (cobrament al lliurament):<br>També acceptem targetes de Crèdit / Dèbit en el moment del lliurament, segons la disponibilitat
                del dispositiu de pagament.<br>Consulteu amb l’agent de lliurament.</strong></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
    <b-row class="row-buttons" align-h="center">
      <b-col>
        <med-button link='/chooseDestination'>ENRERE</med-button>
      </b-col>
      <b-col>
        <med-button-call link='/orderSummary' :disabled="isDisable">REALITZAR PAGAMENT</med-button-call>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import MedButton from './MedButton.vue'
import MedButtonCall from './MedButtonCall.vue'
export default {
  name: "ChoosePaymentMethod",
  components: {
    MedButton,
    MedButtonCall
  },
  data () {
    return {
      selected: 0,
      email: "",
      numTarja: "",
      data: "",
      codi: ""
    }
  },
  updated () {
    console.log(this.selected)
  },
  methods: {
    select (id) {
      this.selected = id;
      console.log(this.selected)
      console.log(globalStore.paymentMethod)
    }
  },
  computed: {
    isDisable () {
      if (this.selected === 3) {
        globalStore.paymentMethod = "Contra reemborsament";
        return false;
      } else if ((this.selected === 1) && (this.email.length > 0)) {
        globalStore.paymentMethod = "Paypal: " + this.email;
        return false;
      } else if ((this.selected === 2) && (this.numTarja.length > 0) && (this.data.length > 0) && (this.codi.length > 0)) {
        globalStore.paymentMethod = "Targeta de crèdit acabada en " + this.numTarja.slice(Math.max(this.numTarja.length - 4, 0));
        return false;
      }
      return true;
    },
  }
}
</script>

<style scoped>

.row-buttons {
  margin-top: 15px;
}

body {
  background-color: #f5eee7;
  font-weight: 300
}

.mb-1 .input-group-text {
  width: 48px;
  border-right: none;
  background-color: #ffffff;
}

.mb-1 [class^="fa-"], [class*=" fa-"] {
  display: inline-block;
  width: 100%;
}

.card {
  border: none
}

.card-header {
  padding: .5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, .03);
  border-bottom: none
}

.btn-light:focus {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, .5)
}

.form-control {
  height: 50px;
  border: 2px solid #eee;
  border-radius: 6px;
  font-size: 14px
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #039be5;
  outline: 0;
  box-shadow: none
}

.input {
  position: relative
}

.input i {
  position: absolute;
  top: 16px;
  left: 11px;
  color: #989898
}

.input input {
  text-indent: 25px
}

.card-text {
  margin: 10px;
  margin-left: 6px
}

.certificate-text {
  font-size: 12px
}

.payment-card-body {
  flex: 1 1 auto;
  padding: 24px 1rem !important
}
</style>
