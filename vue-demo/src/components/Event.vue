<template>
  <div class="event">
    <h1>事件处理器</h1>

      <h2>监听事件</h2>
        <div id="example-1">
          <button v-on:click="counter += 1">增加 1</button>
          <p>这个按钮被点击了 {{ counter }} 次。</p>
        </div>
        <br />

      <h2>方法事件处理器</h2>
        <button v-on:click="greet($event)">Greet</button>
        <br />

      <h2>内联处理器方法</h2>
        <button v-on:click="say('Hi')">Say Hi</button>
        <br />

      <h2>事件修饰符</h2>
        <div v-on:click.self.once="doThis" style="border: solid 1px #0b97c4; padding: 20px; width: 100px">
          <div style="border: solid 1px #66CC44">子元素，测试事件修饰符</div>
        </div>
        <br />

      <h2>按键修饰符</h2>
        <input v-on:keyup.enter="submit">
        <input @keyup.alt.67="submit">
        <div style="width: 100px; border: solid 1px #440044; margin-top: 20px" @click.ctrl="submit">Do something</div>
        <br />
  </div>
</template>
<script>
  export default {
    name: 'event',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      greet (event) {
        console.log('点击的原生dom事件：', event)
        alert('Hello World')
      },
      say (message) {
        alert(message)
      },
      doThis () {
        alert('父元素的事件修饰符')
      },
      submit () {
        alert('按键修饰符')
      }
    }
  }
</script>
<style>

</style>
