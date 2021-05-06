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
                            <tr v-for="product in products" :key="product">
                                <td>
                                    <div class="cart__img"><img :src="require('../assets/' + product.link + '')" alt=""></div>
                                </td>
                                <td>{{ product.name }}</td>
                                <td>
                                    <div class="cart__quantity">
                                        <button type="button">
                                            -
                                        </button>
                                        <div class="quantity">{{ product.quantity }}</div>
                                        <button type="button">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="cart__price">{{ product.price }}€</span>
                                </td>
                                <td>
                                    <span class="cart__price">{{ product.price * product.quantity }}€</span>
                                </td>
                                <td>
                                    <button class="btn cart-btn del-btn" v-on:click="deleteProduct(show)">
                                        Eliminar producte
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="cart__info">
                    <div class="cart__total">
                        <p>Total a pagar:</p>
                        <span>{{ total }}</span>
                    </div>
                </div>
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
    font-size: 26px;
    font-weight: 600;
    color: rgba(55,55,55,0.7);
    line-height: 100%;
    padding: 10px 90px 30px 20px;
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
    padding: 5%;
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
    padding: 3.5%;
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

.cart__total {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

.styled-table {
  border-collapse: collapse;
  margin: auto;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-size: 1.5em;
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.cart__table tbody tr {
  border-bottom: 1px solid white;
}

.cart__table tbody tr:nth-of-type(even) {
  background-color: white;
}

table {
    margin-right: 0;
    width: 100%;
}


</style>
