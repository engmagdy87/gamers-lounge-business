import Home from '../website/layout/Home.vue'
import DashboardLayout from '../dashboard/layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../dashboard/pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/dashboard/pages/Overview.vue'
import UserProfile from 'src/dashboard/pages/UserProfile.vue'
import TableList from 'src/dashboard/pages/TableList.vue'
import Typography from 'src/dashboard/pages/Typography.vue'
import Icons from 'src/dashboard/pages/Icons.vue'
import Maps from 'src/dashboard/pages/Maps.vue'
import Notifications from 'src/dashboard/pages/Notifications.vue'
import Upgrade from 'src/dashboard/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
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
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
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
