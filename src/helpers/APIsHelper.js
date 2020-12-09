import axios from 'axios';
import { QUERY, MUTATION } from '../graphql';
import { getTokenCookie } from './CookieHelper';
import BASE_URL from '../constants/APIs';

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
    const response = await requestMultipart(constructFormDataForSingleFile(resumeFile, query));
    return response.data.data.applyJob
  } catch (error) {
    throw error;
  }
}

const fetchServices = async () => {
  try {
    const response = await request({
      query: QUERY.SERVICES(),
    });
    return response.data.data.services
  } catch (error) {
    throw error;
  }
}

const createService = async (data) => {
  const { imagesData, ...serviceInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.CREATE_SERVICE(serviceInfo);

  try {
    const response = await requestMultipart(constructFormDataForMultipleFile(imagesData, query), token);
    return response.data.data.applyJob
  } catch (error) {
    throw error;
  }
}

const updateService = async (data) => {
  let response;
  const { imagesData, ...serviceInfo } = data;
  const token = getTokenCookie()
  try {
    const query = MUTATION.UPDATE_SERVICE(serviceInfo, imagesData)
    if (imagesData)
      response = await requestMultipart(constructFormDataForMultipleFile(imagesData, query), token);
    else response = await request({
      query
    }, token);
    return response.data.data.updateService
  } catch (error) {
    throw error;
  }
}

const deleteService = async (serviceId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_SERVICE(serviceId),
    }, token);
    return response.data.data.deleteService
  } catch (error) {
    throw error;
  }
}

const deleteServiceSection = async (serviceSectionId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_SERVICE_SECTION(serviceSectionId),
    }, token);
    return response.data.data.deleteServiceSection
  } catch (error) {
    throw error;
  }
}

const fetchServiceSections = async (serviceId) => {
  try {
    const response = await request({
      query: QUERY.SERVICE(serviceId),
    });
    return response.data.data.service
  } catch (error) {
    throw error;
  }
}

const createServiceSection = async (data) => {
  const { imagesData, videosData, ...sectionInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.CREATE_SERVICE_SECTION(sectionInfo, imagesData, videosData);

  try {
    const response = await requestMultipart(constructFormDataForArrayOfFiles({ ...imagesData, ...videosData }, query), token);
    return response.data.data.createServiceSection
  } catch (error) {
    throw error;
  }
}

const updateServiceSection = async (data) => {
  const { imagesData, videosData, ...sectionInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.UPDATE_SERVICE_SECTION(sectionInfo, imagesData, videosData);

  try {
    const response = await requestMultipart(constructFormDataForArrayOfFiles({ ...imagesData, ...videosData }, query), token);
    return response.data.data.updateServiceSection
  } catch (error) {
    throw error;
  }
}

const deleteImage = async (imageId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_IMAGE(imageId),
    }, token);
    return response.data.data.deleteImage
  } catch (error) {
    throw error;
  }
}

const deleteVideo = async (videoId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_VIDEO(videoId),
    }, token);
    return response.data.data.deleteImage
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
  applyJob,
  fetchServices,
  createService,
  updateService,
  deleteService,
  fetchServiceSections,
  createServiceSection,
  updateServiceSection,
  deleteServiceSection,
  deleteImage,
  deleteVideo,
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

const constructFormDataForSingleFile = (file, query) => {
  const formData = new FormData()
  let map = {};
  let glQuery;

  glQuery = {
    query,
    variables: {
      file: null
    }
  }
  map = { 0: ["variables.file"] }
  formData.append('operations', JSON.stringify(glQuery))
  formData.append('map', JSON.stringify(map))
  formData.append('0', file)

  return formData
}
const constructFormDataForMultipleFile = (files, query) => {
  const formData = new FormData()
  let map = {};
  let queryVariables = {}
  let glQuery;

  Object.keys(files).forEach((file, index) => {
    queryVariables = { ...queryVariables, [file]: null }
    map = { ...map, [index]: ["variables." + file] }
    formData.append(index.toString(), files[file])
  })

  glQuery = {
    query,
    variables: {
      ...queryVariables
    }
  }
  formData.append('operations', JSON.stringify(glQuery))
  formData.append('map', JSON.stringify(map))

  return formData
}

const constructFormDataForArrayOfFiles = (files, query) => {
  const formData = new FormData()
  let map = {};
  let queryVariables = {}
  let glQuery;

  const keys = Object.keys(files)

  keys.forEach((key) => {
    queryVariables = { ...queryVariables, [key]: Object.keys(files[key]).map(() => null) }
    const mapLength = Object.keys(map).length
    Object.values(files[key]).forEach((content, i) => {
      map = { ...map, [i + mapLength]: ["variables." + key + '.' + i] }
      formData.append((i + mapLength).toString(), content)
    })
  })

  glQuery = {
    query,
    variables: {
      ...queryVariables
    }
  }

  formData.append('operations', JSON.stringify(glQuery))
  formData.append('map', JSON.stringify(map))

  return formData
}
