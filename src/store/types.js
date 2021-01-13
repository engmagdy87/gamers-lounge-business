const app = {
    mutations: {
        SET_SPINNER_FLAG: 'app/mutations/SET_SPINNER_FLAG',
        SET_SHOW_HEADER_FLAG: 'app/mutations/SET_SHOW_HEADER_FLAG',
        SET_SHOW_FOOTER_FLAG: 'app/mutations/SET_SHOW_FOOTER_FLAG',
    },
    actions: {
        DELETE_IMAGE: 'app/actions/DELETE_IMAGE',
        DELETE_VIDEO: 'app/actions/DELETE_VIDEO'
    }
};

const login = {
    actions: {
        LOGIN_TO_DASHBOARD: 'login/actions/LOGIN_TO_DASHBOARD',
    }
};

const jobs = {
    mutations: {
        SET_JOBS: 'jobs/mutations/SET_JOBS',
        SET_IS_JOBS_FETCHED: 'jobs/mutations/SET_IS_JOBS_FETCHED',
        SET_JOB: 'jobs/mutations/SET_JOB',
        SET_IS_JOB_FETCHED: 'jobs/mutations/SET_IS_JOB_FETCHED',
        SET_IS_JOB_APPLICATION_FETCHED: 'jobs/mutations/SET_IS_JOB_APPLICATION_FETCHED',
        REMOVE_DELETED_JOB: 'jobs/mutations/REMOVE_DELETED_JOB',
    },
    actions: {
        FETCH_JOBS: 'jobs/actions/FETCH_JOBS',
        FETCH_JOB: 'jobs/actions/FETCH_JOB',
        FETCH_JOB_APPLICATION: 'jobs/actions/FETCH_JOB_APPLICATION',
        CREATE_JOB: 'jobs/actions/CREATE_JOB',
        DELETE_JOB: 'jobs/actions/DELETE_JOB',
        UPDATE_JOB: 'jobs/actions/UPDATE_JOB',
        APPLY_JOB: 'jobs/actions/APPLY_JOB',
    }
};

const departments = {
    mutations: {
        SET_DEPARTMENTS: 'departments/mutations/SET_DEPARTMENTS',
        SET_IS_DEPARTMENTS_FETCHED: 'departments/mutations/SET_IS_DEPARTMENTS_FETCHED',
        REMOVE_DELETED_DEPARTMENT: 'departments/mutations/REMOVE_DELETED_DEPARTMENT',
    },
    actions: {
        FETCH_DEPARTMENTS: 'departments/actions/FETCH_DEPARTMENTS',
        CREATE_DEPARTMENT: 'departments/actions/CREATE_DEPARTMENT',
        DELETE_DEPARTMENT: 'departments/actions/DELETE_DEPARTMENT',
        UPDATE_DEPARTMENT: 'departments/actions/UPDATE_DEPARTMENT',
    }
};

const services = {
    mutations: {
        SET_SERVICES: 'services/mutations/SET_SERVICES',
        SET_IS_SERVICES_FETCHED: 'services/mutations/SET_IS_SERVICES_FETCHED',
        SET_WEBSITE_SERVICE: 'services/mutations/SET_WEBSITE_SERVICE',
        SET_IS_WEBSITE_SERVICE_FETCHED: 'services/mutations/SET_IS_WEBSITE_SERVICE_FETCHED',
        SET_HOME_PAGE_SERVICES: 'services/mutations/SET_HOME_PAGE_SERVICES',
        SET_IS_HOME_PAGE_SERVICES_FETCHED: 'services/mutations/SET_IS_HOME_PAGE_SERVICES_FETCHED',
        SET_SERVICE_SECTIONS: 'services/mutations/SET_SERVICE_SECTIONS',
        SET_IS_SERVICE_SECTIONS_FETCHED: 'services/mutations/SET_IS_SERVICE_SECTIONS_FETCHED',
        SET_SERVICE_SECTION: 'services/mutations/SET_SERVICE_SECTION',
        SET_IS_SERVICE_SECTION_FETCHED: 'services/mutations/SET_IS_SERVICE_SECTION_FETCHED',
        SET_SERVICE_ROWS: 'services/mutations/SET_SERVICE_ROWS',
        SET_IS_SERVICE_ROWS_FETCHED: 'services/mutations/SET_IS_SERVICE_ROWS_FETCHED',
        SET_SERVICE_COLUMNS: 'services/mutations/SET_SERVICE_COLUMNS',
        SET_SERVICE_COLUMN: 'services/mutations/SET_SERVICE_COLUMN',
        SET_IS_SERVICE_COLUMNS_FETCHED: 'services/mutations/SET_IS_SERVICE_COLUMNS_FETCHED',
        REMOVE_DELETED_SERVICE: 'services/mutations/REMOVE_DELETED_SERVICE',
        REMOVE_DELETED_SERVICE_SECTION: 'services/mutations/REMOVE_DELETED_SERVICE_SECTION',
        REMOVE_DELETED_SERVICE_ROW: 'services/mutations/REMOVE_DELETED_SERVICE_ROW',
        REMOVE_DELETED_SERVICE_COLUMN: 'services/mutations/REMOVE_DELETED_SERVICE_COLUMN',
    },
    actions: {
        FETCH_SERVICES: 'services/actions/FETCH_SERVICES',
        FETCH_WEBSITE_SERVICE: 'services/actions/FETCH_WEBSITE_SERVICE',
        FETCH_HOME_PAGE_SERVICES: 'services/actions/FETCH_HOME_PAGE_SERVICES',
        CREATE_SERVICE: 'services/actions/CREATE_SERVICE',
        DELETE_SERVICE: 'services/actions/DELETE_SERVICE',
        UPDATE_SERVICE: 'services/actions/UPDATE_SERVICE',
        FETCH_SERVICE_SECTIONS: 'services/actions/FETCH_SERVICE_SECTIONS',
        FETCH_SERVICE_SECTION: 'services/actions/FETCH_SERVICE_SECTION',
        CREATE_SERVICE_SECTION: 'services/actions/CREATE_SERVICE_SECTION',
        DELETE_SERVICE_SECTION: 'services/actions/DELETE_SERVICE_SECTION',
        UPDATE_SERVICE_SECTION: 'services/actions/UPDATE_SERVICE_SECTION',
        FETCH_SERVICE_ROWS: 'services/actions/FETCH_SERVICE_ROWS',
        CREATE_SERVICE_ROW: 'services/actions/CREATE_SERVICE_ROW',
        DELETE_SERVICE_ROW: 'services/actions/DELETE_SERVICE_ROW',
        UPDATE_SERVICE_ROW: 'services/actions/UPDATE_SERVICE_ROW',
        FETCH_SERVICE_COLUMNS: 'services/actions/FETCH_SERVICE_COLUMNS',
        CREATE_SERVICE_COLUMN: 'services/actions/CREATE_SERVICE_COLUMN',
        DELETE_SERVICE_COLUMN: 'services/actions/DELETE_SERVICE_COLUMN',
        UPDATE_SERVICE_COLUMN: 'services/actions/UPDATE_SERVICE_COLUMN',
        UPDATE_VIDEO: 'services/actions/UPDATE_VIDEO'
    }
};

