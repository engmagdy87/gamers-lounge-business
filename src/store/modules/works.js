import * as APIs from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    works: {},
    isWorksFetched: false,
    websiteWork: {},
    isWebsiteWorkFetched: false,
    workSections: {},
    isWorkSectionsFetched: false,
    workSection: {},
    isWorkSectionFetched: false,
    workRows: [],
    isWorkRowsFetched: false,
    workRow: {},
    isWorkRowFetched: false,
    homePageWorks: [],
    isHomePageWorksFetched: false,
}

const mutations = {
    [types.works.mutations.SET_WORKS]: (currentState, { works, requestSource }) => {
        if (requestSource !== 'website') currentState.works = works
        else {
            const { data, paginatorInfo } = works
            const oldData = currentState.works.data || []
            currentState.works = {
                ...currentState.works, paginatorInfo,
                data: [...oldData, ...data]
            }
        }
    },
    [types.works.mutations.SET_IS_WORKS_FETCHED]: (currentState, flag) => {
        currentState.isWorksFetched = flag;
    },
    [types.works.mutations.SET_WEBSITE_WORK]: (currentState, websiteWork) => {
        const { sections, ...workData } = websiteWork
        if (!sections)
            currentState.websiteWork = { ...workData, sections: { data: [] } }
        else {
            const { data, paginatorInfo } = sections
            const oldSections = currentState.websiteWork.sections.data
            currentState.websiteWork = {
                ...currentState.websiteWork, sections: {
                    paginatorInfo,
                    data: [...oldSections, ...data]
                }
            }
        }
    },
    [types.works.mutations.SET_IS_WEBSITE_WORK_FETCHED]: (currentState, flag) => {
        currentState.isWebsiteWorkFetched = flag;
    },
    [types.works.mutations.SET_HOME_PAGE_WORKS]: (currentState, works) => {
        currentState.homePageWorks = works;
    },
    [types.works.mutations.SET_IS_HOME_PAGE_WORKS_FETCHED]: (currentState, flag) => {
        currentState.isHomePageWorksFetched = flag;
    },
    [types.works.mutations.SET_WORK_SECTIONS]: (currentState, works) => {
        currentState.workSections = works;
    },
    [types.works.mutations.SET_IS_WORK_SECTIONS_FETCHED]: (currentState, flag) => {
        currentState.isWorkSectionsFetched = flag;
    },
    [types.works.mutations.SET_WORK_SECTION]: (currentState, works) => {
        currentState.workSection = works;
    },
    [types.works.mutations.SET_IS_WORK_SECTION_FETCHED]: (currentState, flag) => {
        currentState.isWorkSectionFetched = flag;
    },
    [types.works.mutations.SET_WORK_ROWS]: (currentState, works) => {
        currentState.workRows = works;
    },
    [types.works.mutations.SET_IS_WORK_ROWS_FETCHED]: (currentState, flag) => {
        currentState.isWorkRowsFetched = flag;
    },
    [types.works.mutations.SET_WORK_COLUMNS]: (currentState, works) => {
        currentState.workRow = works;
    },
    [types.works.mutations.SET_IS_WORK_COLUMNS_FETCHED]: (currentState, flag) => {
        currentState.isWorkRowFetched = flag;
    },
    [types.works.mutations.REMOVE_DELETED_WORK]: (currentState, index) => {
        currentState.works.data.splice(index, 1);
    },
    [types.works.mutations.REMOVE_DELETED_WORK_SECTION]: (currentState, index) => {
        currentState.workSections.sections.data.splice(index, 1);
    },
    [types.works.mutations.REMOVE_DELETED_WORK_ROW]: (currentState, index) => {
        currentState.workRows.rows.splice(index, 1);
    },
    [types.works.mutations.REMOVE_DELETED_WORK_COLUMN]: (currentState, index) => {
        currentState.workRow.columns.splice(index, 1);
    },
}

const showHeaderAndFooter = (commit, flag) => {
    commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag)
    commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag)
}

const fetchWorksData = async ({ commit }, payload) => {
    const { data, requestSource, showSpinner } = payload;
    if (showSpinner)
        commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchWorks(data)
        commit(types.works.mutations.SET_WORKS, { works: response, requestSource })
        commit(types.works.mutations.SET_IS_WORKS_FETCHED, true)
        if (requestSource === 'website')
            commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true)
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.works.mutations.SET_IS_WORKS_FETCHED, false)
        throw error.message
    }
};

const fetchWebsiteWorkData = async ({ commit }, payload) => {
    const { data, requestSource, showSpinner } = payload;
    if (showSpinner)
        commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchWebsiteWork(data)
        commit(types.works.mutations.SET_WEBSITE_WORK, response)
        commit(types.works.mutations.SET_IS_WEBSITE_WORK_FETCHED, true)
        if (requestSource === 'website')
            commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true)
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.works.mutations.SET_IS_WEBSITE_WORK_FETCHED, false)
        throw error.message
    }
};

