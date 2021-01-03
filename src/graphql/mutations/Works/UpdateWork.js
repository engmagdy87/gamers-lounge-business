const buildQuery = (workInfo, imagesData) => {
   if (!imagesData) return `mutation {
       updateWork(
          id: ${workInfo.workId},
          input: {
             title: "${workInfo.title}"
             short_description: "${workInfo.shortDescription}"
             description: "${workInfo.description}"
             statistics: "${workInfo.statistics}"
             order: ${workInfo.order}
          }
       ) {
          id
       }
    } 
     `;
   //********************/
   const imagesKeys = Object.keys(imagesData)
   let queryParams = '('
   let queryKeys = ''
   imagesKeys.forEach(key => {
      queryParams += `$${key}: Upload!,`
   })
   queryParams += ')'
   //********************/   
   if (imagesKeys.length === 1)
      queryKeys = `
 images: {
    ${imagesKeys[0]}: { upload: { file: $${imagesKeys[0]} } }
 }
 `
   if (imagesKeys.length === 2)
      queryKeys = `
 images: {
    ${imagesKeys[0]}: { upload: { file: $${imagesKeys[0]} } }
    ${imagesKeys[1]}: { upload: { file: $${imagesKeys[1]} } }
 }
 `
   return `mutation${queryParams} {
    updateWork(
       id: ${workInfo.workId},
       input: {
          title: "${workInfo.title}"
          short_description: "${workInfo.shortDescription}"
          description: "${workInfo.description}"
          statistics: "${workInfo.statistics}"
          order: ${workInfo.order}
          ${queryKeys}
       }
    ) {
       id
    }
 } 
  `
}

const UPDATE_WORK = (
   workInfo, imagesData
) => buildQuery(workInfo, imagesData)

export default UPDATE_WORK;
