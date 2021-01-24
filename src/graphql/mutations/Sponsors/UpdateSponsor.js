const buildQuery = (sponsorInfo, imagesData) => {
   if (!imagesData) return `mutation {
       updateSponsor(
          id: ${sponsorInfo.id},
          input: {
            name: "${sponsorInfo.name}"
            link: "${sponsorInfo.link}"
            is_enabled: ${sponsorInfo.isEnabled}
            order: ${sponsorInfo.order}
            places: [${sponsorInfo.places}]                                       
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
      queryKeys = `images: {
            ${imagesKeys[0]}: { upload: { file: $${imagesKeys[0]} } }
        }
 `
   return `mutation${queryParams} {
    updateSponsor(
       id: ${sponsorInfo.id},
       input: {
          name: "${sponsorInfo.name}"
          link: "${sponsorInfo.link}"
          is_enabled: ${sponsorInfo.isEnabled}
          order: ${sponsorInfo.order}
          places: [${sponsorInfo.places}]                                       
          ${queryKeys}
       }
    ) {
       id
    }
 } 
  `
}

const UPDATE_SPONSOR = (
   sponsorInfo, imagesData
) => buildQuery(sponsorInfo, imagesData)

export default UPDATE_SPONSOR;
