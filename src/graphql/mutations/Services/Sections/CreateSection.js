const buildQuery = (serviceSectionInfo, imagesData, videosData) => {
   let secondDescription = ''
   let secondMediaType = ''
   let queryParams = '($img_content_first: [Upload!], $vid_content_first: [Upload!], ';
   let imagesKeys = `
   images: {
      img_content_first: { upload: { file: $img_content_first } }      
   `
   let videosKeys = `
   videos: {
      vid_content_first: { upload: { file: $vid_content_first } }      
   `

   if (imagesData.img_content_second.length > 0) {
      queryParams += '$img_content_second: [Upload!],';
      imagesKeys += 'img_content_second: { upload: { file: $img_content_second } }'
   }

   if (videosData.vid_content_second.length > 0) {
      queryParams += '$vid_content_second: [Upload!],';
      videosKeys += 'vid_content_second: { upload: { file: $vid_content_second } }'
   }


   queryParams += ')'
   imagesKeys += '}'
   videosKeys += '}'

   const { serviceId,
      title,
      description_first,
      description_second,
      template,
      order,
      media_type_first,
      media_type_second } = serviceSectionInfo;

   if (media_type_second) secondMediaType = `media_type_second: ${media_type_second}`
   if (description_second) secondDescription = `description_second: "${description_second}"`

   return `mutation${queryParams} {
      createServiceSection(
         input: {
          service_id: ${serviceId}
          title: "${title}"
          description_first: "${description_first}"
          ${secondDescription}
          media_type_first: ${media_type_first}
          ${secondMediaType}
          type: ${template}
          order: ${order}
          ${imagesKeys}
          ${videosKeys}
         }
      ) {
         id
      }
   } 
    `
}

const CREATE_SERVICE_SECTION = (
   serviceInfo, imagesData, videosData
) => buildQuery(serviceInfo, imagesData, videosData)

export default CREATE_SERVICE_SECTION;
