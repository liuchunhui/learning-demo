import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Syntax from '@/components/Syntax'
import Computed from '@/components/Computed'
import ClassStyle from '@/components/ClassStyle'
import Conditional from '@/components/Conditional'
import List from '@/components/List'
import Event from '@/components/Event'
import Forms from '@/components/Forms'
import Components from '@/components/Components'
import Transitions from '@/components/Transitions'
import CustomDirective from '@/components/CustomDirective'
import Mixins from '@/components/Mixins'
import Routing from '@/components/Routing'
import Plugins from '@/components/Plugins'
import StateManagement from '@/components/StateManagement'
import Reactivity from '@/components/Reactivity'
import RenderFunction from '@/components/RenderFunction'

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
