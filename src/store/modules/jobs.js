import * as APIs from '../../helpers/APIsHelper';
import types from '../types';

const state = {
    jobs: [],
    isJobsFetched: false,
    job: {},
    isJobFetched: false,
    jobApplication: {},
    isJobApplicationFetched: false,
}

const mutations = {
    [types.jobs.mutations.SET_JOBS]: (currentState, jobs) => {
        currentState.jobs = jobs;
    },
    [types.jobs.mutations.SET_IS_JOBS_FETCHED]: (currentState, flag) => {
        currentState.isJobsFetched = flag;
    },
    [types.jobs.mutations.SET_JOB]: (currentState, job) => {
        currentState.job = job;
    },
    [types.jobs.mutations.SET_IS_JOB_FETCHED]: (currentState, flag) => {
        currentState.isJobFetched = flag;
    },
    [types.jobs.mutations.REMOVE_DELETED_JOB]: (currentState, index) => {
        currentState.jobs.splice(index, 1);
    },
}

const fetchJobsData = async ({ commit }, requestSource) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await APIs.fetchJobs()
        commit(types.jobs.mutations.SET_JOBS, response.data)
        commit(types.jobs.mutations.SET_IS_JOBS_FETCHED, true)
        if (requestSource === 'website')
            commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, true);
        else commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, false);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.jobs.mutations.SET_IS_JOBS_FETCHED, false)
        throw error.message
    }
};

const fetchJobData = async ({ commit }, { jobId, requestSource }) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        let response;
        if (requestSource === 'website') {
            response = await APIs.fetchJob(jobId)
            commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, true);
        }
        else {
            response = await APIs.fetchDashboardJob(jobId)
            commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, false);
        }
        commit(types.jobs.mutations.SET_JOB, response)
        commit(types.jobs.mutations.SET_IS_JOB_FETCHED, true)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.jobs.mutations.SET_IS_JOB_FETCHED, false)
        throw error.message
    }
};

const createJobData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.createJob(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteJobData = async ({ commit }, payload) => {
    const { jobId, locationInDataArray } = payload;
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.deleteJob(jobId)
        commit(types.jobs.mutations.REMOVE_DELETED_JOB, locationInDataArray);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateJobData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.updateJob(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const applyJobData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await APIs.applyJob(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const actions = {
    [types.jobs.actions.FETCH_JOBS]: fetchJobsData,
    [types.jobs.actions.FETCH_JOB]: fetchJobData,
    [types.jobs.actions.CREATE_JOB]: createJobData,
    [types.jobs.actions.DELETE_JOB]: deleteJobData,
    [types.jobs.actions.UPDATE_JOB]: updateJobData,
    [types.jobs.actions.APPLY_JOB]: applyJobData,
};

export default {
    state,
    mutations,
    actions
};
