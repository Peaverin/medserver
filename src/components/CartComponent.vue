<template>
    <div class="container">
        <div class="col-12">
            <h2 class="section__title">La teva cistella</h2>
        </div>
        <div class="col-12">
            <div class="cart">
                <div class="table-responsive">
                    <table class="cart__table">
                        <thead>
                            <tr>
                                <th>Producte</th>
                                <th>Nom</th>
                                <th>Quantitat</th>
                                <th>Preu</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody v-if="products.length > 0">
                            <tr v-for="product in products" :key="product.name">
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
                                        <button type="button" v-on:click="increaseQuantity(product)">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="cart__price">{{ product.price }}€</span>
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
                                    <span>{{ total }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="botons">
                <button class="btn cart-btn" v-on:click="$emit('hide-cart', products)">
                    Tornar
                </button>
                <button class="btn cart-btn btn-continuar">
                    Continuar
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            total: 0
        }
    },
    name: 'CartComponent',
    props: {
        products: {
            type: Array,
            Required: true
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
            this.$emit('increase-num-prod-in-cart')
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
            this.$emit('decrease-num-prod-in-cart', 1)
        },
        deleteProduct: function (product) {
            this.$emit('decrease-num-prod-in-cart', product.quantity)
            this.products = this.products.filter(prod => {
                if (prod.name === product.name) {
                    return false
                }
                return true
            })
        }
    }
}
</script>


<style scoped>

.section__title {
    font-family: 'Spartan', sans-serif;
    font-weight: 600;
    color: #373737;
    font-size: 32px;
    line-height: 100%;
    margin-bottom: 0;
}

.botons {
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
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
    min-height: 404px;
    width: auto;
}
.table-responsive {
    display: block;
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
    font-weight: 600;
    color: rgba(55,55,55,0.7);
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
    font-family: 'Spartan', sans-serif;
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

.btn-continuar {
    background: #20c997;
}

.cart-btn:hover {
  transform: scale(1.1);
  transition: all 0.5s ease;
  background-color: #186058;
  color: white;
}

.del-btn {
  background-color: var(--accent-color-2-light);
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
    font: 400 13.3333px Arial;
}

.cart__table td.cart__total {
    padding: 3.5%;
    padding-left: 60px;
    padding-top: 30px;
}

.cart__table td.cart__total p {
    font-size: 20px;
    margin-bottom: 15px;
}

.cart__total p {
    font-size: 14px;
    color: #373737;
    margin-bottom: 0px;
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
