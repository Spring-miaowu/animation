import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import List from '@/components/List'
import Listtext from '@/components/Listtext'
import welcome from '@/components/welcome'
import calendarplus from '@/components/calendarplus'
import SendEmail from '@/components/SendEmail'
import med from '@/components/med'
import Collaborativework from '@/components/Collaborativework'
import Knowledgecommunity from '@/components/Knowledgecommunity'
import Culturalconstruction from '@/components/Culturalconstruction'
import PersonalCenter from '@/components/PersonalCenter'
import Rolemanagement from '@/components/Rolemanagement'
import Rankmanagement from '@/components/Rankmanagement'
import Postmanagement from '@/components/Postmanagement'
import Menumanagement from '@/components/Menumanagement'
import Medmore from '@/components/Medmore'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'/Collaborativework',
          name:'Collaborativework',
          component:Collaborativework
        },
        {
          path:'/Knowledgecommunity',
          name:'Knowledgecommunity',
          component:Knowledgecommunity
        },
        {
          path:'/Culturalconstruction',
          name:'Culturalconstruction',
          component:Culturalconstruction
        },
        {
          path:'/PersonalCenter',
          name:'PersonalCenter',
          component:PersonalCenter
        },
        {
          path:'/List',
          name:'List',
          component:List
        },
        {
          path:'/Listtext',
          name:'Listtext',
          component:Listtext
        },
        {
          path:'/welcome',
          name:'welcome',
          component:welcome
        },
        {
          path:'/Rolemanagement',
          name:'Rolemanagement',
          component:Rolemanagement
        },
        {
          path:'/Rankmanagement',
          name:'Rankmanagement',
          component:Rankmanagement
        },
        {
          path:'/Postmanagement',
          name:'Postmanagement',
          component:Postmanagement
        },
        {
          path:'/Menumanagement',
          name:'Menumanagement',
          component:Menumanagement
        },
        {
          path:'/calendarplus',
          name:'calendarplus',
          component:calendarplus
        },
        {
          path:'/SendEmail',
          name:'SendEmail',
          component:SendEmail
        },
        {
          path:'/med',
          name:'med',
          component:med
        },
        {
          path:'/Medmore',
          name:'Medmore',
          component:Medmore
        }
      ]
    }
  ]
})
