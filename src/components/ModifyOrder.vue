<template>
  <b-container class="order-summary">
    <h1 class="p-4 section__title">Resum de la teva comanda amb codi 9Rp4BJjPsoRLov3w</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="cart">
          <div class="table-responsive">
            <table class="cart__table">
              <thead>
              <tr>
                <th class="cart__name">Nom</th>
                <th>Quantitat</th>
                <th>Preu</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody v-if="purchasedProducts.length > 0">
              <tr v-for="product in purchasedProducts" :key="product.name">
                <td class="cart__name">{{ product.name }}</td>
                <td>
                  <div class="cart__quantity">
                    <div class="quantity">{{ product.quantity }}</div>
                  </div>
                </td>
                <td>
                  <span class="cart__price">{{ product.price.toFixed(2) }}€</span>
                </td>
                <td>
                  <span class="cart__price">{{ (product.price * product.quantity).toFixed(2) }}€</span>
                </td>
              </tr>
              <tr>
                <td class="cart__total">
                  <p>Total a pagar:</p>
                </td>
                <td></td>
                <td></td>
                <td class="cart__total"><span>{{ totalPrice.toFixed(2) }}€</span></td>
              </tr>
              <tr class="modify__purchase">
                <td class="modify__purchase" colspan="4">
                  <med-button link='/products'>Canviar productes</med-button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="details-order">
          <div class="table-responsive">
            <table class="details__table">
              <thead>
              <tr>
                <th colspan="3">Detalls de la comanda</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="details__title">Quan?</td>
                <td>
                  <div class="details__info">{{ dateTime }}</div>
                </td>
                <td>
                  <med-button class="details__button" link='/chooseDateTime'>Canviar</med-button>
                </td>
              </tr>
              <tr>
                <td class="details__title">On?</td>
                <td>
                  <div class="details__info">{{ finalAddress }}</div>
                </td>
                <td>
                  <med-button class="details__button" link='/chooseDestination'>Canviar</med-button>
                </td>
              </tr>
              <tr>
                <td class="details__title">Com?</td>
                <td>
                  <div class="details__info">{{ paymentMethod }}</div>
                </td>
                <td>
                  <med-button class="details__button" link='/choosePaymentMethod'>Canviar</med-button>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-buttons">
      <div class="col-sm-4">
        <med-button link='/orderHistory'>ENRERE</med-button>
      </div>
      <div class="col-sm-4">
        <button class="ctrbtn" id="calltoaction" @click="modifyOrder">MODIFICAR COMANDA</button>
      </div>
      <div class="col-sm-4">
        <button class="ctrbtn" id="calltodelete" @click="deleteOrder">ANULAR COMANDA</button>
      </div>
    </div>
  </b-container>

</template>

<script>
import {globalStore} from '../main.js'
import MedButton from './MedButton.vue'
export default {
  name: 'ModifyOrder',
  components: {
    MedButton,
  },
  data () {
    return {
      totalPrice: 0,
      finalAddress: "C/ Abat Bassa 132, 2n 3a, 08017, Barcelona",
      dateTime: "Dimecres 12 de maig a les 08:30",
      paymentMethod: "Targeta de crèdit acabada en 1234",
      purchasedProducts: [
        { link: "enantyum.png", name: "Enantyum 25mg", price: 5.99, quantity: 1 },
        { link: "gel.jpeg", name: "Gel Hidroalcohòlic", price: 3.85, quantity: 2 },
        { link: "mascaras.jpeg", name: "Pack de 10 Mascaretes", price: 4.90, quantity: 3 },
        { link: "floradix.jpeg", name: "Floradix", price: 25.55, quantity: 2},
      ],
    }
  },
  computed: {
  },
  created () {
    this.totalPrice = 0;
    var i;
    for (i in this.purchasedProducts) {
      this.totalPrice += this.purchasedProducts[i].quantity*this.purchasedProducts[i].price;
    }
    globalStore.purchasedProducts = this.purchasedProducts
    globalStore.dateTime = this.dateTime
    globalStore.finalAddress = this.finalAddress
    globalStore.paymentMethod = this.paymentMethod
    globalStore.modifyOrder  = true
  },
  methods: {
    modifyOrder () {
      alert("Comanda modificada correctament!");
      this.$router.push('/orderHistory');
    },
    deleteOrder () {
      alert("Comanda anulada correctament!");
      this.$router.push('/orderHistory');
    }
  }

}
</script>

<style scoped>

.order-summary {
  margin-top: 30px;
}

.cart {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: var(--main-color-lightest);
  box-shadow: 15px 15px 30px 0px rgba(0,0,0,0.07), -15px -15px 30px 0px rgba(255,255,255,0.8);
  padding: 0px;
  margin: 10px;
  width: auto;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.cart__table {
  width: 100%;
  min-width: 400px;
  justify-content: center;
}

.cart__table th {
  font-size: 20px;
  color: rgba(20,20,20,0.9);
  line-height: 100%;
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
  padding: 3.5%;
}

.cart__table th.cart__name {
  text-align: left;
}

thead {
  display: table-header-group;
  vertical-align: middle;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  padding: 3%;
}

.cart__total {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}

tr {
  display: table-row;
  vertical-align: inherit;
  padding: 4%;
}

.cart__table td {
  font-size: 16px;
  font-weight: 400;
  color: #373737;
  padding: 3%;
}

.cart__name {
  text-align: left;
  max-width: 180px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.cart__quantity {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px;
}

.quantity {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
}

.cart__price {
  font-weight: 500;
  font-size: 14px;
}

.cart__table td.cart__total {
  padding: 3.5%;
  padding-left: 20px;
  padding-top: 20px;
}

.cart__table td.cart__total p {
  font-size: 20px;
  margin-bottom: 10px;
}

.cart__total p {
  color: #373737;
  margin-bottom: 0px;
  text-align: left;
}

.cart__total span {
  font-size: 24px;
  color: #373737;
  line-height: 100%;
  font-weight: 600;
  text-align: center;
  padding-right: 10px;
}

.cart__table tbody tr:nth-of-type(odd) {
  background-color: white;
}

.cart__table tbody tr:last-of-type {
  background-color: var(--main-color-lightest);
  border-bottom: none;
}

.cart__table td.modify__purchase {
  padding-top: 10px;
  padding-bottom: 0px;
}

.details-order {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: var(--main-color-lightest);
  box-shadow: 15px 15px 30px 0px rgba(0,0,0,0.07), -15px -15px 30px 0px rgba(255,255,255,0.8);
  padding: 0px;
  margin: 10px;
  width: auto;
}

.details__table {
  width: 100%;
  min-width: 400px;
  justify-content: center;
}

.details__table tbody tr:nth-of-type(odd) {
  background-color: white;
}

.details__table th {
  font-size: 20px;
  color: rgba(20,20,20,0.9);
  line-height: 100%;
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
  padding: 3.5%;
}

.details__title {
  font-size: 16px;
  color: rgba(20,20,20,0.9);
  font-weight: bold;
  text-align: left;
  padding-left: 20px;
}

.details__info {
  font-size: 15px;
  color: rgba(20,20,20,0.9);
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.details__button {
  padding-left: 5px;
  padding-right: 10px;
}

</style>