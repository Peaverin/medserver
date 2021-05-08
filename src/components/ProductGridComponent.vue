<template>
    <div class="grid-view">
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__content">
                            <autocomplete 
                                :search="search"
                                placeholder="Buscar un producte"
                                aria-label="Buscar un producte"
                                @submit="handleSubmit"
                                v-if="is_showing_cart === false"
                            ></autocomplete>
                            <button href="#" class="header__cart" @click="is_showing_cart = true" v-if="is_showing_cart === false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <span>Cart</span>
                            </button>
                            <div class="num_items_cart" v-if="num_items > 0 && is_showing_cart === false">
                                <span> {{ num_items }} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <cart-component 
            v-if="is_showing_cart === true" 
            v-on:hide-cart="onHideCart">
        </cart-component>
        <section id="catalog" class="section" v-else>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="section__title">Catàleg</h2>
                        <div class="section__sort">
                            <button type="button" :class="categories['tots']" v-on:click="changeCategory('tots')">Tots els productes</button> 
                            <button type="button" :class="categories['medicaments']" v-on:click="changeCategory('medicaments')">Medicaments</button> 
                            <button type="button" :class="categories['parafarmacia']" v-on:click="changeCategory('parafarmacia')">Parafarmàcia</button> 
                            <button type="button" :class="categories['bebes']" v-on:click="changeCategory('bebes')">Bebès</button> 
                            <button type="button" :class="categories['complements']" v-on:click="changeCategory('complements')">Complements alimentaris</button></div>
                    </div>
                </div>
                <div class="row boto-comanda" v-if="this.num_items > 0">
                    <button type="button" class="comanda" v-bind:style="{display: 'block'}" @click="is_showing_cart=true" >REALITZAR COMANDA</button>
                </div>
                <div class="row row--grid" v-if="active_cat==='search'">
                    <product-card-component 
                        v-for="product in prod_search" :key="product.name" 
                        v-bind:link="product.link" 
                        v-bind:name="product.name"
                        v-bind:price="(product.price.toFixed(2)).toString()"
                        v-on:incr-num-items="addItem(product)">
                    </product-card-component>
                </div>
                <div class="row row--grid" v-if="active_cat==='tots'">
                    <product-card-component 
                        v-for="product in products" :key="product.name" 
                        v-bind:link="product.link" 
                        v-bind:name="product.name"
                        v-bind:price="(product.price.toFixed(2)).toString()"
                        v-on:incr-num-items="addItem(product)">
                    </product-card-component>
                </div>
                <div class="row row--grid" v-if="active_cat==='medicaments'">
                    <product-card-component 
                        v-for="prod_medicament in prod_medicaments" :key="prod_medicament.name" 
                        v-bind:link="prod_medicament.link" 
                        v-bind:name="prod_medicament.name"
                        v-bind:price="(prod_medicament.price.toFixed(2)).toString()"
                        v-on:incr-num-items="addItem(product)">
                    </product-card-component>
                </div>
                <div class="row row--grid" v-if="active_cat==='parafarmacia'">
                    <product-card-component 
                        v-for="product in prod_parafarmacia" :key="product.name" 
                        v-bind:link="product.link" 
                        v-bind:name="product.name"
                        v-bind:price="(product.price.toFixed(2)).toString()"
                        v-on:incr-num-items="addItem(product)">
                    </product-card-component>
                </div>
                <div class="row row--grid" v-if="active_cat==='bebes'">
                    <product-card-component 
                        v-for="product in prod_bebes" :key="product.name" 
                        v-bind:link="product.link" 
                        v-bind:name="product.name"
                        v-bind:price="(product.price.toFixed(2)).toString()"
                        v-on:incr-num-items="addItem(product)">
                    </product-card-component>
                </div>
                <div class="row row--grid" v-if="active_cat==='complements'">
                    <product-card-component 
                        v-for="product in prod_compl" :key="product.name" 
                        v-bind:link="product.link" 
                        v-bind:name="product.name"
                        v-bind:price="(product.price.toFixed(2)).toString()"
                        v-on:incr-num-items="addItem(product)">
                    </product-card-component>
                </div>
            </div>
        </section>
    </div>
