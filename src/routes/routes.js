// Website containers
import Home from '../website/containers/Home.vue'

// GeneralViews
import NotFound from '../dashboard/pages/NotFoundPage.vue'

// Admin container
import DashboardLayout from '../dashboard/layout/DashboardLayout.vue'

// Admin pages
import Overview from 'src/dashboard/pages/Overview.vue'
import UserProfile from 'src/dashboard/pages/UserProfile.vue'
import TableList from 'src/dashboard/pages/TableList.vue'
import Icons from 'src/dashboard/pages/Icons.vue'
import Notifications from 'src/dashboard/pages/Notifications.vue'

import { getUserCookie } from '../website/helpers/CookieHelper'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard/overview',
    beforeEnter(to, from, next) {
      const token = getUserCookie()
      if (!token || !token.is_admin) next('/');
      else next();
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
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
