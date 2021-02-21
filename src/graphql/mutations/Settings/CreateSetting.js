const buildQuery = (settingsInfo, imagesData) => {
  const { services_title, services_description } = settingsInfo;
  if (!imagesData)
    return `mutation {
    updateSetting(
       id: ${id} 
       input: {          
          services_title: "${services_title}"
          services_description: "${services_description}"
       }
    ) {
       id          
       services_title
       services_description 
       img_home_cover {
        id
        url
       }
       img_services_cover {
         id
         url
       }  
    }
 } 
  `;
  //********************/
  const imagesKeys = Object.keys(imagesData);
  let queryParams = "(";
  let queryKeys = "";
  imagesKeys.forEach(key => {
    queryParams += `$${key}: Upload!,`;
  });
  queryParams += ")";
  //********************/
  if (imagesKeys.length > 0) {
    queryKeys += "images: {";
    imagesKeys.forEach(imgKey => {
      queryKeys += `${imgKey}: { upload: { file: $${imgKey} } }`;
    });
    queryKeys += "}";
  }

  return `mutation${queryParams} {
    createSetting(
       input: {          
          services_title: "${services_title}"
          services_description: "${services_description}"
          ${queryKeys}
       }
    ) {
       id             
       services_title
       services_description
       img_home_cover {
        id
        url
       }
       img_services_cover {
         id
         url
       }
    }
 } 
  `;
};

const CREATE_SETTING = (settingsInfo, imagesData) =>
  buildQuery(settingsInfo, imagesData);

export default CREATE_SETTING;
