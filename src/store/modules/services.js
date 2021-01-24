import * as APIs from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    services: {},
    isServicesFetched: false,
    websiteService: {},
    isWebsiteServiceFetched: false,
    serviceSections: {},
    isServiceSectionsFetched: false,
    serviceSection: {},
    isServiceSectionFetched: false,
    serviceRows: [],
    isServiceRowsFetched: false,
    serviceRow: {},
    isServiceRowFetched: false,
    homePageServices: [],
    isHomePageServicesFetched: false,
}

const mutations = {
    [types.services.mutations.SET_SERVICES]: (currentState, { services, requestSource }) => {
        if (requestSource !== 'website') currentState.services = services
        else {
            const { data, paginatorInfo } = services
            const oldData = currentState.services.data || []
            currentState.services = {
                ...currentState.services, paginatorInfo,
                data: [...oldData, ...data]
            }
        }
    },
    [types.services.mutations.SET_IS_SERVICES_FETCHED]: (currentState, flag) => {
        currentState.isServicesFetched = flag;
    },
    [types.services.mutations.SET_WEBSITE_SERVICE]: (currentState, websiteService) => {
        const { sections, ...serviceData } = websiteService
        if (!sections)
            currentState.websiteService = { ...serviceData, sections: { data: [] } }
        else {
            const { data, paginatorInfo } = sections
            const oldSections = currentState.websiteService.sections.data
            currentState.websiteService = {
                ...currentState.websiteService, sections: {
                    paginatorInfo,
                    data: [...oldSections, ...data]
                }
            }
        }
    },
    [types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED]: (currentState, flag) => {
        currentState.isWebsiteServiceFetched = flag;
    },
    [types.services.mutations.SET_HOME_PAGE_SERVICES]: (currentState, services) => {
        currentState.homePageServices = services;
    },
    [types.services.mutations.SET_IS_HOME_PAGE_SERVICES_FETCHED]: (currentState, flag) => {
        currentState.isHomePageServicesFetched = flag;
    },
    [types.services.mutations.SET_SERVICE_SECTIONS]: (currentState, services) => {
        currentState.serviceSections = services;
    },
    [types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED]: (currentState, flag) => {
        currentState.isServiceSectionsFetched = flag;
    },
    [types.services.mutations.SET_SERVICE_SECTION]: (currentState, services) => {
        currentState.serviceSection = services;
    },
    [types.services.mutations.SET_IS_SERVICE_SECTION_FETCHED]: (currentState, flag) => {
        currentState.isServiceSectionFetched = flag;
    },
    [types.services.mutations.SET_SERVICE_ROWS]: (currentState, services) => {
        currentState.serviceRows = services;
    },
    [types.services.mutations.SET_IS_SERVICE_ROWS_FETCHED]: (currentState, flag) => {
        currentState.isServiceRowsFetched = flag;
    },
    [types.services.mutations.SET_SERVICE_COLUMNS]: (currentState, services) => {
        currentState.serviceRow = services;
    },
    [types.services.mutations.SET_IS_SERVICE_COLUMNS_FETCHED]: (currentState, flag) => {
        currentState.isServiceRowFetched = flag;
    },
    [types.services.mutations.REMOVE_DELETED_SERVICE]: (currentState, index) => {
        currentState.services.data.splice(index, 1);
    },
    [types.services.mutations.REMOVE_DELETED_SERVICE_SECTION]: (currentState, index) => {
        currentState.serviceSections.sections.data.splice(index, 1);
    },
    [types.services.mutations.REMOVE_DELETED_SERVICE_ROW]: (currentState, index) => {
        currentState.serviceRows.rows.splice(index, 1);
    },
    [types.services.mutations.REMOVE_DELETED_SERVICE_COLUMN]: (currentState, index) => {
        currentState.serviceRow.columns.splice(index, 1);
    },
}

const showHeaderAndFooter = (commit, flag) => {
    commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag)
    commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag)
}

const fetchServicesData = async ({ commit }, payload) => {
    const { data, requestSource, showSpinner } = payload;
    if (showSpinner)
        commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchServices(data)
        commit(types.services.mutations.SET_SERVICES, { services: response, requestSource })
        commit(types.services.mutations.SET_IS_SERVICES_FETCHED, true)
        if (requestSource === 'website')
            commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true)
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_SERVICES_FETCHED, false)
        throw error.message
    }
};