</template>

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
        background-color: white;
        box-shadow: 8px 8px 20px 0px rgba(0,0,0,0.06), -8px -8px 20px 0px #fff;
        transition: 0.6s;
        margin-left: auto;
        border-style: solid;
        border-width: 3px;
        border-color: var(--main-color-dark);
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
        background-color: var(--accent-color-2-lightest);
        box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.06), -4px -4px 10px 0px #fff;
        transition: 0.6s;
        color: #373737;
        top: -20px;
        left: -10px;
    }
    .header__cart svg {
        stroke: var(--main-color-dark);
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
        color: var(--main-color-darkest);
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
        font-weight: bold;
        color: var(--main-color-darkest);
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
    .grid-view {
        padding-block-end: 50px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    @keyframes button-appear {
        from {background-color: white;}
        to {background-color: var(--accent-color-1-dark);}
    }
    .comanda {
        animation-name: button-appear;
        animation-duration: 1s;
        position: fixed;
        bottom: 110px;
        background-color: var(--accent-color-1-dark);
        border-color: var(--accent-color-1-lighter);
        border-radius: 20px;
        width: 220px;
        height: 60px;
        z-index: 6;
        font-size: 1rem;
        display: none;
        border-style: solid;
        border-width: 1px;
        color: black;
        font-weight: 600;
    }
    .comanda:hover {
        transform: scale(1);
        background-color: var(--accent-color-1-darkest);
        color: white;
        border-color:var(--accent-color-1-darkest);
    }
    .boto-comanda {
        justify-content: center;
    }
</style>

<script>
import {globalStore} from '../main.js'
import CartComponent from './CartComponent.vue'
import ProductCardComponent from './ProductCardComponent.vue'
export default {
  components: { ProductCardComponent, CartComponent },
  mounted() {
    globalStore;
  },
  created () {
      this.updateNumberItems();
  },
  data () {
    return {
        num_items: 0,
        products: [
            { link: "enantyum.png", name: "Enantyum 25mg", price: 5.99 },
            { link: "gel.jpeg", name: "Gel Hidroalcohòlic", price: 3.85 },
            { link: "mascaras.jpeg", name: "Pack de 10 Mascaretes", price: 4.90 },
            { link: "test.jpeg", name: "Kit de test covid", price: 25 },
            { link: "vitaminas.png", name: "Vitamines", price: 15 },
            { link: "asacol.jpeg", name: "Asacol", price: 20},
            { link: "couldina.jpeg", name: "Couldina", price: 10},
            { link: "aspirina.jpeg", name: "Aspirina", price: 6},
            { link: "gelocatil.jpeg", name: "Gelocatil 1g", price: 5.5},
            { link: "talquistina.jpeg", name: "Talquistina", price: 6},
            { link: "isdin.jpeg", name: "Champu Isdin bebes", price: 12.99},
            { link: "floradix.jpeg", name: "Floradix", price: 25.55},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 2", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 3", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 4", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 5", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 6", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 7", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 8", price: 12.99}
        ],
        prod_medicaments: [
            { link: "enantyum.png", name: "Enantyum 25mg", price: 5.99 },
            { link: "asacol.jpeg", name: "Asacol", price: 20},
            { link: "couldina.jpeg", name: "Couldina", price: 10},
            { link: "aspirina.jpeg", name: "Aspirina", price: 6},
            { link: "gelocatil.jpeg", name: "Gelocatil 1g", price: 5.5}
        ],
        prod_parafarmacia: [
            { link: "gel.jpeg", name: "Gel Hidroalcohòlic", price: 3.85 },
            { link: "mascaras.jpeg", name: "Pack de 10 Mascaretes", price: 4.90 },
            { link: "test.jpeg", name: "Kit de test covid", price: 25 },
            { link: "talquistina.jpeg", name: "Talquistina", price: 6},
            { link: "isdin.jpeg", name: "Champu Isdin bebes", price: 12.99}
        ],
        prod_bebes: [
            { link: "talquistina.jpeg", name: "Talquistina", price: 6},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 1", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 2", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 3", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 4", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 5", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 6", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 7", price: 12.99},
            { link: "isdin.jpeg", name: "Champu Isdin bebes 8", price: 12.99}
        ],
        prod_compl: [
            { link: "vitaminas.png", name: "Vitamines", price: 15 },
            { link: "floradix.jpeg", name: "Floradix", price: 25.55}
        ],
        prod_search: [],
        categories: {
            "tots": "active",
            "medicaments": "",
            "parafarmacia": "",
            "bebes": "",
            "complements": ""
        },
        active_cat: "tots",
        is_showing_cart: false
    }
  },
  methods: {
    addItem: function (product) {
        var found = false;
        for(var i = 0; i < globalStore.purchasedProducts.length; i++) {
            if (globalStore.purchasedProducts[i].name == product.name) {
                globalStore.purchasedProducts[i].quantity += 1;
                found = true;
                break;
            }
        }
        if (!found) {
            product.quantity = 1
            globalStore.purchasedProducts.push(product)
        }
        this.num_items += 1
    },
    onUpdateProdInCart: function (products) {
        globalStore.purchasedProducts = products
        this.updateNumberItems()
    },
    changeCategory: function (cat) {
        this.categories[this.active_cat] = "";
        this.categories[cat] = "active";
        this.active_cat = cat;
    },
    search(input) {
        if (input.length < 1) { return [] }
        var product_names = this.products.map(function(product) {
            return product["name"]
        })
        return product_names.filter(product => {
            return product.toLowerCase().startsWith(input.toLowerCase())
        })
    },
    handleSubmit(result) {
        if (result.length < 1) { return }
        this.prod_search = this.products.filter(product => {
            return product["name"].toLowerCase().startsWith(result.toLowerCase())
        })
        this.categories[this.active_cat] = "";
        this.active_cat = "search"
    },
    onHideCart: function (products) {
        this.is_showing_cart = false
        globalStore.purchasedProducts = products
        this.updateNumberItems()
    },
    updateNumberItems () {
        this.num_items = 0;
        for (let i = 0; i < globalStore.purchasedProducts.length; i++) {
            this.num_items += globalStore.purchasedProducts[i].quantity
        }
    }
  }
}
</script>
