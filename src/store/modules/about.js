import * as APIs from "../../helpers/APIsHelper";
import types from "../types";

const state = {
  about: {},
  isAboutFetched: false,
  websiteAbout: {},
  isWebsiteAboutFetched: false,
  aboutSections: {},
  isAboutSectionsFetched: false,
  aboutSection: {},
  isAboutSectionFetched: false,
  aboutRows: [],
  isAboutRowsFetched: false,
  aboutRow: {},
  isAboutRowFetched: false
};

const mutations = {
  [types.about.mutations.SET_ABOUT]: (
    currentState,
    { about, requestSource }
  ) => {
    if (!about) return;
    if (requestSource !== "website") {
      const { sections, ...restOfData } = about;
      currentState.about = restOfData;
      currentState.aboutSections = sections;
    } else {
      const { data, paginatorInfo } = about;
      const oldData = currentState.about.data || [];
      currentState.about = {
        ...currentState.about,
        paginatorInfo,
        data: [...oldData, ...data]
      };
    }
  },
  [types.about.mutations.SET_IS_ABOUT_FETCHED]: (currentState, flag) => {
    currentState.isAboutFetched = flag;
  },
  [types.about.mutations.SET_WEBSITE_ABOUT]: (currentState, websiteAbout) => {
    const { sections, ...aboutData } = websiteAbout;
    if (sections.paginatorInfo.total === 0)
      currentState.websiteAbout = {
        ...aboutData,
        sections: {
          data: [],
          paginatorInfo: { hasMorePages: false }
        }
      };
    if (sections.paginatorInfo.total > 0 && !sections.data) {
      currentState.websiteAbout = {
        ...aboutData,
        sections: {
          data: [],
          paginatorInfo: { hasMorePages: true }
        }
      };
    }
    if (sections.paginatorInfo.total > 0 && sections.data) {
      const { data, paginatorInfo } = sections;
      const oldSections = currentState.websiteAbout.sections.data;
      currentState.websiteAbout = {
        ...currentState.websiteAbout,
        sections: {
          paginatorInfo,
          data: [...oldSections, ...data]
        }
      };
    }
  },
  [types.about.mutations.SET_IS_WEBSITE_ABOUT_FETCHED]: (
    currentState,
    flag
  ) => {
    currentState.isWebsiteAboutFetched = flag;
  },
  [types.about.mutations.SET_ABOUT_SECTIONS]: (currentState, about) => {
    currentState.aboutSections = about;
  },
  [types.about.mutations.SET_IS_ABOUT_SECTIONS_FETCHED]: (
    currentState,
    flag
  ) => {
    currentState.isAboutSectionsFetched = flag;
  },
  [types.about.mutations.SET_ABOUT_SECTION]: (currentState, about) => {
    currentState.aboutSection = about;
  },
  [types.about.mutations.SET_IS_ABOUT_SECTION_FETCHED]: (
    currentState,
    flag
  ) => {
    currentState.isAboutSectionFetched = flag;
  },
  [types.about.mutations.SET_ABOUT_ROWS]: (currentState, about) => {
    currentState.aboutRows = about;
  },
  [types.about.mutations.SET_IS_ABOUT_ROWS_FETCHED]: (currentState, flag) => {
    currentState.isAboutRowsFetched = flag;
  },
  [types.about.mutations.SET_ABOUT_COLUMNS]: (currentState, about) => {
    currentState.aboutRow = about;
  },
  [types.about.mutations.SET_IS_ABOUT_COLUMNS_FETCHED]: (
    currentState,
    flag
  ) => {
    currentState.isAboutRowFetched = flag;
  },
  [types.about.mutations.REMOVE_DELETED_ABOUT_SECTION]: (
    currentState,
    index
  ) => {
    currentState.aboutSections.data.splice(index, 1);
  },
  [types.about.mutations.REMOVE_DELETED_ABOUT_ROW]: (currentState, index) => {
    currentState.aboutRows.rows.splice(index, 1);
  },
  [types.about.mutations.REMOVE_DELETED_ABOUT_COLUMN]: (
    currentState,
    index
  ) => {
    currentState.aboutRow.columns.splice(index, 1);
  }
};

const showHeaderAndFooter = (commit, flag) => {
  commit(types.app.mutations.SET_SHOW_HEADER_FLAG, flag);
  commit(types.app.mutations.SET_SHOW_FOOTER_FLAG, flag);
};

const fetchAboutData = async ({ commit }, payload) => {
  const { data, requestSource, showSpinner } = payload;
  if (showSpinner) commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchAbout(data);
    commit(types.about.mutations.SET_ABOUT, { about: response, requestSource });
    commit(types.about.mutations.SET_IS_ABOUT_FETCHED, true);
    if (requestSource === "website")
      commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true);
    else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.about.mutations.SET_IS_ABOUT_FETCHED, false);
    throw error;
  }
};

