import store from "../store/index";
import types from "../store/types";
import { getTokenCookie, getUserDataCookie } from "../helpers/CookieHelper";
import { isUserAuthenticated } from "../helpers/APIsHelper";

const userData = getUserDataCookie();

// Website containers
const Home = () =>
  import(/* webpackChunkName: "Home" */ "../website/containers/Home.vue");
const Contact = () =>
  import(/* webpackChunkName: "Contact" */ "../website/containers/Contact.vue");
const About = () =>
  import(/* webpackChunkName: "About" */ "../website/containers/About.vue");
const Profile = () =>
  import(/* webpackChunkName: "Profile" */ "../website/containers/Profile.vue");
const Jobs = () =>
  import(/* webpackChunkName: "Jobs" */ "../website/containers/Jobs.vue");
const JobDetails = () =>
  import(
    /* webpackChunkName: "JobDetails" */ "../website/containers/JobDetails.vue"
  );
const OurWorks = () =>
  import(
    /* webpackChunkName: "OurWorks" */ "../website/containers/OurWorks.vue"
  );
const OurWorkDetails = () =>
  import(
    /* webpackChunkName: "OurWorkDetails" */ "../website/containers/OurWorkDetails.vue"
  );
const Services = () =>
  import(
    /* webpackChunkName: "Services" */ "../website/containers/Services.vue"
  );
const ServicesDetails = () =>
  import(
    /* webpackChunkName: "ServicesDetails" */ "../website/containers/ServicesDetails.vue"
  );

// GeneralViews
const NotFound = () =>
  import(
    /* webpackChunkName: "NotFound" */ "../dashboard/pages/NotFoundPage.vue"
  );

// Admin container
const DashboardLayout = () =>
  import(
    /* webpackChunkName: "DashboardLayout" */ "../dashboard/layout/DashboardLayout.vue"
  );
const DashboardContent = () =>
  import(
    /* webpackChunkName: "DashboardLayout" */ "../dashboard/layout/Content.vue"
  );

// Admin pages
const Overview = () =>
  import(/* webpackChunkName: "Overview" */ "src/dashboard/pages/Overview.vue");

const DepartmentsList = () =>
  import(
    /* webpackChunkName: "DepartmentsList" */ "src/dashboard/pages/Departments/DepartmentsList.vue"
  );
const DepartmentsAddEdit = () =>
  import(
    /* webpackChunkName: "DepartmentsAdd" */ "src/dashboard/pages/Departments/DepartmentsAddEdit.vue"
  );

const SponsorsList = () =>
  import(
    /* webpackChunkName: "SponsorsList" */ "src/dashboard/pages/Sponsors/SponsorsList.vue"
  );
const SponsorsAddEdit = () =>
  import(
    /* webpackChunkName: "SponsorsAddEdit" */ "src/dashboard/pages/Sponsors/SponsorsAddEdit.vue"
  );

const TeamList = () =>
  import(
    /* webpackChunkName: "TeamList" */ "src/dashboard/pages/Team/TeamList.vue"
  );
const TeamAddEdit = () =>
  import(
    /* webpackChunkName: "TeamAddEdit" */ "src/dashboard/pages/Team/TeamAddEdit.vue"
  );

const JobsList = () =>
  import(
    /* webpackChunkName: "JobsList" */ "src/dashboard/pages/Jobs/JobsList.vue"
  );
const JobsAddEdit = () =>
  import(
    /* webpackChunkName: "JobsAdd" */ "src/dashboard/pages/Jobs/JobsAddEdit.vue"
  );
const JobApplicantsList = () =>
  import(
    /* webpackChunkName: "JobApplicantsList" */ "src/dashboard/pages/Jobs/JobApplicantsList.vue"
  );

const ServicesList = () =>
  import(
    /* webpackChunkName: "ServicesList" */ "src/dashboard/pages/Services/ServicesList.vue"
  );
const ServicesAddEdit = () =>
  import(
    /* webpackChunkName: "ServicesAddEdit" */ "src/dashboard/pages/Services/ServicesAddEdit.vue"
  );
const ServiceSectionsList = () =>
  import(
    /* webpackChunkName: "ServiceSectionsList" */ "src/dashboard/pages/Services/Sections/ServiceSectionsList.vue"
  );
