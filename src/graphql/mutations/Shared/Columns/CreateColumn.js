const buildQuery = (columnInfo, imagesData, videosData) => {
   const { rowId,
      order,
      content,
      type, ratio, fillable, isAutoPlay } = columnInfo;

   let queryParams = '(';
   let imagesKeys = 'images: {'
   let videosKeys = 'videos: {'

   if (imagesData.img_content.length > 0) {
      queryParams += '$img_content: [Upload!],';
      imagesKeys += 'img_content: { upload: { file: $img_content } }'
   }

   if (videosData.vid_content.length > 0) {
      queryParams += '$vid_content: [Upload!],';
      videosKeys += `vid_content: { upload: { file: $vid_content, is_auto_play:${isAutoPlay} } }`
   }

   if (queryParams === '(') queryParams = ''
   else queryParams += ')'

   if (imagesKeys === 'images: {') imagesKeys = ''
   else imagesKeys += '}'

   if (videosKeys === 'videos: {') videosKeys = ''
   else videosKeys += '}'

   return `mutation${queryParams} {
      createColumn(
         input: {
            row_id: ${rowId}
            order: ${order}
            content: "${content}"
            type: ${type}
            ratio: ${ratio}
            fillable: ${fillable}
            ${imagesKeys}
            ${videosKeys}
         }
      ) {
         id
      }
   } 
    `
}

const CREATE_COLUMN = (
   columnInfo, imagesData, videosData
) => buildQuery(columnInfo, imagesData, videosData)

export default CREATE_COLUMN;
