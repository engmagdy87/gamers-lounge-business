const buildQuery = (serviceSectionInfo, imagesData, videosData) => {
   let secondDescription = ''
   let secondMediaType = ''
   let queryParams = '(';
   let imagesKeys = 'images: {'
   let videosKeys = 'videos: {'

   if (imagesData.img_content_first.length > 0) {
      queryParams += '$img_content_first: [Upload!],';
      imagesKeys += 'img_content_first: { upload: { file: $img_content_first } }'
   }
   if (imagesData.img_content_second.length > 0) {
      queryParams += '$img_content_second: [Upload!],';
      imagesKeys += 'img_content_second: { upload: { file: $img_content_second } }'
   }

   if (videosData.vid_content_first.length > 0) {
      queryParams += '$vid_content_first: [Upload!],';
      videosKeys += 'vid_content_first: { upload: { file: $vid_content_first } }'
   }

   if (videosData.vid_content_second.length > 0) {
      queryParams += '$vid_content_second: [Upload!],';
      videosKeys += 'vid_content_second: { upload: { file: $vid_content_second } }'
   }

   if (queryParams === '(') queryParams = ''
   else queryParams += ')'

   if (imagesKeys === 'images: {') imagesKeys = ''
   else imagesKeys += '}'

   if (videosKeys === 'videos: {') videosKeys = ''
   else videosKeys += '}'

   const { serviceSectionId,
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
      updateServiceSection(
         id: ${serviceSectionId},
         input: {
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

const UPDATE_SERVICE_SECTION = (
   serviceInfo, imagesData, videosData
) => buildQuery(serviceInfo, imagesData, videosData)

export default UPDATE_SERVICE_SECTION;
