import axios from 'axios';
import { QUERY, MUTATION } from '../graphql';
import { getTokenCookie } from './CookieHelper';
import BASE_URL from '../constants/APIs';
import { removeTokenCookie } from '../helpers/CookieHelper';

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

const fetchSponsors = async () => {
  try {
    const response = await request({
      query: QUERY.SPONSORS(),
    });
    return response.data.data.sponsors
  } catch (error) {
    throw error;
  }
}

const fetchWebsiteSponsors = async (data) => {
  try {
    const response = await request({
      query: QUERY.SPONSORS_WEBSITE(data),
    });
    return response.data.data.sponsors
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
    const response = await requestMultipart(constructFormDataForSingleFile(resumeFile, query, 'file'));
    return response.data.data.applyJob
  } catch (error) {
    throw error;
  }
}

const fetchServices = async (data) => {
  try {
    const response = await request({
      query: QUERY.SERVICES(data),
    });
    return response.data.data.services
  } catch (error) {
    throw error;
  }
}

const createService = async (data) => {
  const { imagesData, ...serviceInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.CREATE_SERVICE(serviceInfo, imagesData);

  try {
    const response = await requestMultipart(constructFormDataForMultipleFile(imagesData, query), token);
    return response.data.data.createService
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

const deleteService = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_SERVICE(id),
    }, token);
    return response.data.data.deleteService
  } catch (error) {
    throw error;
  }
}

const fetchServiceSections = async (id) => {
  try {
    const response = await request({
      query: QUERY.SERVICES_SECTIONS(id),
    });
    return response.data.data.service
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

const isUserAuthenticated = async () => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.IS_USER_AUTHENTICATED(),
    }, token);
    return response.data.data.me
  } catch (error) {
    throw error;
  }
}

//*************** */
const fetchWorks = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.WORKS(data),
    }, token);
    return response.data.data.works
  } catch (error) {
    throw error;
  }
}

const fetchWebsiteWork = async (data) => {
  try {
    const response = await request({
      query: QUERY.WORK_WEBSITE(data),
    });
    return response.data.data.work
  } catch (error) {
    throw error;
  }
}

const fetchWebsiteServices = async (data) => {
  try {
    const response = await request({
      query: QUERY.SERVICES_WEBSITE(data),
    });
    return response.data.data.service
  } catch (error) {
    throw error;
  }
}

const fetchHomePageWork = async () => {
  try {
    const response = await request({
      query: QUERY.HOME_PAGE_WORKS(),
    });
    return response.data.data.works.data
  } catch (error) {
    throw error;
  }
}

const fetchHomePageServices = async () => {
  try {
    const response = await request({
      query: QUERY.HOME_PAGE_SERVICES(),
    });
    return response.data.data.services.data
  } catch (error) {
    throw error;
  }
}

const fetchWorkSections = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.WORK_SECTIONS(id),
    }, token);
    return response.data.data.work
  } catch (error) {
    throw error;
  }
}

const fetchWorkSection = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.SECTION(id),
    }, token);
    return response.data.data.section
  } catch (error) {
    throw error;
  }
}

const fetchRows = async (sectionId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.ROWS(sectionId),
    }, token);
    return response.data.data.section
  } catch (error) {
    throw error;
  }
}

const fetchColumns = async (rowId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: QUERY.COLUMNS(rowId),
    }, token);
    return response.data.data.row
  } catch (error) {
    throw error;
  }
}

const createWork = async (data) => {
  const { imagesData, ...workInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.CREATE_WORK(workInfo, imagesData);

  try {
    const response = await requestMultipart(constructFormDataForMultipleFile(imagesData, query), token);
    return response.data.data.createWork
  } catch (error) {
    throw error;
  }
}

const updateWork = async (data) => {
  let response;
  const { imagesData, ...workInfo } = data;
  const token = getTokenCookie()
  try {
    const query = MUTATION.UPDATE_WORK(workInfo, imagesData)
    if (imagesData)
      response = await requestMultipart(constructFormDataForMultipleFile(imagesData, query), token);
    else response = await request({
      query
    }, token);
    return response.data.data.updateWork
  } catch (error) {
    throw error;
  }
}

const deleteWork = async (id) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_WORK(id),
    }, token);
    return response.data.data.deleteWork
  } catch (error) {
    throw error;
  }
}
const createSection = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.CREATE_SECTION(data),
    }, token);
    return response.data.data.createSection
  } catch (error) {
    throw error;
  }
}

