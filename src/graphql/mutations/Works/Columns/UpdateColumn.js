const buildQuery = (workColumnInfo, imagesData, videosData) => {
   let queryParams = '(';
   let imagesKeys = 'images: {'
   let videosKeys = 'videos: {'

   if (imagesData.img_content.length > 0) {
      queryParams += '$img_content: [Upload!],';
      imagesKeys += 'img_content: { upload: { file: $img_content } }'
   }

   if (videosData.vid_content.length > 0) {
      queryParams += '$vid_content: [Upload!],';
      videosKeys += 'vid_content: { upload: { file: $vid_content } }'
   }

   if (queryParams === '(') queryParams = ''
   else queryParams += ')'

   if (imagesKeys === 'images: {') imagesKeys = ''
   else imagesKeys += '}'

   if (videosKeys === 'videos: {') videosKeys = ''
   else videosKeys += '}'

   const { columnId, rowId,
      order,
      content,
      type, ratio, fillable } = workColumnInfo;

   return `mutation${queryParams} {
      updateColumn(
         input: {
            column_id: ${columnId}
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

const UPDATE_WORK_COLUMN = (
   workColumnInfo, imagesData, videosData
) => buildQuery(workColumnInfo, imagesData, videosData)

export default UPDATE_WORK_COLUMN;
