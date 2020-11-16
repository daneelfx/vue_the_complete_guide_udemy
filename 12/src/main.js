import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import NotFound from './components/nav/NotFound'
import TeamsList from './components/teams/TeamsList'
import TeamMembers from './components/teams/TeamMembers'
import UsersList from './components/users/UsersList'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      component: UsersList,
      beforeEnter(_, _2, next) {
        console.log('ROUTE beforeEnter')
        next()
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) return savedPosition
    return { top: 0, left: 0 }
  },
})

router.beforeEach((_, _2, next) => {
  console.log('GLOBAL beforeEach')
  next()
})

router.afterEach(() => {
  console.log('GLOBAL afterEach')
})

const app = createApp(App)

app.use(router)

app.mount('#app')
