<template>
  <div>
    <header>
      <h1>我的商城</h1>
      <nav>
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/products">商品列表</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>版权所有 &copy; 2023 我的商城</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}
nav a {
  margin: 0 1rem;
  color: white;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
main {
  padding: 2rem;
}
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
