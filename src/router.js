import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ShowBook from './views/ShowBook.vue';
import NewBook from './views/NewBook.vue';
import EditBook from './views/EditBook.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books/new',
      name: 'books-new',
      component: NewBook
    },
    {
      path: '/books/:id',
      name: 'books',
      component: ShowBook
    },
    {
      path: '/books/:id/edit',
      name: 'books-edit',
      component: EditBook
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
