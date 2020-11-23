import { createDepartment, deleteDepartment, fetchDepartments, updateDepartment } from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    departments: [],
}

const mutations = {
    [types.departments.mutations.SET_DEPARTMENTS]: (currentState, departments) => {
        currentState.departments = departments;
    },
}

const fetchDepartmentsData = async ({ commit }) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await fetchDepartments()
        commit(types.departments.mutations.SET_DEPARTMENTS, response)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const createDepartmentData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await createDepartment(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteDepartmentData = async ({ commit }, jobId) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await deleteDepartment(jobId)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateDepartmentData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await updateDepartment(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
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
