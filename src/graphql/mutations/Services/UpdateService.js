const buildQuery = (serviceInfo, imagesData) => {
   if (!imagesData) return `mutation {
      updateService(
         id: ${serviceInfo.id},
         input: {
            title: "${serviceInfo.title}"
            description: "${serviceInfo.description}"
            order: ${serviceInfo.order}
            is_featured: ${serviceInfo.isFeatured}
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
   updateService(
      id: ${serviceInfo.id},
      input: {
         title: "${serviceInfo.title}"
         description: "${serviceInfo.description}"
         order: ${serviceInfo.order}
         is_featured: ${serviceInfo.isFeatured}
         ${queryKeys}
      }
   ) {
      id
   }
} 
 `
}

const UPDATE_SERVICE = (
   serviceInfo, imagesData
) => buildQuery(serviceInfo, imagesData)

export default UPDATE_SERVICE;
