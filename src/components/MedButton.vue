<template>
    <div>
       <button class='ctrbtn' @click="$router.push(link)"> <slot/> </button>
    </div>  
</template>

<script>
export default {
    name: 'MedButton',
    props: {
        link: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
  .ctrbtn {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    background: #fff;
    border: 2px solid var(--main-color);
    border-radius: 3px;
    color: var(--main-color-darkest);
    background-color: var(--main-color);
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    
  }

  .ctrbtn:hover {
    border:2px solid var(--main-color-dark);
    background-color: var(--main-color-dark);
    color: #fff;
  }
</style>