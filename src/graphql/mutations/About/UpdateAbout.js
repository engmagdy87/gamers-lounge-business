const buildQuery = (aboutInfo, imagesData) => {
   if (!imagesData) return `mutation {
      updateAboutUs(
         id: ${aboutInfo.id},
         input: {
            mission: "${aboutInfo.mission}"
            vision: "${aboutInfo.vision}"
         }
      ) {
         id
         mission
         vision
         img_cover{
          id
          url
         }
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
image: {
   ${imagesKeys[0]}: { upload: { file: $${imagesKeys[0]} } }
}
`
   return `mutation${queryParams} {
   updateAboutUs(
      id: ${aboutInfo.id},
      input: {
         mission: "${aboutInfo.mission}"
         vision: "${aboutInfo.vision}"
         ${queryKeys}
      }
   ) {
      id
      mission
      vision
      img_cover{
       id
       url
      }
   }
} 
 `
}

const UPDATE_ABOUT = (
   aboutInfo, imagesData
) => buildQuery(aboutInfo, imagesData)

export default UPDATE_ABOUT;
