<template>
  <div class="class-style">
    <h1>Class 与 Style 绑定</h1>
      <h2>绑定HTML Class</h2>
        <h3>对象语法</h3>
          <div class="demo" v-bind:class="{active: isActive}">测试div</div>
          <input type="radio" id="true" v-bind:value="true" v-model="isActive">
          <label for="true">显示</label>
          <input type="radio" id="false" v-bind:value="false" v-model="isActive">
          <label for="false">去除</label>
          <br />

        <h3>数组语法</h3>
          <div class="demo" v-bind:class="['active']"></div>
          <div v-bind:class="[ true ? 'active' : '', 'demo']"></div>
          <br />

      <h2>绑定内联样式</h2>
        <h3>对象与法</h3>
          <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">内敛样式-对象与法</div>
          <div v-bind:style="styleObject">内敛样式-对象与法</div>
          <br />

        <h3>数组语法</h3>
          <div v-bind:style="[styleObject]">内敛样式-数组语法</div>
          <br />

        <h3>多重值</h3>
          <div :style="{ display: ['-ms-flexbox', '-webkit-box']}">内敛样式-多重值</div>
  </div>
</template>
<script>
  export default {
    name: 'ClassStyle',
    data () {
      return {
        isActive: true,
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    },
    methods: {

    }
  }
</script>
<style>
  .demo {
    height: 15px;
    width: 50px;
    margin: 3px;
    border: solid 1px transparent;
  }
  .active {
    border: solid 1px #0b97c4;
  }
</style>
