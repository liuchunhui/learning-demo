<template>
  <div class="state-management">
    <h1>状态管理</h1>
    <button v-on:click="changeMessageAct">改变state的message的值</button>
    <vm-A />
    <vm-B />
  </div>
</template>
<script>
  const store = {
//    debug: false,
    state: {
      message: 'Hello World!'
    },
    setMessageAction (newValue) {
//      this.debug && console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },
    clearMessageAction () {
//      this.debug && console.log('clearMessageAction triggered')
      this.state.message = 'clearMessageAction triggered'
    }
  }
  let vmA = {
    template: `<div>vmA： {{data.message}}</div>`,
    data () {
      return {
        data: store.state
      }
    }
  }
  let vmB = {
    template: `<div>vmB： {{data.message}}</div>`,
    data () {
      return {
        data: store.state
      }
    }
  }
  export default {
    name: 'state-management',
    components: {
      vmA,
      vmB
    },
    methods: {
      changeMessageAct () {
        store.setMessageAction('Hello, change')
      }
    }
  }
</script>
<style>

</style>