const fetchWebsiteAboutData = async ({ commit }, payload) => {
  const { data, requestSource, showSpinner } = payload;
  if (showSpinner) commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchWebsiteAbout(data);
    commit(types.about.mutations.SET_WEBSITE_ABOUT, response);
    commit(types.about.mutations.SET_IS_WEBSITE_ABOUT_FETCHED, true);
    if (requestSource === "website")
      commit(types.app.mutations.SET_SHOW_HEADER_FLAG, true);
    else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.about.mutations.SET_IS_WEBSITE_ABOUT_FETCHED, false);
    throw error;
  }
};

const fetchAboutRowData = async ({ commit }, payload) => {
  const { sectionId, requestSource } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchRows(sectionId);
    commit(types.about.mutations.SET_ABOUT_ROWS, response);
    commit(types.about.mutations.SET_IS_ABOUT_ROWS_FETCHED, true);
    if (requestSource === "website") showHeaderAndFooter(commit, true);
    else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.about.mutations.SET_IS_ABOUT_ROWS_FETCHED, false);
    throw error;
  }
};

const createAboutData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.createAbout(data);
    commit(types.about.mutations.SET_ABOUT, {
      about: response,
      requestSource: "dashboard"
    });
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateAboutData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.updateAbout(data);
    commit(types.about.mutations.SET_ABOUT, {
      about: response,
      requestSource: "dashboard"
    });
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    return response;
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const createAboutSectionData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.createSection(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const createAboutRowData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.createRow(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const fetchColumnsData = async ({ commit }, payload) => {
  const { rowId, requestSource } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    const response = await APIs.fetchColumns(rowId);
    commit(types.about.mutations.SET_ABOUT_COLUMNS, response);
    commit(types.about.mutations.SET_IS_ABOUT_COLUMNS_FETCHED, true);
    if (requestSource === "website") showHeaderAndFooter(commit, true);
    else showHeaderAndFooter(commit, false);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    commit(types.about.mutations.SET_IS_ABOUT_COLUMNS_FETCHED, false);
    throw error;
  }
};

const createAboutColumnData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.createColumn(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteAboutRowData = async ({ commit }, payload) => {
  const { rowId, locationInDataArray } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteRow(rowId);
    commit(types.about.mutations.REMOVE_DELETED_ABOUT_ROW, locationInDataArray);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteAboutSectionData = async ({ commit }, payload) => {
  const { sectionId, locationInDataArray } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteSection(sectionId);
    commit(
      types.about.mutations.REMOVE_DELETED_ABOUT_SECTION,
      locationInDataArray
    );
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const deleteAboutColumnData = async ({ commit }, payload) => {
  const { columnId, locationInDataArray } = payload;
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.deleteColumn(columnId);
    commit(
      types.about.mutations.REMOVE_DELETED_ABOUT_COLUMN,
      locationInDataArray
    );
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateAboutSectionData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.updateSection(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateAboutRowData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.updateRow(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateAboutColumnData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.updateColumn(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const updateVideoData = async ({ commit }, data) => {
  commit(types.app.mutations.SET_SPINNER_FLAG, true);
  try {
    await APIs.updateVideo(data);
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
  } catch (error) {
    commit(types.app.mutations.SET_SPINNER_FLAG, false);
    throw error;
  }
};

const actions = {
  [types.about.actions.FETCH_ABOUT]: fetchAboutData,
  [types.about.actions.FETCH_WEBSITE_ABOUT]: fetchWebsiteAboutData,
  [types.about.actions.CREATE_ABOUT]: createAboutData,
  [types.about.actions.UPDATE_ABOUT]: updateAboutData,
  [types.about.actions.CREATE_ABOUT_SECTION]: createAboutSectionData,
  [types.about.actions.DELETE_ABOUT_SECTION]: deleteAboutSectionData,
  [types.about.actions.UPDATE_ABOUT_SECTION]: updateAboutSectionData,
  [types.about.actions.FETCH_ABOUT_ROWS]: fetchAboutRowData,
  [types.about.actions.CREATE_ABOUT_ROW]: createAboutRowData,
  [types.about.actions.DELETE_ABOUT_ROW]: deleteAboutRowData,
  [types.about.actions.UPDATE_ABOUT_ROW]: updateAboutRowData,
  [types.about.actions.FETCH_ABOUT_COLUMNS]: fetchColumnsData,
  [types.about.actions.CREATE_ABOUT_COLUMN]: createAboutColumnData,
  [types.about.actions.DELETE_ABOUT_COLUMN]: deleteAboutColumnData,
  [types.about.actions.UPDATE_ABOUT_COLUMN]: updateAboutColumnData,
  [types.about.actions.UPDATE_VIDEO]: updateVideoData
};

export default {
  state,
  mutations,
  actions
};
