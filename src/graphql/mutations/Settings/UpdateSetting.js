const buildQuery = (id, imagesData) => {
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
    updateSetting(
       id: ${id} 
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

const UPDATE_SETTING = ({ id, imagesData }) => buildQuery(id, imagesData);

export default UPDATE_SETTING;
