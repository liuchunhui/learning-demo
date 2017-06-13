<template>
  <div class="example">
    <h1>模板语法</h1>
      <h2>插值</h2>
        <h3>文本</h3>
          <input v-model="msg">
          <p>文本：{{msg}}</p>
          <p v-once>使用<code>v-once</code>文本不会被改变：{{msg}}</p>
          <br/>

        <h3>纯HTML</h3>
          <div v-html="html"></div>
          <br/>

        <h3>属性</h3>
          <p v-bind:style="style"></p>
          <br/>

        <h3>使用JavaScript表达式</h3>
          {{ ok ? 'YES' : 'NO' }}
          <br/>
          <br/>

      <h2>指令</h2>
        <h3>参数</h3>
          <a v-bind:href="url">指令a标签添加url</a>
          <br />

        <h3>修饰符</h3>
        <br />

      <h2>过滤器</h2>
        {{ text | capitalize }}
        <p v-for="(item, $index) in fruit">
          {{ item | addIndex($index) }}
        </p>

  </div>
</template>
<script>
  export default {
    name: 'example',
    data () {
      return {
        msg: '展示文本内容',
        html: `<span style="width: 10px; height: 10px; display: inline-block; background: #c55b5b"></span>`,
        style: `height: 10px; width: 100px; background: #41b883`,
        ok: true,
        url: 'https://www.baidu.com/',
        text: 'this is message!',
        fruit: [
          'Apple',
          'BANANA',
          'waterMELON'
        ]
      }
    },
    filters: {
      capitalize: function (value) {
        return value.toUpperCase()
      },
      addIndex: function (value, index) {
        return `${index}-${value}`
      }
    }
  }
</script>
<style scoped>
  .example {
    border: solid 1px #cccccc;
  }
</style>
