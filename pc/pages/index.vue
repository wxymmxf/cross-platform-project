<template>
  <div>
    <h1>欢迎来到商城首页(PC端)</h1>
    <NuxtLink to="/products">查看所有商品</NuxtLink>
    <div><SharedButton @click="loadData"/></div>
    <div v-if="data">
      <h2>共享数据:</h2>
      <div>{{ data }}</div>
    </div>
  </div>
</template>

<script setup>
import SharedButton from 'shared/components/Button.vue'
import { fetchData } from 'shared/utils/api'

const data = ref(null)

async function loadData() {
  try {
    data.value = await fetchData('https://jsonplaceholder.typicode.com/posts/1')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

</script>

<style scoped>
h1 {
  color: #333;
}
</style>
