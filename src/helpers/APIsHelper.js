import axios from 'axios';
import { QUERY, MUTATION } from '../graphql';
import { getTokenCookie } from './CookieHelper';
import BASE_URL from '../constants/APIs';
import { isArray } from 'core-js/fn/array';

const fetchDepartments = async () => {
  try {
    const response = await request({
      query: QUERY.DEPARTMENTS(),
    });
    return response.data.data.departments
  } catch (error) {
    throw error;
  }
}

const fetchJobs = async () => {
  try {
    const response = await request({
      query: QUERY.JOBS(),
    });
    return response.data.data.jobs
  } catch (error) {
    throw error;
  }
}

const fetchJob = async (jobId) => {
  try {
    const response = await request({
      query: QUERY.JOB(jobId),
    });
    return response.data.data.job
  } catch (error) {
    throw error;
  }
}

const fetchDashboardJob = async (jobId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.JOB(jobId),
    }, token);
    return response.data.data.job
  } catch (error) {
    throw error;
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
    return response.data.data.createDepartment
  } catch (error) {
    throw error;
  }
}

const deleteDepartment = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_DEPARTMENT(id),
    }, token);
    return response.data.data.deleteDepartment
  } catch (error) {
    throw error;
  }
}

const updateDepartment = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_DEPARTMENT(data),
    }, token);
    return response.data.data.updateDepartment
  } catch (error) {
    throw error;
  }
}

const createJob = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.CREATE_JOB(data),
    }, token);
    return response.data.data.createJob
  } catch (error) {
    throw error;
  }
}

const deleteJob = async (jobId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_JOB(jobId),
    }, token);
    return response.data.data.deleteJob
  } catch (error) {
    throw error;
  }
}

const updateJob = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_JOB(data),
    }, token);
    return response.data.data.updateJob
  } catch (error) {
    throw error;
  }
}

const applyJob = async (data) => {
  const { resumeFile, ...applicantInfo } = data;

  const query = MUTATION.APPLY_JOB(applicantInfo);

  try {
    const response = await requestMultipart(constructMultipartFormData(resumeFile, query));
    return response.data.data.applyJob
  } catch (error) {
    throw error;
  }
}

export {
  fetchDepartments,
  fetchJobs,
  fetchJob,
  fetchDashboardJob,
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
    throw new Error(JSON.stringify(response.data.errors))

  return response;
}

const requestMultipart = async (data, token) => {
  let response;
  if (!token)
    response = await axios.post(BASE_URL, data);
  else response = await axios.post(BASE_URL, data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.data.errors)
    throw new Error(JSON.stringify(response.data.errors))

  return response;
}

const constructMultipartFormData = (files, query) => {
  const formData = new FormData()
  let map = {};
  let glQuery;

  if (isArray(files)) {
    glQuery = {
      query,
      variables: {
        file: files.map(() => null) // file key may be renamed in GraphQL schema in future
      }
    }
    files.forEach((file, index) => {
      map = { ...map, index: ["variables.file." + index] }
    })
    formData.append('operations', JSON.stringify(glQuery))
    formData.append('map', JSON.stringify(map))
    files.forEach((file, index) => {
      formData.append(index.toString(), file)
    })

  }
  else {
    glQuery = {
      query,
      variables: {
        file: null
      }
    }
    map = { 0: ["variables.file"] }
    formData.append('operations', JSON.stringify(glQuery))
    formData.append('map', JSON.stringify(map))
    formData.append('0', files)
  }


  return formData
}
