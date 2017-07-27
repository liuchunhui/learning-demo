<template>
  <div class="conditional">
    <h1>条件渲染</h1>
    <p v-if="ok">ok为true</p>
    <p v-else>ok为false</p>

    <template v-if="ok">
      <h4>Title</h4>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else>
      不是A和B
    </div>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="loginType = loginType === 'username' ? 'email' : 'username'">切换登录方式</button>

    <div v-show="ok">
      v-show 不支持 template 语法，也不支持 v-else
    </div>
  </div>
</template>
<script>
  export default {
    name: 'conditional',
    data () {
      return {
        ok: true,
        type: 'C',
        loginType: 'username'
      }
    }
  }
</script>
<style>

</style>

