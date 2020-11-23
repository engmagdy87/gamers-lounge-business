import { applyJob, createJob, deleteJob, fetchJob, fetchJobApplication, fetchJobs, updateJob } from '../../helpers/APIsHelper';
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
    [types.jobs.mutations.SET_JOB_APPLICATION]: (currentState, jobApplication) => {
        currentState.jobApplication = jobApplication;
    },
    [types.jobs.mutations.SET_IS_JOB_APPLICATION_FETCHED]: (currentState, flag) => {
        currentState.isJobApplicationFetched = flag;
    },
}

const fetchJobsData = async ({ commit }) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await fetchJobs()
        commit(types.jobs.mutations.SET_JOBS, response)
        commit(types.jobs.mutations.SET_IS_JOBS_FETCHED, true)
        commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, true);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.jobs.mutations.SET_IS_JOBS_FETCHED, false)
        throw error.message
    }
};

const fetchJobData = async ({ commit }, jobId) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await fetchJob(jobId)
        commit(types.jobs.mutations.SET_JOB, response)
        commit(types.jobs.mutations.SET_IS_JOB_FETCHED, true)
        commit(types.app.mutations.SET_SHOW_HEADER_AND_FOOTER_FLAG, true);
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.jobs.mutations.SET_IS_JOB_FETCHED, false)
        throw error.message
    }
};

const fetchJobApplicationData = async ({ commit }, jobId) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        const response = await fetchJobApplication(jobId)
        commit(types.jobs.mutations.SET_JOB_APPLICATION, response)
        commit(types.jobs.mutations.SET_IS_JOB_APPLICATION_FETCHED, true)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        commit(types.jobs.mutations.SET_IS_JOB_APPLICATION_FETCHED, false)
        throw error.message
    }
};

const createJobData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await createJob(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const deleteJobData = async ({ commit }, jobId) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await deleteJob(jobId)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const updateJobData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await updateJob(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const applyJobData = async ({ commit }, data) => {
    commit(types.app.mutations.SET_SPINNER_FLAG, true)
    try {
        await applyJob(data)
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
    } catch (error) {
        commit(types.app.mutations.SET_SPINNER_FLAG, false)
        throw error.message
    }
};

const actions = {
    [types.jobs.actions.FETCH_JOBS]: fetchJobsData,
    [types.jobs.actions.FETCH_JOB]: fetchJobData,
    [types.jobs.actions.FETCH_JOB_APPLICATION]: fetchJobApplicationData,
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
