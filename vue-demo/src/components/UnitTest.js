import Vue from 'vue'
import UnitTesting from 'UnitTesting'

// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('UnitTesting', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof UnitTesting.created).toBe('function')
  })
  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof UnitTesting.data).toBe('function')
    const defaultData = UnitTesting.data()
    expect(defaultData.message).toBe('hello!')
  })
  // 检查mount中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(UnitTesting).$mount()
    expect(vm.message).toBe('bye!')
  })
  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Ctor = Vue.extend(UnitTesting)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
  it('render correctly with different props', () => {
    expect(getRenderedText(UnitTesting, {
      msg: 'Hello'
    })).toBe('Hello')
    expect(getRenderedText(UnitTesting, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})
