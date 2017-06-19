import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Syntax from '@/components/Example/vue/Syntax'
import Computed from '@/components/Example/vue/Computed'
import ClassStyle from '@/components/Example/vue/ClassStyle'
import Conditional from '@/components/Example/vue/Conditional'
import List from '@/components/Example/vue/List'
import Event from '@/components/Example/vue/Event'
import Forms from '@/components/Example/vue/Forms'
import Components from '@/components/Example/vue/Components'
import Transitions from '@/components/Example/vue/Transitions'
import CustomDirective from '@/components/Example/vue/CustomDirective'
import Mixins from '@/components/Example/vue/Mixins'
import Routing from '@/components/Example/vue/Routing'
import Plugins from '@/components/Example/vue/Plugins'
import StateManagement from '@/components/Example/vue/StateManagement'
import Reactivity from '@/components/Example/vue/Reactivity'
import RenderFunction from '@/components/Example/vue/RenderFunction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Syntax',
      name: 'Syntax',
      component: Syntax
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/ClassStyle',
      name: 'ClassStyle',
      component: ClassStyle
    },
    {
      path: '/Conditional',
      name: 'Conditional',
      component: Conditional
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Event',
      name: 'Event',
      component: Event
    },
    {
      path: '/Forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/Components',
      name: 'Components',
      component: Components
    },
    {
      path: '/Transitions',
      name: 'Transitions',
      component: Transitions
    },
    {
      path: '/CustomDirective',
      name: 'CustomDirective',
      component: CustomDirective
    },
    {
      path: '/Mixins',
      name: 'Mixins',
      component: Mixins
    },
    {
      path: '/Routing',
      name: 'Routing',
      component: Routing
    },
    {
      path: '/Plugins',
      name: 'Plugins',
      component: Plugins
    },
    {
      path: '/StateManagement',
      name: 'StateManagement',
      component: StateManagement
    },
    {
      path: '/Reactivity',
      name: 'Reactivity',
      component: Reactivity
    },
    {
      path: '/RenderFunction',
      name: 'RenderFunction',
      component: RenderFunction
    }
  ]
})
