<template>
    <div class="container">
        <div class="col-12">
            <h2 class="section__title">La teva cistella</h2>
        </div>
        <div class="col-12">
            <div class="cart">
                <div class="table-responsive">
                    <div class="cart__table">
                        <thead>
                            <tr>
                                <th>Producte</th>
                                <th>Nom</th>
                                <th>Quantitat</th>
                                <th>Preu</th>
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
                                    <span class="cart__price">{{ product.price * product.quantity }}</span>
                                </td>
                                <td>
                                    <button class="cart__delete">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                                            <line x1="368" y1="368" x2="144" y2="144" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"></line>
                                            <line x1="368" y1="144" x2="144" y2="368" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"></line>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                </div>
                <div class="cart__info">
                    <div class="cart__total">
                        <p>Total:</p>
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
    padding: 30px;
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
    margin-bottom: 15px;
    justify-content: center;
    width: auto;
}

.cart__table th {
    font-size: 16px;
    font-weight: 600;
    color: rgba(55,55,55,0.7);
    line-height: 100%;
    padding: 0 25px 15px 0;
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
}

thead {
    display: table-header-group;
    vertical-align: middle;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
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
}

td {
    display: table-cell;
    vertical-align: inherit;
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
    padding: 15px 25px 15px 0;
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

.cart__delete {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 24px;
    border: none;
    background-color: var(--main-color-lightest);
}

.cart__delete svg {
    stroke: rgba(55,55,55,0.6);
    width: 54px;
    height: auto;
    transition: 0.6s;
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
    margin-bottom: 10px;
}

.cart__total span {
    font-size: 24px;
    color: #373737;
    line-height: 100%;
    font-family: 'Spartan', sans-serif;
    font-weight: 600;
}

</style>
