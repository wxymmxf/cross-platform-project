<template>
  <view>
    <page-head title="view"></page-head>
    <div>
      <SharedButton @click="loadData"></SharedButton>
      <div v-if="data">
        <h2>共享数据:</h2>
        <div>{{ data }}</div>
      </div>
    </div>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-hello-text">
        Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。当设置display: flex后，继续给view等容器组件设置flex-direction:
        row或column，就可以在该容器内按行或列排布子组件。uni-app推荐使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。
      </view>

      <view class="uni-title uni-common-mt">
        flex-direction: row
        <text>\n横向布局</text>
      </view>
      <view class="uni-flex uni-row">
        <view class="flex-item uni-bg-red">A</view>
        <view class="flex-item uni-bg-green">B</view>
        <view class="flex-item uni-bg-blue">C</view>
      </view>

      <view class="uni-title uni-common-mt">
        flex-direction: column
        <text>\n纵向布局</text>
      </view>
      <view class="uni-flex uni-column">
        <view class="flex-item flex-item-V uni-bg-red">A</view>
        <view class="flex-item flex-item-V uni-bg-green">B</view>
        <view class="flex-item flex-item-V uni-bg-blue">C</view>
      </view>

      <view class="uni-title uni-common-mt">
        更多布局示例
        <text>\nflex布局演示</text>
      </view>
      <view>
        <view class="text">纵向布局-自动宽度</view>
        <view class="text" style="width: 300rpx;">纵向布局-固定宽度</view>
        <view class="uni-flex uni-row">
          <view class="text">横向布局-自动宽度</view>
          <view class="text">横向布局-自动宽度</view>
        </view>
        <view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
          <view class="text">横向布局-居中</view>
          <view class="text">横向布局-居中</view>
        </view>
        <view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
          <view class="text">横向布局-居右</view>
          <view class="text">横向布局-居右</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="text" style="-webkit-flex: 1;flex: 1;">横向布局-平均分布</view>
          <view class="text" style="-webkit-flex: 1;flex: 1;">横向布局-平均分布</view>
        </view>
        <view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
          <view class="text">横向布局-两端对齐</view>
          <view class="text">横向布局-两端对齐</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="text" style="width: 200rpx;">固定宽度</view>
          <view class="text" style="-webkit-flex: 1;flex: 1;">自动占满余量</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="text" style="width: 200rpx;">固定宽度</view>
          <view class="text" style="-webkit-flex: 1;flex: 1;">自动占满</view>
          <view class="text" style="width: 200rpx;">固定宽度</view>
        </view>
        <view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;">
          <view class="text" style="width: 280rpx;">一行显示不全,wrap折行</view>
          <view class="text" style="width: 280rpx;">一行显示不全,wrap折行</view>
          <view class="text" style="width: 280rpx;">一行显示不全,wrap折行</view>
        </view>
        <view class="uni-flex uni-row">
          <view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-start;align-items: flex-start;">
            <text>垂直居顶</text>
          </view>
          <view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
            <text>垂直居中</text>
          </view>
          <view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-end;align-items: flex-end;">
            <text>垂直居底</text>
          </view>
        </view>
      </view>

      <view class="uni-title uni-common-mt">
        组合示例
        <text>\nflex布局演示</text>
      </view>
      <view class="uni-flex uni-row">
        <view class="text uni-flex" style="width: 200rpx;height: 220rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
          <image src="../../../static/plus.png" style="width: 150rpx;height: 150rpx;"></image>
        </view>
        <view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
          <view class="text" style="height: 120rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">
            文字居左，留出左间距
          </view>
          <view class="uni-flex uni-row">
            <view class="text" style="-webkit-flex: 1;flex: 1;">剩余数量</view>
            <view class="text" style="-webkit-flex: 1;flex: 1;">立即购买</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import SharedButton from 'shared/components/Button.vue'
import { fetchData } from 'shared/utils/api'
export default {
  data() {
    return {
      data: null
    }
  },
  components: {
    SharedButton
  },
  methods: {
    loadData() {
      console.log('加载数据')
      fetchData('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => {
            this.data = response
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
    }
  }
}
</script>

<style>
.flex-item {
  width: 33.3%;
  height: 200rpx;
  text-align: center;
  line-height: 200rpx;
}

.flex-item-V {
  width: 100%;
  height: 150rpx;
  text-align: center;
  line-height: 150rpx;
}

.text {
  margin: 15rpx 10rpx;
  padding: 0 20rpx;
  background-color: #ebebeb;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;
  color: #777;
  font-size: 26rpx;
}

.desc {
  /* text-indent: 40rpx; */
}
.flex-pc {
  display: flex;
  justify-content: center;
}
</style>
