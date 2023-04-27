import {createRouter, createWebHistory} from 'vue-router'
import Index from "@/index/Index.vue";
import Sign from "@/sign/Sign.vue";
import Customer from "@/components/customer/Customer.vue";
import Home from "@/components/home/Home.vue";

const createHistory = createWebHistory();

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        redirect: 'home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: '/customer',
                name: 'customer',
                component: Customer,
            },
        ]
    },
    {
        path: '/sign',
        name: 'sign',
        component: Sign
    },
    /*{
      path: '/index',
      name: 'index',
      component: IndexView,
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/admin',
          name: 'Admin',
          component: Admin,
        },
        {
          path: '/account',
          name: 'Account',
          component: Account,
        }
      ]
    }*/
]

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单跳转当前页面报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router = createRouter({
    history: createHistory,
    routes
})

export default router