const works = {
    mutations: {
        SET_WORKS: 'works/mutations/SET_WORKS',
        SET_IS_WORKS_FETCHED: 'works/mutations/SET_IS_WORKS_FETCHED',
        SET_WEBSITE_WORK: 'works/mutations/SET_WEBSITE_WORK',
        SET_IS_WEBSITE_WORK_FETCHED: 'works/mutations/SET_IS_WEBSITE_WORK_FETCHED',
        SET_HOME_PAGE_WORKS: 'works/mutations/SET_HOME_PAGE_WORKS',
        SET_IS_HOME_PAGE_WORKS_FETCHED: 'works/mutations/SET_IS_HOME_PAGE_WORKS_FETCHED',
        SET_WORK_SECTIONS: 'works/mutations/SET_WORK_SECTIONS',
        SET_IS_WORK_SECTIONS_FETCHED: 'works/mutations/SET_IS_WORK_SECTIONS_FETCHED',
        SET_WORK_SECTION: 'works/mutations/SET_WORK_SECTION',
        SET_IS_WORK_SECTION_FETCHED: 'works/mutations/SET_IS_WORK_SECTION_FETCHED',
        SET_WORK_ROWS: 'works/mutations/SET_WORK_ROWS',
        SET_IS_WORK_ROWS_FETCHED: 'works/mutations/SET_IS_WORK_ROWS_FETCHED',
        SET_WORK_COLUMNS: 'works/mutations/SET_WORK_COLUMNS',
        SET_WORK_COLUMN: 'works/mutations/SET_WORK_COLUMN',
        SET_IS_WORK_COLUMNS_FETCHED: 'works/mutations/SET_IS_WORK_COLUMNS_FETCHED',
        REMOVE_DELETED_WORK: 'works/mutations/REMOVE_DELETED_WORK',
        REMOVE_DELETED_WORK_SECTION: 'works/mutations/REMOVE_DELETED_WORK_SECTION',
        REMOVE_DELETED_WORK_ROW: 'works/mutations/REMOVE_DELETED_WORK_ROW',
        REMOVE_DELETED_WORK_COLUMN: 'works/mutations/REMOVE_DELETED_WORK_COLUMN',
    },
    actions: {
        FETCH_WORKS: 'works/actions/FETCH_WORKS',
        FETCH_WEBSITE_WORK: 'works/actions/FETCH_WEBSITE_WORK',
        FETCH_HOME_PAGE_WORKS: 'works/actions/FETCH_HOME_PAGE_WORKS',
        CREATE_WORK: 'works/actions/CREATE_WORK',
        DELETE_WORK: 'works/actions/DELETE_WORK',
        UPDATE_WORK: 'works/actions/UPDATE_WORK',
        FETCH_WORK_SECTIONS: 'works/actions/FETCH_WORK_SECTIONS',
        FETCH_WORK_SECTION: 'works/actions/FETCH_WORK_SECTION',
        CREATE_WORK_SECTION: 'works/actions/CREATE_WORK_SECTION',
        DELETE_WORK_SECTION: 'works/actions/DELETE_WORK_SECTION',
        UPDATE_WORK_SECTION: 'works/actions/UPDATE_WORK_SECTION',
        FETCH_WORK_ROWS: 'works/actions/FETCH_WORK_ROWS',
        CREATE_WORK_ROW: 'works/actions/CREATE_WORK_ROW',
        DELETE_WORK_ROW: 'works/actions/DELETE_WORK_ROW',
        UPDATE_WORK_ROW: 'works/actions/UPDATE_WORK_ROW',
        FETCH_WORK_COLUMNS: 'works/actions/FETCH_WORK_COLUMNS',
        CREATE_WORK_COLUMN: 'works/actions/CREATE_WORK_COLUMN',
        DELETE_WORK_COLUMN: 'works/actions/DELETE_WORK_COLUMN',
        UPDATE_WORK_COLUMN: 'works/actions/UPDATE_WORK_COLUMN',
        UPDATE_VIDEO: 'works/actions/UPDATE_VIDEO'
    }
};

export default {
    app,
    login,
    jobs,
    departments,
    services,
    works
};
