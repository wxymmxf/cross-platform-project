<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductItem from '~/components/ProductItem.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
</style>
