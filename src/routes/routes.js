import store from "../store/index";
import types from "../store/types";

// Website containers
const Home = () => import(/* webpackChunkName: "Home" */ '../website/containers/Home.vue')
const Contact = () => import(/* webpackChunkName: "Contact" */ '../website/containers/Contact.vue')
const About = () => import(/* webpackChunkName: "About" */ '../website/containers/About.vue')
const Jobs = () => import(/* webpackChunkName: "Jobs" */ '../website/containers/Jobs.vue')
const JobDetails = () => import(/* webpackChunkName: "JobDetails" */ '../website/containers/JobDetails.vue')
const OurWorks = () => import(/* webpackChunkName: "OurWorks" */ '../website/containers/OurWorks.vue')
const OurWorkDetails = () => import(/* webpackChunkName: "OurWorkDetails" */ '../website/containers/OurWorkDetails.vue')
const Services = () => import(/* webpackChunkName: "Services" */ '../website/containers/Services.vue')
const ServicesDetails = () => import(/* webpackChunkName: "ServicesDetails" */ '../website/containers/ServicesDetails.vue')

// GeneralViews
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../dashboard/pages/NotFoundPage.vue')

// Admin container
const DashboardLayout = () => import(/* webpackChunkName: "DashboardLayout" */ '../dashboard/layout/DashboardLayout.vue')
const DashboardContent = () => import(/* webpackChunkName: "DashboardLayout" */ '../dashboard/layout/Content.vue')

// Admin pages
const Overview = () => import(/* webpackChunkName: "Overview" */ 'src/dashboard/pages/Overview.vue')

const DepartmentsList = () => import(/* webpackChunkName: "DepartmentsList" */ 'src/dashboard/pages/Departments/DepartmentsList.vue')
const DepartmentsAddEdit = () => import(/* webpackChunkName: "DepartmentsAdd" */ 'src/dashboard/pages/Departments/DepartmentsAddEdit.vue')

const JobsList = () => import(/* webpackChunkName: "JobsList" */ 'src/dashboard/pages/Jobs/JobsList.vue')
const JobsAddEdit = () => import(/* webpackChunkName: "JobsAdd" */ 'src/dashboard/pages/Jobs/JobsAddEdit.vue')
const JobApplicantsList = () => import(/* webpackChunkName: "JobApplicantsList" */ 'src/dashboard/pages/Jobs/JobApplicantsList.vue')

const ServicesAddEdit = () => import(/* webpackChunkName: "ServicesAddEdit" */ 'src/dashboard/pages/Services/ServicesAddEdit.vue')
const ServicesList = () => import(/* webpackChunkName: "ServicesList" */ 'src/dashboard/pages/Services/ServicesList.vue')
const SectionsList = () => import(/* webpackChunkName: "SectionsList" */ 'src/dashboard/pages/Services/Sections/SectionsList.vue')
const SectionsAddEdit = () => import(/* webpackChunkName: "SectionsAddEdit" */ 'src/dashboard/pages/Services/Sections/SectionsAddEdit.vue')

const WorksList = () => import(/* webpackChunkName: "WorksList" */ 'src/dashboard/pages/Works/WorksList.vue')
const WorksAddEdit = () => import(/* webpackChunkName: "WorksAddEdit" */ 'src/dashboard/pages/Works/WorksAddEdit.vue')
const WorkSectionsList = () => import(/* webpackChunkName: "WorkSectionsList" */ 'src/dashboard/pages/Works/Sections/WorkSectionsList.vue')
const WorkSectionsAddEdit = () => import(/* webpackChunkName: "WorkSectionsAddEdit" */ 'src/dashboard/pages/Works/Sections/WorkSectionsAddEdit.vue')
const WorkRowsList = () => import(/* webpackChunkName: "WorkRowsList" */ 'src/dashboard/pages/Works/Rows/WorkRowsList.vue')
const WorkRowsAddEdit = () => import(/* webpackChunkName: "WorkRowsAddEdit" */ 'src/dashboard/pages/Works/Rows/WorkRowsAddEdit.vue')
const WorkColumnsList = () => import(/* webpackChunkName: "WorkColumnsList" */ 'src/dashboard/pages/Works/Columns/WorkColumnsList.vue')
const WorkColumnsAddEdit = () => import(/* webpackChunkName: "WorkColumnsAddEdit" */ 'src/dashboard/pages/Works/Columns/WorkColumnsAddEdit.vue')

const Login = () => import(/* webpackChunkName: "Icons" */ 'src/dashboard/pages/Login.vue')

