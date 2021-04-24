<template>
    <div class="parent-container">
        <custom-header/>
        <product-grid-component/>
    </div>
</template>

<script>
import CustomHeader from './CustomHeader.vue'
import ProductGridComponent from './ProductGridComponent.vue'
export default {
  components: { CustomHeader, ProductGridComponent },
  name: 'MainComponent'
}
</script>

<style scoped>
    .parent-container {
        position: relative;
    }
</style>