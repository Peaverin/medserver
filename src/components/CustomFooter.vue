<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: auto; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: var(--main-color);
  color: var(--main-color-darkest);
  display: block;
  text-align: center;
}
</style>

<template>
    <div class="footer">
        <p>MedServer cutre footer de prova</p>
    </div>
</template>

<script>
export default {
  name: 'CustomFooter'
}
</script>