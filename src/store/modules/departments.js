import * as APIs from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    departments: [],
    isDepartmentsDataFetched: false
}

const mutations = {
    [types.departments.mutations.SET_DEPARTMENTS]: (currentState, departments) => {
        currentState.departments = departments;
    },
    [types.departments.mutations.SET_IS_DEPARTMENTS_FETCHED]: (currentState, flag) => {
        currentState.isDepartmentsDataFetched = flag;
    },
    [types.departments.mutations.REMOVE_DELETED_DEPARTMENT]: (currentState, index) => {
        currentState.departments.splice(index, 1);
    },
}

const fetchDepartmentsData = async ({ commit }) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchDepartments()
        commit(types.departments.mutations.SET_DEPARTMENTS, response)
        commit(types.departments.mutations.SET_IS_DEPARTMENTS_FETCHED, true)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.departments.mutations.SET_IS_DEPARTMENTS_FETCHED, false)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error
    }
};

const createDepartmentData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createDepartment(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error
    }
};

const deleteDepartmentData = async ({ commit }, payload) => {
    const { departmentId, locationInDataArray } = payload
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteDepartment(departmentId)
        commit(types.departments.mutations.REMOVE_DELETED_DEPARTMENT, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error
    }
};

const updateDepartmentData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateDepartment(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error
    }
};

const actions = {
    [types.departments.actions.FETCH_DEPARTMENTS]: fetchDepartmentsData,
    [types.departments.actions.CREATE_DEPARTMENT]: createDepartmentData,
    [types.departments.actions.DELETE_DEPARTMENT]: deleteDepartmentData,
    [types.departments.actions.UPDATE_DEPARTMENT]: updateDepartmentData,
};

export default {
    state,
    mutations,
    actions
};
