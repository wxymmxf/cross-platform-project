<template>
  <div>
    <h1>商品列表</h1>
    <ProductList :products="products" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductList from '~/components/ProductList.vue'

const products = ref([
  { id: 1, name: '商品1', price: 100 },
  { id: 2, name: '商品2', price: 200 },
  { id: 3, name: '商品3', price: 300 }
])
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
