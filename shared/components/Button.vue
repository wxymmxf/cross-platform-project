<template>
  <view @tap="handleClick" class="button">
    {{ buttonText }}
  </view>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: '加载共享数据'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
}
</style>
