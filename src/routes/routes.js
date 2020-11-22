// Website containers
const Home = () => import(/* webpackChunkName: "Home" */ '../website/containers/Home.vue')
const Contact = () => import(/* webpackChunkName: "Contact" */ '../website/containers/Contact.vue')
const About = () => import(/* webpackChunkName: "About" */ '../website/containers/About.vue')
const Jobs = () => import(/* webpackChunkName: "Jobs" */ '../website/containers/Jobs.vue')
const JobDetails = () => import(/* webpackChunkName: "JobDetails" */ '../website/containers/JobDetails.vue')
const OurWork = () => import(/* webpackChunkName: "OurWork" */ '../website/containers/OurWork.vue')

// GeneralViews
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../dashboard/pages/NotFoundPage.vue')

// Admin container
const DashboardLayout = () => import(/* webpackChunkName: "DashboardLayout" */ '../dashboard/layout/DashboardLayout.vue')
const DashboardContent = () => import(/* webpackChunkName: "DashboardLayout" */ '../dashboard/layout/Content.vue')

// Admin pages
const Overview = () => import(/* webpackChunkName: "Overview" */ 'src/dashboard/pages/Overview.vue')

const DepartmentsList = () => import(/* webpackChunkName: "DepartmentsList" */ 'src/dashboard/pages/Departments/DepartmentsList.vue')
const DepartmentsAddEdit = () => import(/* webpackChunkName: "DepartmentsList" */ 'src/dashboard/pages/Departments/DepartmentsAddEdit.vue')

const Login = () => import(/* webpackChunkName: "Icons" */ 'src/dashboard/pages/Login.vue')

const Icons = () => import(/* webpackChunkName: "Icons" */ 'src/dashboard/pages/Icons.vue')
const Notifications = () => import(/* webpackChunkName: "Notifications" */ 'src/dashboard/pages/Notifications.vue')

import { getTokenCookie } from '../helpers/CookieHelper'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/job/:jobName',
    name: 'job',
    component: JobDetails,
  },
  {
    path: '/work',
    name: 'work',
    component: OurWork,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next) {
      const token = getTokenCookie()
      if (token) next('/dashboard');
      else next();
    },
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard/overview',
    beforeEnter(to, from, next) {
      const token = getTokenCookie()
      if (!token) next('/login');
      else next();
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'departments',
        name: 'Departments',
        component: DashboardContent,
        redirect: '/dashboard/departments/list',
        children: [
          {
            path: 'list',
            name: 'List',
            component: DepartmentsList
          },
          {
            path: 'create',
            name: 'Create Department',
            component: DepartmentsAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Department',
            component: DepartmentsAddEdit
          }
        ]
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
