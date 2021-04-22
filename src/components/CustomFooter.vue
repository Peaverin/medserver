<template>
    <footer class="footer">
      <div class="container">
        <span>MedServer cutre footer de prova</span>
      </div>
    </footer>
</template>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: var(--main-color);
  color: var(--main-color-darkest);
}
</style>

<script>
export default {
  name: 'CustomFooter'
}
</script>