<template>
    <div class="container">
        <div class="col-12">
            <h1 class="section__title">La teva cistella</h1>
        </div>
        <div class="col-12">
            <div class="cart" v-if="this.products.length > 0">
                <div class="table-responsive">
                    <table class="cart__table">
                        <thead>
                            <tr>
                                <th>Producte</th>
                                <th>Nom</th>
                                <th>Quantitat</th>
                                <th>Preu</th>
                                <th>Total</th>
                              <th></th>
                            </tr>
                        </thead>
                        <tbody v-if="this.products.length > 0">
                            <tr v-for="product in this.products" :key="product.name">
                                <td class="td__img">
                                    <div class="cart__img"><img :src="require('../assets/' + product.link + '')" alt=""></div>
                                </td>
                                <td>{{ product.name }}</td>
                                <td>
                                    <div class="cart__quantity">
                                        <button type="button" v-on:click="decreaseQuantity(product)">
                                            -
                                        </button>
                                        <div class="quantity">{{ product.quantity }}</div>
                                        <button  type="button" v-on:click="increaseQuantity(product)">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="cart__price">{{ product.price.toFixed(2) }}€</span>
                                </td>
                                <td>
                                    <span class="cart__price">{{ (product.price * product.quantity).toFixed(2) }}€</span>
                                </td>
                                <td>
                                    <button class="btn cart-btn del-btn" v-on:click="deleteProduct(product)">
                                        Eliminar producte
                                    </button>
                                </td>
                            </tr>
                            <tr>
                              <td class="cart__total">
                                <p>Total a pagar:</p>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td class="cart__total"><span>{{ total.toFixed(2) }}€</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cart" v-else>
              <h2 class="section__title">La teva cistella està buida</h2>
            </div>
            <b-row class="botons" align-h="center">
              <b-col>
                <button class="ctrbtn" v-on:click="$emit('hide-cart', products)">
                  ENRERE
                </button>
              </b-col>
              <b-col>
                <button class="ctrbtn" id="calltoaction" @click="$router.push('/requestPicsPrescription')" :disabled="isDisable">
                  CONTINUAR
                </button>
              </b-col>
            </b-row>
        </div>
    </div>
</template>


<script>
import {globalStore} from '../main.js'
export default {
  name: 'CartComponent',
  components: {
  },
    data () {
        return {
            total: 0,
            products: []
        }
    },
    created () {
        this.products = globalStore.purchasedProducts;
        for (let i = 0; i < this.products.length; i++) {
            this.total += this.products[i].quantity * this.products[i].price
        }
    },
    methods: {
        increaseQuantity: function(product) {
            this.products = this.products.filter(prod => {
                if (prod.name === product.name) {
                    prod.quantity += 1
                }
                return true
            })
            this.total += Number(product.price)
            globalStore.purchasedProducts = this.products;
        },
        decreaseQuantity: function(product) {
            if (product.quantity === 1) {
                this.deleteProduct(product)
                return
            }
            this.products = this.products.filter(prod => {
                if (prod.name === product.name) {
                    prod.quantity -= 1
                }
                return true
            })
            globalStore.purchasedProducts = this.products;
        },
        deleteProduct: function (product) {
            if (Math.abs(this.total - (product.quantity*product.price)) < 0.001) {
                this.total = 0
            } else {
                this.total -= Number(product.quantity*product.price)
            }
            this.products = this.products.filter(prod => {
                if (prod.name === product.name) {
                    return false
                }
                return true
            })
            console.log(this.products.length)
            globalStore.purchasedProducts = this.products;
            if (this.products == 0){
                this.$emit('hide-cart', this.products);
            }
        }
    },
  computed: {
      isDisable () {
        return this.products.length === 0
      }
  }
}
</script>


<style scoped>

.botons {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.cart {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border-radius: 30px;
    background-color: var(--main-color-lightest);
    box-shadow: 15px 15px 30px 0px rgba(0,0,0,0.07), -15px -15px 30px 0px rgba(255,255,255,0.8);
    padding: 0px;
    width: auto;
}
.table-responsive {
    display: block;
  border-radius: 30px;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
.cart__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
}

.cart__table {
    width: 100%;
    min-width: 500px;
    justify-content: center;
}

.cart__table th {
  font-size: 23px;
  color: rgba(20,20,20,0.9);
  line-height: 100%;
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
  padding: 3.5%;
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
    justify-content: flex-start;
    align-items: flex-start;
}

tr {
    display: table-row;
    vertical-align: inherit;
    padding: 4%;
}

.cart__img {
    width: 96px;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.cart__img img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    background-color: white;
}

.cart__table td {
    font-size: 16px;
    font-weight: 400;
    color: #373737;
    padding: 3.3%;
}

.cart__table td.td__img {
    padding: 50px;
    display: flex;
    justify-content: center;
}

.cart__quantity {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: inset -3px -3px 6px 0px rgba(255,255,255,0.73), inset 3px 3px 6px 0px rgba(0,0,0,0.08);
    border-radius: 30px;
    padding: 0 5px;
}

.cart__quantity button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    color: rgba(55,55,55,0.6);
    font-size: 20px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
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

.cart-btn {
  background-color: #009879;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5em;
  height: 60px;
  text-align: center;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}



.cart-btn:hover {
  transform: scale(1.1);
  transition: all 0.5s ease;
  background-color: #186058;
  color: white;
}

.del-btn {
  background-color: var(--accent-color-2);
  font-size: 1rem;
  height: 50px;
  border: none;
  border-style: none;
  border-width: 0;
}

.del-btn:hover {
  background-color: var(--accent-color-2-darkest);
}

button {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: center;
}

.cart__table td.cart__total {
    padding: 3.5%;
    padding-left: 60px;
    padding-top: 30px;
}

.cart__table td.cart__total p {
    font-size: 20px;
    margin-bottom: 10px;
}

.cart__total p {
    font-size: 14px;
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

.cart__table tbody tr {
  border-bottom: 0px solid white;
}

.cart__table tbody tr:nth-of-type(odd) {
  background-color: white;
}

.cart__table tbody tr:last-of-type {
  background-color: var(--main-color-lightest);
  border-bottom: none;
}


</style>
