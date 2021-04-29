<style scoped>
.footer {
  height: auto;
  line-height: 60px;
  background-color: var(--main-color);
  color: var(--main-color-darkest);
  display: block;
  text-align: center;
}
</style>

<template>
    <footer class ="navbar fixed-bottom footer">
        <p>Wizard footer step {{$route.meta.wizardStep}}</p>
    </footer>
</template>

<script>
export default {
  name: 'WizardFooter'
}
</script>
