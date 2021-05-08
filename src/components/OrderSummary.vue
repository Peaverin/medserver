<template>
  <b-container class="order-summary">
    <h1 class="mb-5">Resum de la teva comanda</h1>
    <div class="col-6">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <b-row align-h="center">
      <b-col>
        <med-button link='/choosePaymentMethod'>ENRERE</med-button>
      </b-col>
      <b-col>
        <med-button link='/orderFinished'>CONFIRMAR COMANDA</med-button>
      </b-col>
    </b-row>
  </b-container>
  
</template>

<script>
import {globalStore} from '../main.js'
import MedButton from './MedButton.vue'
export default {
  name: 'OrderSummary',
  components: {
    MedButton,
  },
  data () {
    return {
      totalPrice: 0
    }
  },
  computed: {
    finalAddress() {
      return globalStore.finalAddress
    },
    dateTime() {
      return globalStore.dateTime
    },
    paymentMethod() {
      return globalStore.paymentMethod
    },
    purchasedProducts() {
      return globalStore.purchasedProducts
    }
  },
  created () {
    this.totalPrice = 0.01;
    var i;
    for (i in this.purchasedProducts) {
      this.totalPrice += this.purchasedProducts[i].quantity*this.purchasedProducts[i].price;
    }
  }

}
</script>

<style scoped>

.cart {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 15px;
  background-color: var(--main-color-lightest);
  box-shadow: 15px 15px 30px 0px rgba(0,0,0,0.07), -15px -15px 30px 0px rgba(255,255,255,0.8);
  padding: 0px;
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
  border-radius: 30px;
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
  padding: 5%;
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
  padding: 3.3%;
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
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  font-size: 14px;
}

.cart__table td.cart__total {
  padding: 3.5%;
  padding-left: 20px;
  padding-top: 30px;
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
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
}

.cart__table tbody tr {
  border-bottom: 1px solid white;
}

.cart__table tbody tr:nth-of-type(odd) {
  background-color: white;
}

.cart__table tbody tr:last-of-type {
  background-color: var(--main-color-lightest);
  border-bottom: none;
}

</style>