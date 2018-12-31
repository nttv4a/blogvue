import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import PostsList from '@/components/owner/posts/PostsList'
import PostsDetails from '@/components/owner/posts/PostsDetails'
import PostsCreate from '@/components/owner/posts/PostsCreate'
import PostsUpdate from '@/components/owner/posts/PostsUpdate'
// Import Comments
import CommentsList from '@/components/owner/comments/CommentsList'
import CommentsDetails from '@/components/owner/comments/CommentsDetails'
import CommentsCreate from '@/components/owner/comments/CommentsCreate'
import CommentsUpdate from '@/components/owner/comments/CommentsUpdate'
// Import Behavior User
// import HomePage from '../home/HomePage'
// import AppUser from '../App/App'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/owner/posts/list',
      name: 'PostsList',
      component: PostsList
    },
    {
      path: '/owner/posts/create',
      name: 'PostsCreate',
      component: PostsCreate
    },
    {
      path: '/owner/posts/update/:id',
      name: 'PostsUpdate',
      component: PostsUpdate
    },
    {
      path: '/owner/posts/:id',
      name: 'PostsDetails',
      component: PostsDetails
    },
    // Import Comments
    {
      path: '/owner/comments/list',
      name: 'CommentsList',
      component: CommentsList
    },
    {
      path: '/owner/comments/create',
      name: 'CommentsCreate',
      component: CommentsCreate
    },
    {
      path: '/owner/comments/update/:id',
      name: 'CommentsUpdate',
      component: CommentsUpdate
    },
    {
      path: '/owner/comments/:id',
      name: 'CommentsDetails',
      component: CommentsDetails
    },
    // otherwise redirect to home
    // { path: '*', redirect: '/' }
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    // Import Behavior User
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/register', component: RegisterPage }
  ]
})