const Icons = () => import(/* webpackChunkName: "Icons" */ 'src/dashboard/pages/Icons.vue')
const Notifications = () => import(/* webpackChunkName: "Notifications" */ 'src/dashboard/pages/Notifications.vue')

import { getTokenCookie } from '../helpers/CookieHelper'
import { isUserAuthenticated } from '../helpers/APIsHelper'

const showHeaderAndFooterForWebsite = (next, flag = true) => {
  store.commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, flag);
  next();
}
const getUserAuthenticatedFlag = async () => {
  const response = await isUserAuthenticated()
  return response
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next)
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next)
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next)
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false)
    }
  },
  {
    path: '/job/:jobName',
    name: 'job',
    component: JobDetails,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false)
    }
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false)
    }
  },
  {
    path: '/services/:serviceName',
    name: 'service',
    component: ServicesDetails,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false)
    }
  },
  {
    path: '/work',
    name: 'works',
    component: OurWorks,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next)
    }
  },
  {
    path: '/work/:workName',
    name: 'work',
    component: OurWorkDetails,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next)
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: async (to, from, next) => {
      store.commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, false);
      const token = getTokenCookie()
      const isUserAuthenticatedFlag = await getUserAuthenticatedFlag()
      if (token && isUserAuthenticatedFlag) next('/dashboard');
      else next();
    },
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard/overview',
    beforeEnter: async (to, from, next) => {
      store.commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, false);
      const token = getTokenCookie()
      const isUserAuthenticatedFlag = await getUserAuthenticatedFlag()
      if (!token && !isUserAuthenticatedFlag) next('/login');
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
            name: 'List Departments',
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
        path: 'jobs',
        name: 'Jobs',
        component: DashboardContent,
        redirect: '/dashboard/jobs/list',
        children: [
          {
            path: 'list',
            name: 'List Jobs',
            component: JobsList
          },
          {
            path: 'applicants/:jobId',
            name: 'List Job Applicants',
            component: JobApplicantsList
          },
          {
            path: 'create',
            name: 'Create Job',
            component: JobsAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Job',
            component: JobsAddEdit
          }
        ]
      },
      {
        path: 'services',
        name: 'Services',
        component: DashboardContent,
        redirect: '/dashboard/services/list',
        children: [
          {
            path: 'list',
            name: 'List Services',
            component: ServicesList
          },
          {
            path: 'sections/list/:serviceId',
            name: 'List Service Sections',
            component: SectionsList
          },
          {
            path: 'sections/create/:serviceId',
            name: 'Create Service Section',
            component: SectionsAddEdit
          },
          //*************************************/
          {
            path: 'sections/edit/:serviceId',
            name: 'Edit Service Section',
            component: SectionsAddEdit
          },
          {
            path: 'create',
            name: 'Create Service',
            component: ServicesAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Service',
            component: ServicesAddEdit
          }
        ]
      },
      {
        path: 'works',
        name: 'Works',
        component: DashboardContent,
        redirect: '/dashboard/works/list',
        children: [
          {
            path: 'list',
            name: 'List Works',
            component: WorksList
          },
          {
            path: 'create',
            name: 'Create Work',
            component: WorksAddEdit
          },
          {
            path: 'edit',
            name: 'Edit Work',
            component: WorksAddEdit
          },
          //*************************************/
          {
            path: 'sections/list/:workId',
            name: 'List Work Sections',
            component: WorkSectionsList
          },
          {
            path: 'sections/create/:workId',
            name: 'Create Work Section',
            component: WorkSectionsAddEdit
          },
          {
            path: 'sections/edit/:workId',
            name: 'Edit Work Section',
            component: WorkSectionsAddEdit
          },
          //*************************************/
          {
            path: 'rows/list/:workSectionId',
            name: 'List Work Rows',
            component: WorkRowsList
          },
          {
            path: 'rows/create/:workSectionId',
            name: 'Create Work Row',
            component: WorkRowsAddEdit
          },
          {
            path: 'rows/edit/:workSectionId',
            name: 'Edit Work Row',
            component: WorkRowsAddEdit
          },
          //*************************************/
          {
            path: 'columns/list/:workRowId',
            name: 'List Work Columns',
            component: WorkColumnsList
          },
          {
            path: 'columns/create/:workRowId',
            name: 'Create Work Column',
            component: WorkColumnsAddEdit
          },
          {
            path: 'columns/edit/:workRowId',
            name: 'Edit Work Column',
            component: WorkColumnsAddEdit
          },
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