const updateSection = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_SECTION(data),
    }, token);
    return response.data.data.updateSection
  } catch (error) {
    throw error;
  }
}

const deleteSection = async (sectionId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_SECTION(sectionId),
    }, token);
    return response.data.data.deleteSection
  } catch (error) {
    throw error;
  }
}

const createRow = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.CREATE_ROW(data),
    }, token);
    return response.data.data.createRow
  } catch (error) {
    throw error;
  }
}

const updateRow = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_ROW(data),
    }, token);
    return response.data.data.updateRow
  } catch (error) {
    throw error;
  }
}

const deleteRow = async (rowId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_ROW(rowId),
    }, token);
    return response.data.data.deleteRow
  } catch (error) {
    throw error;
  }
}
const createColumn = async (data) => {
  const { imagesData, videosData, ...columnInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.CREATE_COLUMN(columnInfo, imagesData, videosData);

  try {
    const response = await requestMultipart(constructFormDataForArrayOfFiles({ ...imagesData, ...videosData }, query), token);
    return response.data.data.createColumn
  } catch (error) {
    throw error;
  }
}

const updateColumn = async (data) => {
  const { imagesData, videosData, ...columnInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.UPDATE_COLUMN(columnInfo, imagesData, videosData);

  try {
    const response = await requestMultipart(constructFormDataForArrayOfFiles({ ...imagesData, ...videosData }, query), token);
    return response.data.data.updateColumn
  } catch (error) {
    throw error;
  }
}

const deleteColumn = async (columnId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_COLUMN(columnId),
    }, token);
    return response.data.data.deleteColumn
  } catch (error) {
    throw error;
  }
}

const createSponsor = async (data) => {
  const { img_main, ...sponsorInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.CREATE_SPONSOR(sponsorInfo);

  try {
    const response = await requestMultipart(constructFormDataForSingleFile(img_main, query, 'img_main'), token);
    return response.data.data.createSponsor
  } catch (error) {
    throw error;
  }
}

const updateSponsor = async (data) => {
  const { imagesData, videosData, ...sponsorInfo } = data;
  const token = getTokenCookie()

  const query = MUTATION.UPDATE_SPONSOR(sponsorInfo, imagesData);

  try {
    const response = await requestMultipart(constructFormDataForSingleFile(img_main, query, 'img_main'), token);
    return response.data.data.updateSponsor
  } catch (error) {
    throw error;
  }
}

const deleteSponsor = async (sponsorId) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.DELETE_SPONSOR(sponsorId),
    }, token);
    return response.data.data.deleteSponsor
  } catch (error) {
    throw error;
  }
}

const updateVideo = async (data) => {
  const token = getTokenCookie()
  try {
    const response = await request({
      query: MUTATION.UPDATE_VIDEO(data),
    }, token);
    return response.data.data.updateVideo
  } catch (error) {
    throw error;
  }
}

export {
  fetchDepartments,
  fetchSponsors,
  fetchWebsiteSponsors,
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
  deleteImage,
  deleteVideo,
  isUserAuthenticated,
  fetchWorks,
  fetchWebsiteWork,
  fetchWebsiteServices,
  fetchHomePageWork,
  fetchHomePageServices,
  fetchWorkSections,
  fetchWorkSection,
  fetchRows,
  fetchColumns,
  createWork,
  updateWork,
  deleteWork,
  createSection,
  updateSection,
  deleteSection,
  createRow,
  updateRow,
  deleteRow,
  createColumn,
  updateColumn,
  deleteColumn,
  updateVideo,
  createSponsor,
  updateSponsor,
  deleteSponsor,
}

const logout = () => {
  removeTokenCookie();
  window.open('/login', '_self')
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

  if (response.data.errors) {
    if (response.data.errors[0].debugMessage && response.data.errors[0].debugMessage.includes("Unauthenticated")) logout();
    else throw JSON.stringify(response.data.errors)
  }

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

  if (response.data.errors) {
    if (response.data.errors[0].debugMessage && response.data.errors[0].debugMessage.includes("Unauthenticated")) logout();
    else throw JSON.stringify(response.data.errors)
  }

  return response;
}

const constructFormDataForSingleFile = (file, query, key) => {
  const formData = new FormData()
  let map = {};
  let glQuery;

  glQuery = {
    query,
    variables: {
      file: null
    }
  }
  map = { 0: [`variables.${key}`] }
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
