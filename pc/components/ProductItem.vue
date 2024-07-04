<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>价格: {{ product.price }}</p>
    <NuxtLink :to="`/products/${product.id}`">查看详情</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
h2 {
  color: #333;
}
</style>
