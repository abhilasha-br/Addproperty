import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/dashboard',
    component: () => import('../views/Pages/Home.vue'),
    children: [
      { path: 'dashboard', component: () => import('../views/Pages/Dashboard.vue') },
      { path: 'property-list', component: () => import('../views/Pages/Property/NewPropertyList.vue') },
      { path: 'property-detail', component: () => import('../views/Pages/Property/PropertyDetails.vue') },
      { path: 'all-leads', component: () => import('../views/Pages/AllLeads.vue') },
      {
        path: 'add-property', component: () => import('../views/Pages/Property/AddProperty.vue'),
        children: [
          {
            path: '',
            name: 'Builder Form',
            component: () => import('../components/AddPropertyForms/BuilderForm.vue'),
          },
          {
            path: 'contact-form',
            name: 'Contact Form',
            component: () => import('../components/AddPropertyForms/ContactForm.vue'),
          },
          {
            path: 'property-detail',
            name: 'Property Detail Form',
            component: () => import('../components/AddPropertyForms/PropertyDetailsForm.vue'),
          },
          {
            path: 'property-document',
            name: 'Property Document Form',
            component: () => import('../components/AddPropertyForms/PropertyDocumentForm.vue'),
          },
          {
            path: 'additional-info',
            name: 'Additional Info Form',
            component: () => import('../components/AddPropertyForms/AdditionalInfoForm.vue'),
          },
          {
            path: 'comments',
            name: 'Comments Form',
            component: () => import('../components/AddPropertyForms/CommentsForm.vue'),
          },
          {
            path: 'site-visits',
            name: 'Site Visits Form',
            component: () => import('../components/AddPropertyForms/SiteVisitsForm.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Pages/Login.vue')
  },
  {
    path: "**",
    redirect: '/login'
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
