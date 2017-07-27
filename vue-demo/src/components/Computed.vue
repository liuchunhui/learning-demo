<template>
  <div class="computed">
    <h1>计算属性</h1>
      <h2>计算属性</h2>
        <p>原始字符串：{{msg}}</p>
        <p>计算属性反转字符串：{{reversedMsg}}</p>
        <br />
        <p>设置set、get的计算属性：{{fullName}}</p>
        <button @click="setName">计算属性测试set</button>
        <br />
        <br />
      <h2>watch</h2>
        <input v-model="num">
        <p>watch检测结果：{{text}}</p>
  </div>
</template>
<script>
  export default {
    name: 'computed',
    data () {
      return {
        msg: 'Hello World',
        firstName: 'Foo',
        lastName: 'Bar',
        num: 0,
        text: ''
      }
    },
    computed: {  // 计算属性
      reversedMsg () {
        return this.msg.split('').reverse().join('')
      },
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    watch: {  // watch
      num (newVal, oldVal) {
        this.text = `新值为：${newVal}，旧值为：${oldVal}`
      }
    },
    methods: {
      setName () {
        this.fullName = 'John Doe'
      }
    }
  }
</script>
<style>

</style>
