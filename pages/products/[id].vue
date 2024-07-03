<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>价格: {{ product.price }}</p>
    <NuxtLink to="/products">返回商品列表</NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({})

onMounted(() => {
  const productId = route.params.id
  // 模拟获取商品数据
  const products = [
    { id: 1, name: '商品1', price: 100 },
    { id: 2, name: '商品2', price: 200 },
    { id: 3, name: '商品3', price: 300 }
  ]
  product.value = products.find(p => p.id == productId) || {}
})
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
