<script>
export default {
  name: 'CustomHeader'
}
</script>

<style scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
  height: auto; /* Set the fixed height of the footer here */
  background-color: var(--main-color);
  z-index: 5;
}

.title {
    font-size: 4vw;
    margin-top: 0.5rem;
    align-self: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: var(--main-color-darker);
}

.options {
    align-self: center;
    margin: 10px;
}
.option {
    margin: 5px;
    border-radius: 5px;
    transition: all 0.5s ease;
    margin: 1rem;
    padding:0.5rem;
    font-size: 2vw;
    color: var(--main-color-darker);
}
.option:hover {
    background-color: white;
    transform: scale(1.1);
}

</style>

<template>
    <header>
        <div class="container-fluid p-0">
            <div class="row">
                <span class="title col-sm-4">MedServer</span>
                <div class="options col-sm">
                    <span class="option">EL MEU COMPTE</span>
                    <span class="option">LES MEVES COMANDES</span>
                </div>
            </div>
        </div>
    </header>
</template>