const fetchHomePageWorkData = async ({ commit }) => {
    try {
        const response = await APIs.fetchHomePageWork()
        commit(types.works.mutations.SET_HOME_PAGE_WORKS, response)
        commit(types.works.mutations.SET_IS_HOME_PAGE_WORKS_FETCHED, true)
    } catch (error) {
        commit(types.works.mutations.SET_IS_HOME_PAGE_WORKS_FETCHED, false)
        throw error.message
    }
};

const fetchWorkSectionsData = async ({ commit }, payload) => {
    const { id, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchWorkSections(id)
        commit(types.works.mutations.SET_WORK_SECTIONS, response)
        commit(types.works.mutations.SET_IS_WORK_SECTIONS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.works.mutations.SET_IS_WORK_SECTIONS_FETCHED, false)
        throw error.message
    }
};

const fetchWorkSectionData = async ({ commit }, payload) => {
    const { id, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchWorkSection(id)
        commit(types.works.mutations.SET_WORK_SECTION, response)
        commit(types.works.mutations.SET_IS_WORK_SECTION_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.works.mutations.SET_IS_WORK_SECTION_FETCHED, false)
        throw error.message
    }
};

const fetchWorkRowData = async ({ commit }, payload) => {
    const { sectionId, requestSource } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchRows(sectionId)
        commit(types.works.mutations.SET_WORK_ROWS, response)
        commit(types.works.mutations.SET_IS_WORK_ROWS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.works.mutations.SET_IS_WORK_ROWS_FETCHED, false)
        throw error.message
    }
};

const createWorkData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createWork(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const createWorkSectionData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createSection(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const createWorkRowData = async ({ commit }, data) => {
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
        commit(types.works.mutations.SET_WORK_COLUMNS, response)
        commit(types.works.mutations.SET_IS_WORK_COLUMNS_FETCHED, true)
        if (requestSource === 'website')
            showHeaderAndFooter(commit, true);
        else showHeaderAndFooter(commit, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.works.mutations.SET_IS_WORK_COLUMNS_FETCHED, false)
        throw error.message
    }
};

const createWorkColumnData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createColumn(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteWorkData = async ({ commit }, payload) => {
    const { id, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteWork(id)
        commit(types.works.mutations.REMOVE_DELETED_WORK, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteWorkRowData = async ({ commit }, payload) => {
    const { rowId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteRow(rowId)
        commit(types.works.mutations.REMOVE_DELETED_WORK_ROW, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteWorkSectionData = async ({ commit }, payload) => {
    const { sectionId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteSection(sectionId)
        commit(types.works.mutations.REMOVE_DELETED_WORK_SECTION, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteWorkColumnData = async ({ commit }, payload) => {
    const { columnId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteColumn(columnId)
        commit(types.works.mutations.REMOVE_DELETED_WORK_COLUMN, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateWorkData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateWork(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateWorkSectionData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateSection(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateWorkRowData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateRow(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateWorkColumnData = async ({ commit }, data) => {
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
    [types.works.actions.FETCH_WORKS]: fetchWorksData,
    [types.works.actions.FETCH_WEBSITE_WORK]: fetchWebsiteWorkData,
    [types.works.actions.FETCH_HOME_PAGE_WORKS]: fetchHomePageWorkData,
    [types.works.actions.CREATE_WORK]: createWorkData,
    [types.works.actions.DELETE_WORK]: deleteWorkData,
    [types.works.actions.UPDATE_WORK]: updateWorkData,
    [types.works.actions.FETCH_WORK_SECTIONS]: fetchWorkSectionsData,
    [types.works.actions.FETCH_WORK_SECTION]: fetchWorkSectionData,
    [types.works.actions.CREATE_WORK_SECTION]: createWorkSectionData,
    [types.works.actions.DELETE_WORK_SECTION]: deleteWorkSectionData,
    [types.works.actions.UPDATE_WORK_SECTION]: updateWorkSectionData,
    [types.works.actions.FETCH_WORK_ROWS]: fetchWorkRowData,
    [types.works.actions.CREATE_WORK_ROW]: createWorkRowData,
    [types.works.actions.DELETE_WORK_ROW]: deleteWorkRowData,
    [types.works.actions.UPDATE_WORK_ROW]: updateWorkRowData,
    [types.works.actions.FETCH_WORK_COLUMNS]: fetchColumnsData,
    [types.works.actions.CREATE_WORK_COLUMN]: createWorkColumnData,
    [types.works.actions.DELETE_WORK_COLUMN]: deleteWorkColumnData,
    [types.works.actions.UPDATE_WORK_COLUMN]: updateWorkColumnData,
    [types.works.actions.UPDATE_VIDEO]: updateVideoData,
};

export default {
    state,
    mutations,
    actions
};
