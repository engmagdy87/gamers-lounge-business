// Website containers
import Home from '../website/containers/Home.vue'
import Story from '../website/containers/Story.vue'
import Contact from '../website/containers/Contact.vue'
import EventsContainer from '../website/containers/Events.vue'

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
import EventDetails from '../website/containers/events/EventDetails.vue'

import Sponsors from 'src/dashboard/pages/Sponsors.vue'
import SponsorsList from 'src/dashboard/pages/Sponsors/SponsorsList.vue'
import SponsorAddEdit from 'src/dashboard/pages/Sponsors/SponsorAddEdit.vue'

import Games from 'src/dashboard/pages/Games.vue'
import GamesList from 'src/dashboard/pages/Games/GamesList.vue'
import GameAddEdit from 'src/dashboard/pages/Games/GameAddEdit.vue'
import GameDetails from '../website/containers/games/GameDetails.vue'

import Platforms from 'src/dashboard/pages/Platforms.vue'
import PlatformsList from 'src/dashboard/pages/Platforms/PlatformsList.vue'
import PlatformAddEdit from 'src/dashboard/pages/Platforms/PlatformAddEdit.vue'

import Tournaments from 'src/dashboard/pages/Tournaments.vue'
import TournamentsList from 'src/dashboard/pages/Tournaments/TournamentsList.vue'
import TournamentAddEdit from 'src/dashboard/pages/Tournaments/TournamentAddEdit.vue'
import TournamentDetails from '../website/containers/tournaments/TournamentDetails.vue'


import Regions from 'src/dashboard/pages/Regions.vue'
import RegionsList from 'src/dashboard/pages/Regions/RegionsList.vue'
import RegionAddEdit from 'src/dashboard/pages/Regions/RegionAddEdit.vue'

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
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/events',
    name: 'events',
    component: EventsContainer,
  },
  {
    path: '/events/event/:eventId',
    name: 'event',
    component: EventDetails,
  },
  {
    path: '/games/game/:gameId',
    name: 'game',
    component: GameDetails,
  },
  {
    path: '/tournaments/tournament/:tournamentId',
    name: 'tournament',
    component: TournamentDetails,
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
            name: 'Create Summit',
            component: SummitAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Summit',
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
            name: 'Create Event',
            component: EventsAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Event',
            component: EventsAddEdit
          }
        ]
      },
      {
        path: 'sponsors',
        name: 'Sponsors',
        redirect: '/dashboard/sponsors/list',
        component: Sponsors,
        children: [
          {
            path: 'list',
            name: 'List',
            component: SponsorsList
          },
          {
            path: 'create',
            name: 'Create Sponsor',
            component: SponsorAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Sponsor',
            component: SponsorAddEdit
          }
        ]
      },
      {
        path: 'games',
        name: 'Games',
        redirect: '/dashboard/games/list',
        component: Games,
        children: [
          {
            path: 'list',
            name: 'List',
            component: GamesList
          },
          {
            path: 'create',
            name: 'Create Game',
            component: GameAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Game',
            component: GameAddEdit
          }
        ]
      },
      {
        path: 'platforms',
        name: 'Platforms',
        redirect: '/dashboard/platforms/list',
        component: Platforms,
        children: [
          {
            path: 'list',
            name: 'List',
            component: PlatformsList
          },
          {
            path: 'create',
            name: 'Create Platform',
            component: PlatformAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Platform',
            component: PlatformAddEdit
          }
        ]
      },
      {
        path: 'regions',
        name: 'Regions',
        redirect: '/dashboard/regions/list',
        component: Regions,
        children: [
          {
            path: 'list',
            name: 'List',
            component: RegionsList
          },
          {
            path: 'create',
            name: 'Create Region',
            component: RegionAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Region',
            component: RegionAddEdit
          }
        ]
      },
      {
        path: 'tournaments',
        name: 'Tournaments',
        redirect: '/dashboard/tournaments/list',
        component: Tournaments,
        children: [
          {
            path: 'list',
            name: 'List',
            component: TournamentsList
          },
          {
            path: 'create',
            name: 'Create Tournament',
            component: TournamentAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Tournament',
            component: TournamentAddEdit
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
