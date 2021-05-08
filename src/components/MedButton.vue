<template>
    <div>
       <button class='ctrbtn' @click="$router.push(link)" :disabled="disabled"> <slot/> </button>
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
      disabled: {
          type: Boolean,
      }
    },
}
</script>

<style>
  .ctrbtn {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    background: #fff;
    border: 2px solid var(--main-color);
    border-radius: 10px;
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

  .ctrbtn:disabled {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    background: #fff;
    border: 2px solid grey;
    border-radius: 10px;
    color: var(--main-color-darkest);
    background-color: gray;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    pointer-events: none;

  }
</style>
