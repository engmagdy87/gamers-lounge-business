const app = {
    mutations: {
        SET_SPINNER_FLAG: 'app/mutations/SET_SPINNER_FLAG',
        SET_SHOW_HEADER_AND_FOOTER_FLAG: 'app/mutations/SET_SHOW_HEADER_AND_FOOTER_FLAG',
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
        SET_IS_SERVICE_SECTIONS_FETCHED: 'services/mutations/SET_IS_SERVICE_SECTIONS_FETCHED',
        SET_SERVICE_SECTIONS: 'services/mutations/SET_SERVICE_SECTIONS',
        SET_IS_SERVICES_FETCHED: 'services/mutations/SET_IS_SERVICES_FETCHED',
        REMOVE_DELETED_SERVICE: 'services/mutations/REMOVE_DELETED_SERVICE',
        REMOVE_DELETED_SERVICE_SECTION: 'services/mutations/REMOVE_DELETED_SERVICE_SECTION',
    },
    actions: {
        FETCH_SERVICES: 'services/actions/FETCH_SERVICES',
        CREATE_SERVICE: 'services/actions/CREATE_SERVICE',
        DELETE_SERVICE: 'services/actions/DELETE_SERVICE',
        UPDATE_SERVICE: 'services/actions/UPDATE_SERVICE',
        FETCH_SERVICE_SECTION: 'services/actions/FETCH_SERVICE_SECTION',
        CREATE_SERVICE_SECTION: 'services/actions/CREATE_SERVICE_SECTION',
        DELETE_SERVICE_SECTION: 'services/actions/DELETE_SERVICE_SECTION',
        UPDATE_SERVICE_SECTION: 'services/actions/UPDATE_SERVICE_SECTION',
    }
};

export default {
    app,
    login,
    jobs,
    departments,
    services
};
