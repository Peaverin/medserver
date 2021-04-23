<template>
    <header>
        <div class="container-fluid p-0">
            <div class="row">
                <!--<img class="col-sm-2" alt="Vue logo" src="../assets/logo.jpeg">-->
                <span class="title col-sm-2">MedServer</span>
                <div class="options col-sm">
                    <span class="option">EL MEU COMPTE</span>
                    <span class="option">LES MEVES COMANDES</span>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
header {
  position: absolute;
  top: 0;
  width: 100%;
  height: auto; /* Set the fixed height of the footer here */
  background-color: rgb(124, 230, 124);

}

.title {
    font-size: 3rem;
    padding: 10px;
    align-self: center;
}

.options {
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
}
.option {
    margin: 5px;
    border-radius: 5px;
    transition: all 0.5s ease;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    font-weight: bold;
}
.option:hover {
    background-color: white;
    transform: scale(1.1);
}

</style>

<script>
export default {
  name: 'CustomHeader'
}
</script>