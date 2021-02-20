const buildQuery = imagesData => {
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
          ${queryKeys}
       }
    ) {
       id             
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

const CREATE_SETTING = imagesData => buildQuery(imagesData);

export default CREATE_SETTING;