const fetchWebsiteServiceData = async ({ commit }, payload) => {
    const { data, requestSource, showSpinner } = payload;
    if (showSpinner)
        commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchWebsiteServices(data)
        commit(types.services.mutations.SET_WEBSITE_SERVICE, response)
        commit(types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED, true)
        if (requestSource === 'website')
            commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true)
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED, false)
        throw error.message
    }
};

const fetchHomePageServiceData = async ({ commit }) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchHomePageServices()
        commit(types.services.mutations.SET_HOME_PAGE_SERVICES, response)
        commit(types.services.mutations.SET_IS_HOME_PAGE_SERVICES_FETCHED, true)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_HOME_PAGE_SERVICES_FETCHED, false)
        throw error.message
    }
};

const fetchServiceSectionsData = async ({ commit }, payload) => {
    const { id, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchServiceSections(id)
        commit(types.services.mutations.SET_SERVICE_SECTIONS, response)
        commit(types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED, false)
        throw error.message
    }
};

const fetchServiceRowData = async ({ commit }, payload) => {
    const { sectionId, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchRows(sectionId)
        commit(types.services.mutations.SET_SERVICE_ROWS, response)
        commit(types.services.mutations.SET_IS_SERVICE_ROWS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_SERVICE_ROWS_FETCHED, false)
        throw error.message
    }
};

const createServiceData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createService(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const createServiceSectionData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createSection(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const createServiceRowData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createRow(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const fetchColumnsData = async ({ commit }, payload) => {
    const { rowId, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchColumns(rowId)
        commit(types.services.mutations.SET_SERVICE_COLUMNS, response)
        commit(types.services.mutations.SET_IS_SERVICE_COLUMNS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.services.mutations.SET_IS_SERVICE_COLUMNS_FETCHED, false)
        throw error.message
    }
};

const createServiceColumnData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createColumn(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteServiceData = async ({ commit }, payload) => {
    const { id, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteService(id)
        commit(types.services.mutations.REMOVE_DELETED_SERVICE, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteServiceRowData = async ({ commit }, payload) => {
    const { rowId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteRow(rowId)
        commit(types.services.mutations.REMOVE_DELETED_SERVICE_ROW, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteServiceSectionData = async ({ commit }, payload) => {
    const { sectionId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteSection(sectionId)
        commit(types.services.mutations.REMOVE_DELETED_SERVICE_SECTION, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteServiceColumnData = async ({ commit }, payload) => {
    const { columnId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteColumn(columnId)
        commit(types.services.mutations.REMOVE_DELETED_SERVICE_COLUMN, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateServiceData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateService(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateServiceSectionData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateSection(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateServiceRowData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateRow(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateServiceColumnData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateColumn(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateVideoData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateVideo(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const actions = {
    [types.services.actions.FETCH_SERVICES]: fetchServicesData,
    [types.services.actions.FETCH_WEBSITE_SERVICE]: fetchWebsiteServiceData,
    [types.services.actions.FETCH_HOME_PAGE_SERVICES]: fetchHomePageServiceData,
    [types.services.actions.CREATE_SERVICE]: createServiceData,
    [types.services.actions.DELETE_SERVICE]: deleteServiceData,
    [types.services.actions.UPDATE_SERVICE]: updateServiceData,
    [types.services.actions.FETCH_SERVICE_SECTIONS]: fetchServiceSectionsData,
    [types.services.actions.CREATE_SERVICE_SECTION]: createServiceSectionData,
    [types.services.actions.DELETE_SERVICE_SECTION]: deleteServiceSectionData,
    [types.services.actions.UPDATE_SERVICE_SECTION]: updateServiceSectionData,
    [types.services.actions.FETCH_SERVICE_ROWS]: fetchServiceRowData,
    [types.services.actions.CREATE_SERVICE_ROW]: createServiceRowData,
    [types.services.actions.DELETE_SERVICE_ROW]: deleteServiceRowData,
    [types.services.actions.UPDATE_SERVICE_ROW]: updateServiceRowData,
    [types.services.actions.FETCH_SERVICE_COLUMNS]: fetchColumnsData,
    [types.services.actions.CREATE_SERVICE_COLUMN]: createServiceColumnData,
    [types.services.actions.DELETE_SERVICE_COLUMN]: deleteServiceColumnData,
    [types.services.actions.UPDATE_SERVICE_COLUMN]: updateServiceColumnData,
    [types.services.actions.UPDATE_VIDEO]: updateVideoData,
};

export default {
    state,
    mutations,
    actions
};
