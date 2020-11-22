import axios from 'axios';
import { QUERY, MUTATION } from '../graphql';
import { getTokenCookie } from './CookieHelper';
import BASE_URL from '../constants/APIs';

const fetchDepartments = async () => {
  try {
    const response = await request({
      query: QUERY.DEPARTMENTS(),
    });
    return response.data
  } catch (error) {
    return false;
  }
}

const fetchJobs = async () => {
  try {
    const response = await request({
      query: QUERY.JOBS(),
    });
    return response.data
  } catch (error) {
    return false;
  }
}

const fetchJob = async (jobId) => {
  try {
    const response = await request({
      query: QUERY.JOB(jobId),
    });
    return response.data
  } catch (error) {
    return false;
  }
}

const fetchJobApplication = async (jobId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.JOB_APPLICATION(jobId),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const adminLogin = async (credentials) => {
  try {
    const response = await request({
      query: MUTATION.LOGIN(credentials),
    });
    return response.data.data.login
  } catch (error) {
    throw error;
  }
}

const createDepartment = async (name) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.CREATE_DEPARTMENT(name),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const deleteDepartment = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_DEPARTMENT(id),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const updateDepartment = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_DEPARTMENT(data),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const createJob = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.CREATE_JOB(data),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const deleteJob = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_JOB(id),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const updateJob = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_JOB(data),
    }, token);
    return response.data
  } catch (error) {
    return false;
  }
}

const applyJob = async (data) => {
  const { resume, ...applicantInfo } = data;
  try {
    const response = await request({
      query: MUTATION.APPLY_JOB(applicantInfo),
      variables: {
        file: resume
      }
    });
    return response.data
  } catch (error) {
    return false;
  }
}

export {
  fetchDepartments,
  fetchJobs,
  fetchJob,
  fetchJobApplication,
  adminLogin,
  createDepartment,
  deleteDepartment,
  updateDepartment,
  createJob,
  deleteJob,
  updateJob,
  applyJob
}

const request = async (data, token) => {
  let response;
  if (!token)
    response = await axios.post(BASE_URL, {
      ...data
    });
  else response = await axios.post(BASE_URL, {
    ...data
  }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.data.errors)
    throw new Error(response.data.errors[0].message);

  return response;
}