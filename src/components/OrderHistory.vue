<template>
  <b-container class="order-history">
    <h1 v-if="oldOrdersBoolean" class="mb-5 section__title">Historial de comandes antigues</h1>
    <h1 v-else class="mb-5 section__title">Historial de comandes actuals</h1>
    <div class="row">
      <div class="col-md-8 canvi-comandes">
        <button v-if="oldOrdersBoolean" @click="seeCurrentOrders" class="ctrbtn">Veure comandes actuals</button>
        <button v-else @click="seeOldOrders" class="ctrbtn">Veure comandes antigues</button>
      </div>
      <div class="col-md-4 search">
        <autocomplete
            :search="search"
            placeholder="Buscar una comanda"
            aria-label="Buscar un producte"
        ></autocomplete>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="cart">
          <div class="table-responsive">
            <table class="cart__table">
              <thead>
              <tr v-if="oldOrdersBoolean">
                <th class="order__code">Codi</th>
                <th class="order__date">Data realització</th>
                <th class="order__date">Data d'entrega</th>
                <th class="order__state">Estat</th>
                <th class="order__details">Detalls</th>
              </tr>
              <tr v-else>
                <th class="order__code">Codi</th>
                <th class="order__date">Data realització</th>
                <th class="order__date">Entrega prevista</th>
                <th class="order__state">Estat</th>
                <th class="order__details">Detalls</th>
              </tr>
              </thead>
              <tbody v-if="oldOrdersBoolean">
              <tr v-for="order in oldOrders" :key="order.code">
                <td class="order__code">{{ order.code }}</td>
                <td class="order__date">{{ order.dateTimePurchase }}</td>
                <td class="order__date">{{ order.dateTimeDelivery }}</td>
                <td class="order__state">{{ order.state }}</td>
                <td class="order__details"><med-button link='/seeOrder'>VEURE</med-button></td>
              </tr>
              </tbody>
              <tbody v-else>
              <tr v-for="order in currentOrders" :key="order.code">
                <td class="order__code">{{ order.code }}</td>
                <td class="order__date">{{ order.dateTimePurchase }}</td>
                <td class="order__date">{{ order.dateTimeDelivery }}</td>
                <td class="order__state">{{ order.state }}</td>
                <td class="order__details"><med-button link='/modifyOrder'>VEURE</med-button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-buttons">
      <div class="col-12">
        <med-button link='/products'>FER NOVA COMANDA</med-button>
      </div>
    </div>
  </b-container>

</template>

<script>
import MedButton from './MedButton.vue'
export default {
  name: 'OrderHistory',
  components: {
    MedButton,
  },
  data () {
    return {
      oldOrders: [
        { code: "9Rp4BJjPsoRLov3w", dateTimePurchase: "03/01/2021 19:33", dateTimeDelivery: "04/01/2021 09:37", state: "Entregada" },
        { code: "Ca4x47OgijGDv6Rj", dateTimePurchase: "14/02/2021 12:48", dateTimeDelivery: "14/02/2021 13:56", state: "Entregada" },
        { code: "PZKXILBOx9GFhWbB", dateTimePurchase: "29/03/2021 07:21", dateTimeDelivery: "29/03/2021 09:06", state: "Entregada" },
        { code: "2LBGgptTbWvyJ6jQ", dateTimePurchase: "17/04/2021 16:26", dateTimeDelivery: "19/04/2021 17:17", state: "Entregada" },
        { code: "GdRsWzQRTfroP7Ik", dateTimePurchase: "19/04/2021 21:12", dateTimeDelivery: "20/04/2021 11:02", state: "Entregada" },
      ],
      currentOrders: [
        { code: "Qm8a6fQizPjFfoCY", dateTimePurchase: "08/05/2021 14:14", dateTimeDelivery: "10/05/2021 09:00", state: "En curs" },
        { code: "9YlB1Qs0t7VVo8Yp", dateTimePurchase: "09/05/2021 23:28", dateTimeDelivery: "10/05/2021 09:00", state: "En curs" },
      ],
      oldOrdersBoolean: false
    }
  },
  created () {},
  methods: {
    seeCurrentOrders () {
      this.oldOrdersBoolean = false;
    },
    seeOldOrders () {
      this.oldOrdersBoolean = true;
    },
    search () {

    }
  }

}
</script>

<style scoped>

.canvi-comandes {
  text-align: left;
  padding-left: 30px;
}

.search {
  text-align: left;
  padding-right: 30px;
  padding-left: 30px;
  min-width: 300px;
}

.ctrbtn {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: 2px solid var(--main-color);
  border-radius: 10px;
  color: var(--main-color-darkest);
  background-color: var(--main-color);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  color: black;
  width: 350px;
}

.order-history {
  margin-top: 40px;
}

.cart {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: var(--main-color-lightest);
  box-shadow: 15px 15px 30px 0px rgba(0,0,0,0.07);
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
  padding: 1.5%;
}

.cart__table th.order__code {
  text-align: left;
  padding-left: 40px;
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

tr {
  display: table-row;
  vertical-align: center;
  padding: 3%;
}

.cart__table td {
  font-size: 16px;
  font-weight: 400;
  color: #373737;
  padding: 1%;
}

.order__code {
  text-align: left;
  max-width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 220px;
}

.order__date {
  text-align: center;
  max-width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 220px;
}

.order__state {
  text-align: center;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 150px;
}

.order__details {
  text-align: center;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 150px;
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