const ServiceSectionsAddEdit = () =>
  import(
    /* webpackChunkName: "ServiceSectionsAddEdit" */ "src/dashboard/pages/Services/Sections/ServiceSectionsAddEdit.vue"
  );
const ServiceRowsList = () =>
  import(
    /* webpackChunkName: "ServiceRowsList" */ "src/dashboard/pages/Services/Rows/ServiceRowsList.vue"
  );
const ServiceRowsAddEdit = () =>
  import(
    /* webpackChunkName: "ServiceRowsAddEdit" */ "src/dashboard/pages/Services/Rows/ServiceRowsAddEdit.vue"
  );
const ServiceColumnsList = () =>
  import(
    /* webpackChunkName: "ServiceColumnsList" */ "src/dashboard/pages/Services/Columns/ServiceColumnsList.vue"
  );
const ServiceColumnsAddEdit = () =>
  import(
    /* webpackChunkName: "ServiceColumnsAddEdit" */ "src/dashboard/pages/Services/Columns/ServiceColumnsAddEdit.vue"
  );

const WorksList = () =>
  import(
    /* webpackChunkName: "WorksList" */ "src/dashboard/pages/Works/WorksList.vue"
  );
const WorksAddEdit = () =>
  import(
    /* webpackChunkName: "WorksAddEdit" */ "src/dashboard/pages/Works/WorksAddEdit.vue"
  );
const WorkSectionsList = () =>
  import(
    /* webpackChunkName: "WorkSectionsList" */ "src/dashboard/pages/Works/Sections/WorkSectionsList.vue"
  );
const WorkSectionsAddEdit = () =>
  import(
    /* webpackChunkName: "WorkSectionsAddEdit" */ "src/dashboard/pages/Works/Sections/WorkSectionsAddEdit.vue"
  );
const WorkRowsList = () =>
  import(
    /* webpackChunkName: "WorkRowsList" */ "src/dashboard/pages/Works/Rows/WorkRowsList.vue"
  );
const WorkRowsAddEdit = () =>
  import(
    /* webpackChunkName: "WorkRowsAddEdit" */ "src/dashboard/pages/Works/Rows/WorkRowsAddEdit.vue"
  );
const WorkColumnsList = () =>
  import(
    /* webpackChunkName: "WorkColumnsList" */ "src/dashboard/pages/Works/Columns/WorkColumnsList.vue"
  );
const WorkColumnsAddEdit = () =>
  import(
    /* webpackChunkName: "WorkColumnsAddEdit" */ "src/dashboard/pages/Works/Columns/WorkColumnsAddEdit.vue"
  );

const AboutSectionsList = () =>
  import(
    /* webpackChunkName: "AboutSectionsList" */ "src/dashboard/pages/About/Sections/AboutSectionsList.vue"
  );
const AboutSectionsAddEdit = () =>
  import(
    /* webpackChunkName: "AboutSectionsAddEdit" */ "src/dashboard/pages/About/Sections/AboutSectionsAddEdit.vue"
  );
const AboutRowsAddEdit = () =>
  import(
    /* webpackChunkName: "AboutRowsAddEdit" */ "src/dashboard/pages/About/Rows/AboutRowsAddEdit.vue"
  );
const AboutRowsList = () =>
  import(
    /* webpackChunkName: "AboutRowsList" */ "src/dashboard/pages/About/Rows/AboutRowsList.vue"
  );
const AboutColumnsAddEdit = () =>
  import(
    /* webpackChunkName: "AboutColumnsAddEdit" */ "src/dashboard/pages/About/Columns/AboutColumnsAddEdit.vue"
  );
const AboutColumnsList = () =>
  import(
    /* webpackChunkName: "AboutColumnsList" */ "src/dashboard/pages/About/Columns/AboutColumnsList.vue"
  );

const ContactAddEdit = () =>
  import(
    /* webpackChunkName: "ContactAddEdit" */ "src/dashboard/pages/Contact/ContactAddEdit.vue"
  );

const Login = () =>
  import(/* webpackChunkName: "Login" */ "src/dashboard/pages/Login.vue");

const Icons = () =>
  import(/* webpackChunkName: "Icons" */ "src/dashboard/pages/Icons.vue");
const Notifications = () =>
  import(
    /* webpackChunkName: "Notifications" */ "src/dashboard/pages/Notifications.vue"
  );

