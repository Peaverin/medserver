<style scoped>
    .header__cart {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 52px;
        width: 52px;
        border-radius: 30px;
        background-color: #f0f0f0;
        box-shadow: 8px 8px 20px 0px rgba(0,0,0,0.06), -8px -8px 20px 0px #fff;
        transition: 0.6s;
        color: #373737;
        margin-left: auto;
    }
    .header__cart:hover {
        background-color: var(--main-color);
        transform: scale(1.1);
        transition: all 0.8s ease;
    }
    .num_items_cart {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 26px;
        width: 26px;
        border-radius: 15px;
        background-color: #ffcccc;
        box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.06), -4px -4px 10px 0px #fff;
        transition: 0.6s;
        color: #373737;
        top: -20px;
        left: -10px;
    }
    .header__cart svg {
        stroke: #373737;
        width: 24px;
        height: auto;
        transition: 0.6s;
    }
    .header__cart span {
        display: none;
        font-size: 14px;
        margin-left: 10px;
    }
    .section_title {
        font-family: 'Spartan', sans-serif;
        font-weight: 600;
        color: #373737;
        font-size: 26px;
        line-height: 100%;
        margin-bottom: 0;
    }
    .section__title {
        font-size: 32px;
    }
    html {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    ::selection {
        background: #fff;
        color: #373737;
        text-shadow: none;
    }
    .section__sort {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 15px;
    }
    .section__sort button.active {
        border-color: #0f4c81;
        cursor: default;
    }
    .section__sort button {
        margin-top: 15px;
        margin-right: 30px;
        font-size: 16px;
        color: #373737;
        border-bottom: 3px dotted transparent;
    }
    button {
        appearance: auto;
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: -internal-light-dark(black, white);
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
        box-sizing: border-box;
        margin: 0em;
        font: 400 13.3333px Arial;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        border-image: initial;
        padding: 0;
        border: none;
        background-color: transparent;
        transition: 0.6s;
        cursor: pointer;
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
    .header__content {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
    }
    .row--grid .col-12 {
        transition: 0.6s;
    }
    h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    .product__price {
        position: relative;
        z-index: 2;
        color: rgba(55,55,55,0.8);
        line-height: 100%;
        font-size: 14px;
        font-family: 'Spartan', sans-serif;
        font-weight: 500;
    }
    .grid-view {
        margin-top: 22%;
        margin-bottom: 10%;
    }
</style>

<template>
    <div class="grid-view">
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__content">
                        <autocomplete :search="search"></autocomplete>
                        <a href="#" class="header__cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span>Cart</span>
                        </a>
                        <div class="num_items_cart" v-if="added_product" v-on:incr-num-items="onIncrNumItems">
                            <span> {{ num_items }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section id="catalog" class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="section__title">Catàleg</h2>
                <div class="section__sort"><button type="button" class="active">All</button> <button type="button" class="">Beauty</button> <button type="button" class="">Food</button> <button type="button" class="">Shopping</button> <button type="button" class="">Travel</button></div>
            </div>
        </div>
        <div class="row row--grid">
            <product-card-component 
                v-for="product in products" :key="product" 
                v-bind:link="product.link" 
                v-bind:name="product.name"
                v-bind:price="product.price">
            </product-card-component>
        </div>
    </div>
    </section>
</div>
</template>

<script>
import ProductCardComponent from './ProductCardComponent.vue'
export default {
  components: { ProductCardComponent },
  data () {
    return {
        num_items: 0,
        added_product: false,
        products: [
            { link: "enantyum.png", name: "Enantyum 25mg", price: "5,99€" },
            { link: "gel.jpeg", name: "Gel Hidroalcohòlic", price: "3,85€" },
            { link: "mascaras.jpeg", name: "Pack de 10 Mascaretes", price: "4,90€" },
            { link: "test.jpeg", name: "Kit de test covid", price: "25€" },
            { link: "vitaminas.png", name: "Vitamines", price: "15€" },
        ]
    }
  },
  methods: {
    addItem () {
        if (this.num_items == 0) {
            this.added_product = true
        }
        this.num_items += 1
    },
    onIncrNumItems: function () {
        this.addItem()
    }
  }
}
</script>
