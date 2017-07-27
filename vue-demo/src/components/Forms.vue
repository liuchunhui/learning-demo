<template>
  <div class="forms">
    <h1>表单控件绑定</h1>
      <h2>文本</h2>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
        <br />
      <h2>多行文本</h2>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
        <br />

      <h2>复选框</h2>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <br />

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br />
        <span>Checked names: {{ checkedNames }}</span>
        <br />

      <h2>单选按钮 </h2>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br />
        <span>Picked：{{picked}}</span>
        <br />

      <h2>选择列表</h2>
        <select v-model="selected">
          <option value="a">A</option>
          <option value="b">B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
        <br />
        <br />
        <select v-model="mulSelected" multiple>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>MulSelected: {{ mulSelected }}</span>
        <br />
      <h2>绑定value</h2>
        <input
          type="checkbox"
          v-model="toggle"
          v-bind:true-value="trueValue"
          v-bind:false-value="falseValue"
        >
        <span>Toggle: {{ toggle }}</span>
        <br />

      <h2>修饰符</h2>
        <input v-model.lazy="msg">
        <span>Msg: {{ msg }}</span>
        <br />
        <input v-model.number="num" type="number">
        <span>Num: {{ num }}</span>
        <br />
        <input v-model.trim="msg">
        <span>Msg: {{ msg }}</span>
  </div>
</template>
<script>
  export default {
    name: 'forms',
    data () {
      return {
        message: '',
        checked: true,
        checkedNames: [],
        picked: 'One',
        selected: 'a',
        mulSelected: [],
        toggle: '',
        trueValue: 'yes',
        falseValue: 'no',
        msg: '',
        num: 0
      }
    }
  }
</script>
<style>

</style>
