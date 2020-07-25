// Website containers
import Home from '../website/containers/Home.vue'
import Story from '../website/containers/Story.vue'
import EventsContainer from '../website/containers/Events.vue'
import EventsDetails from '../website/containers/events/EventDetails.vue'

// GeneralViews
import NotFound from '../dashboard/pages/NotFoundPage.vue'

// Admin container
import DashboardLayout from '../dashboard/layout/DashboardLayout.vue'

// Admin pages
import Overview from 'src/dashboard/pages/Overview.vue'
import Summits from 'src/dashboard/pages/Summits.vue'
import SummitsList from 'src/dashboard/pages/Summits/SummitsList.vue'
import SummitAddEdit from 'src/dashboard/pages/Summits/SummitAddEdit.vue'
import Events from 'src/dashboard/pages/Events.vue'
import EventsList from 'src/dashboard/pages/Events/EventsList.vue'
import EventsAddEdit from 'src/dashboard/pages/Events/EventsAddEdit.vue'
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
    path: '/story',
    name: 'story',
    component: Story,
  },
  {
    path: '/events',
    name: 'events',
    component: EventsContainer,
  },
  {
    path: '/events/event/:eventId',
    name: 'event',
    component: EventsDetails,
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
        path: 'summits',
        name: 'Summits',
        component: Summits,
        redirect: '/dashboard/summits/list',
        children: [
          {
            path: 'list',
            name: 'List',
            component: SummitsList
          },
          {
            path: 'create',
            name: 'Create',
            component: SummitAddEdit
          },
          {
            path: 'edit',
            name: 'Edit',
            component: SummitAddEdit
          }
        ]
      },
      {
        path: 'events',
        name: 'Events',
        redirect: '/dashboard/events/list',
        component: Events,
        children: [
          {
            path: 'list',
            name: 'List',
            component: EventsList
          },
          {
            path: 'create',
            name: 'Create',
            component: EventsAddEdit
          },
          {
            path: 'edit',
            name: 'Edit',
            component: EventsAddEdit
          }
        ]
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
