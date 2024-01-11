import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

/* 
所有静态路由配置的数组
*/
export default [
  {
    path: '/',
    component: Home
  },

  {
    name: 'search',
    path: '/search/:keyword',
    component: Search
  },

  {
    path: '/register',
    component: Register,
    meta: { // 需要隐藏footer的路由添加此配置
      isHideFooter: true
    }
  },

  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    }
  }
]