const showHeaderAndFooterForWebsite = (next, flag = true) => {
  store.commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag);
  store.commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag);
  next();
};
const userHasPermission = (next, route) => {
  next();
  if (userData.permissions.includes(route)) next();
  else next("/dashboard");
};
const getUserAuthenticatedFlag = async () => {
  const response = await isUserAuthenticated();
  return response;
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/job/:jobName",
    name: "job",
    component: JobDetails,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/services/:serviceName",
    name: "service",
    component: ServicesDetails,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/work",
    name: "works",
    component: OurWorks,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/work/:workName",
    name: "work",
    component: OurWorkDetails,
    beforeEnter(to, from, next) {
      showHeaderAndFooterForWebsite(next, false);
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: async (to, from, next) => {
      store.commit(types.app.mutations.SET_SHOW_HEADER_FLAG, false);
      store.commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, false);
      const token = getTokenCookie();
      const isUserAuthenticatedFlag = await getUserAuthenticatedFlag();
      if (token && isUserAuthenticatedFlag) next("/dashboard");
      else next();
    }
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/dashboard/overview",
    beforeEnter: async (to, from, next) => {
      store.commit(types.app.mutations.SET_SHOW_HEADER_FLAG, false);
      store.commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, false);
      const token = getTokenCookie();
      const isUserAuthenticatedFlag = await getUserAuthenticatedFlag();
      if (!token || !isUserAuthenticatedFlag) next("/login");
      else next();
    },
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "departments",
        name: "Departments",
        component: DashboardContent,
        redirect: "/dashboard/departments/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "job.view");
        },
        children: [
          {
            path: "list",
            name: "List Departments",
            component: DepartmentsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "job.view");
            }
          },
          {
            path: "create",
            name: "Create Department",
            component: DepartmentsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "job.create");
            }
          },
          {
            path: "edit",
            name: "Edit Department",
            component: DepartmentsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "job.update");
            }
          }
        ]
      },
      {
        path: "sponsors",
        name: "Sponsors",
        component: DashboardContent,
        redirect: "/dashboard/sponsors/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "sponsor.view");
        },
        children: [
          {
            path: "list",
            name: "List Sponsors",
            component: SponsorsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "sponsor.view");
            }
          },
          {
            path: "create",
            name: "Create Sponsor",
            component: SponsorsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "sponsor.create");
            }
          },
          {
            path: "edit",
            name: "Edit Sponsor",
            component: SponsorsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "sponsor.update");
            }
          }
        ]
      },
      {
        path: "team",
        name: "Team",
        component: DashboardContent,
        redirect: "/dashboard/team/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "team.view");
        },
        children: [
          {
            path: "list",
            name: "List Team",
            component: TeamList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "team.view");
            }
          },
          {
            path: "create",
            name: "Create Team Member",
            component: TeamAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "team.create");
            }
          },
          {
            path: "edit",
            name: "Edit Team Member",
            component: TeamAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "team.update");
            }
          }
        ]
      },
      {
        path: "jobs",
        name: "Jobs",
        component: DashboardContent,
        redirect: "/dashboard/jobs/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "job.view");
        },
        children: [
          {
            path: "list",
            name: "List Jobs",
            component: JobsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "job.view");
            }
          },
          {
            path: "applicants/:jobId",
            name: "List Job Applicants",
            component: JobApplicantsList
          },
          {
            path: "create",
            name: "Create Job",
            component: JobsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "job.create");
            }
          },
          {
            path: "edit",
            name: "Edit Job",
            component: JobsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "job.update");
            }
          }
        ]
      },
      {
        path: "services",
        name: "Services",
        component: DashboardContent,
        redirect: "/dashboard/services/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "service.view");
        },
        children: [
          {
            path: "list",
            name: "List Services",
            component: ServicesList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "service.view");
            }
          },
          {
            path: "create",
            name: "Create Service",
            component: ServicesAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "service.create");
            }
          },
          {
            path: "edit",
            name: "Edit Service",
            component: ServicesAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "service.update");
            }
          },
          //*************************************/
          {
            path: "sections/list/:id",
            name: "List Service Sections",
            component: ServiceSectionsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "section.view");
            }
          },
          {
            path: "sections/create/:id",
            name: "Create Service Section",
            component: ServiceSectionsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "section.create");
            }
          },
          {
            path: "sections/edit/:id",
            name: "Edit Service Section",
            component: ServiceSectionsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "section.update");
            }
          },
          //*************************************/
          {
            path: "rows/list/:sectionId",
            name: "List Service Rows",
            component: ServiceRowsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "row.view");
            }
          },
          {
            path: "rows/create/:sectionId",
            name: "Create Service Row",
            component: ServiceRowsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "row.create");
            }
          },
          {
            path: "rows/edit/:sectionId",
            name: "Edit Service Row",
            component: ServiceRowsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "row.update");
            }
          },
          //*************************************/
          {
            path: "columns/list/:rowId",
            name: "List Service Columns",
            component: ServiceColumnsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "column.view");
            }
          },
          {
            path: "columns/create/:rowId",
            name: "Create Service Column",
            component: ServiceColumnsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "column.create");
            }
          },
          {
            path: "columns/edit/:rowId",
            name: "Edit Service Column",
            component: ServiceColumnsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "column.update");
            }
          }
        ]
      },
      {
        path: "works",
        name: "Works",
        component: DashboardContent,
        redirect: "/dashboard/works/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "work.view");
        },
        children: [
          {
            path: "list",
            name: "List Works",
            component: WorksList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "work.view");
            }
          },
          {
            path: "create",
            name: "Create Work",
            component: WorksAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "work.create");
            }
          },
          {
            path: "edit",
            name: "Edit Work",
            component: WorksAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "work.update");
            }
          },
          //*************************************/
          {
            path: "sections/list/:id",
            name: "List Work Sections",
            component: WorkSectionsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "section.view");
            }
          },
          {
            path: "sections/create/:id",
            name: "Create Work Section",
            component: WorkSectionsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "section.create");
            }
          },
          {
            path: "sections/edit/:id",
            name: "Edit Work Section",
            component: WorkSectionsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "section.update");
            }
          },
          //*************************************/
          {
            path: "rows/list/:sectionId",
            name: "List Work Rows",
            component: WorkRowsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "row.view");
            }
          },
          {
            path: "rows/create/:sectionId",
            name: "Create Work Row",
            component: WorkRowsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "row.create");
            }
          },
          {
            path: "rows/edit/:sectionId",
            name: "Edit Work Row",
            component: WorkRowsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "row.update");
            }
          },
          //*************************************/
          {
            path: "columns/list/:rowId",
            name: "List Work Columns",
            component: WorkColumnsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "column.view");
            }
          },
          {
            path: "columns/create/:rowId",
            name: "Create Work Column",
            component: WorkColumnsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "column.create");
            }
          },
          {
            path: "columns/edit/:rowId",
            name: "Edit Work Column",
            component: WorkColumnsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "column.update");
            }
          }
        ]
      },
      {
        path: "about",
        name: "About",
        component: DashboardContent,
        redirect: "/dashboard/about/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "about_us.view");
        },
        children: [
          {
            path: "list",
            name: "List About",
            component: AboutSectionsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.view");
            }
          },
          {
            path: "create",
            name: "Create About Section",
            component: AboutSectionsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.create");
            }
          },
          {
            path: "edit",
            name: "Edit About Section",
            component: AboutSectionsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.update");
            }
          },
          // //*************************************/
          {
            path: "rows/list/:sectionId",
            name: "List About Rows",
            component: AboutRowsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.view");
            }
          },
          {
            path: "rows/create/:sectionId",
            name: "Create About Row",
            component: AboutRowsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.create");
            }
          },
          {
            path: "rows/edit/:sectionId",
            name: "Edit About Row",
            component: AboutRowsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.update");
            }
          },
          // //*************************************/
          {
            path: "columns/list/:rowId",
            name: "List About Columns",
            component: AboutColumnsList,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.view");
            }
          },
          {
            path: "columns/create/:rowId",
            name: "Create About Column",
            component: AboutColumnsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.create");
            }
          },
          {
            path: "columns/edit/:rowId",
            name: "Edit About Column",
            component: AboutColumnsAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "about_us.update");
            }
          }
        ]
      },
      {
        path: "contact",
        name: "Contact",
        component: DashboardContent,
        redirect: "/dashboard/contact/list",
        beforeEnter(to, from, next) {
          userHasPermission(next, "contact_us.view");
        },
        children: [
          {
            path: "list",
            name: "Create Contact",
            component: ContactAddEdit,
            beforeEnter(to, from, next) {
              userHasPermission(next, "contact_us.create");
            }
          }
        ]
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
