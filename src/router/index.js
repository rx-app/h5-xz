import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['@/views/Main'], resolve),
      
      children:[
        
      ]
    },
    {
      path: '/history/:id',
      name: 'mainhistory',
      props:true,
      component: resolve => require(['@/views/CardRecords'], resolve),
      
    },
    {
      path:'/',
      redirect:'/main',
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/Home'], resolve)
    },
    {
      path: '/detail/:id',
      name: 'detail',
      props: true,
      component: resolve => require(['@/views/Main-detail'], resolve)
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/views/My'], resolve)
    },
    {
      path: '/question',
      name: 'question',
      component: resolve => require(['@/views/Question'], resolve)
    },
    {
      path: '/message',
      name: 'message',
      component: resolve => require(['@/views/Message'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/Login'], resolve)
    },
    {
      path: '/wlogin',
      name: 'wlogin',
      component: resolve => require(['@/views/Wlogin'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/views/Register'], resolve)
    },
    {
      path: '/history/:id',
      name: 'history',
      props:true,
      component: resolve => require(['@/views/CardRecords'], resolve)
    },
    {
      path: '/messageAndriod',
      name: 'messageAndriod',
      component: resolve => require(['@/views/message-andriod'], resolve)
    },
  ],
  linkActiveClass: 'on',
})


