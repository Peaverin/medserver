<style scoped>
    .product {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        height: 300px;
        margin-top: 30px;
        border-radius: 8px;
        background-color: var(--main-color-lightest);
        box-shadow: 15px 15px 30px 0px rgba(14,32,37,0.2), -15px -15px 30px 0px rgba(255,255,255,0.8);
        padding: 30px;
        cursor: pointer;
    }
    .product:hover {
        transform: scale(1.1);
        transition: all 0.8s ease;
    }
    .product__img {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-color: transparent;
        border-radius: 5px;
        margin-bottom: auto;
        overflow: hidden;
        background-color: white;
    }
    .product__img img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
    .product__title {
        position: relative;
        z-index: 2;
        color: #373737;
        font-weight: 600;
        line-height: 140%;
        margin-bottom: 15px;
        font-size: 16px;
        padding-right: 50px;
    }
    .product__add {
        position: absolute;
        z-index: 3;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        right: 30px;
        bottom: 30px;
        width: 52px;
        height: 52px;
        line-height: 52px;
        border-radius: 50%;
        box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.1), -4px -4px 10px 0px rgba(255,255,255,0.9);
        background-color: white;
        transition: 0.6s;
    }
    .product__add svg {
        stroke: var(--main-color-darker);
        width: 28px;
        height: auto;
        position: relative;
        z-index: 2;
        transition: 0.6s;
        transform: rotate(0deg);
    }
    .product__add:hover {
        background-color: var(--main-color);
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
        border-style: solid;
        border-width: thin;
        border-color: var(--main-color-darkest);
    }
    .product__add:hover svg {
        transform: rotate(180deg);
        stroke: white;
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
        z-index: 2;
        color: var(--main-color-darkest);
        line-height: 100%;
        font-size: 15px;
        font-weight: 500;
    }
</style>

<template>
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="product">
        <div class="product__img"><img :src="require('../assets/' + link + '')" alt=""></div>
            <h3 class="product__title">{{ name }}</h3>
            <span class="product__price">{{ price }}</span> 
            <button type="button" class="product__add" v-on:click="incrNumItems">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                    <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill: none; stroke-miterlimit: 10; stroke-width: 32px;"></path>
                    <line x1="256" y1="176" x2="256" y2="336" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"></line>
                    <line x1="336" y1="256" x2="176" y2="256" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"></line>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCardComponent',
    props: {
        link: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true
        }
    },
    methods: {
        incrNumItems() {
            this.$emit('incr-num-items');
        }
    }
}
</script>