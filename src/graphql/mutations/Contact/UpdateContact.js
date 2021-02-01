const buildQuery = (contactInfo, imagesData) => {
   if (!imagesData) return `mutation {
      updateContactUs(
         id: ${contactInfo.id}
         input: {
            map: "${contactInfo.map}"
            information: {
               address: "${contactInfo.address}"
               email: "${contactInfo.email}" 
               phone: "${contactInfo.phone}"
               facebook_link: "${contactInfo.facebookLink}"
               instagram_link: "${contactInfo.instagramLink}"
               twitter_link: "${contactInfo.twitterLink}"
               youtube_link: "${contactInfo.youtubeLink}"
            }
         }
      ) {
         id
         map
         information{
            address
            phone
            email
            facebook_link
            instagram_link
            twitter_link
            youtube_link
         }
         img_cover{
            id
            url
         }
         img_facebook{
            id
            url
         }
         img_twitter{
            id
            url
         }
         img_instagram{
            id
            url
         }
         img_youtube{
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
   if (imagesKeys.length > 0) {
      queryKeys += 'images: {';
      imagesKeys.forEach(imgKey => {
         queryKeys += `${imgKey}: { upload: { file: $${imgKey} } }`
      })
      queryKeys += '}'
   }

   return `mutation${queryParams} {
   updateContactUs(
      id: ${contactInfo.id}      
      input: {
         map: "${contactInfo.map}"
         information: {
            address: "${contactInfo.address}"
            email: "${contactInfo.email}" 
            phone: "${contactInfo.phone}"
            facebook_link: "${contactInfo.facebookLink}"
            instagram_link: "${contactInfo.instagramLink}"
            twitter_link: "${contactInfo.twitterLink}"
            youtube_link: "${contactInfo.youtubeLink}"
         }
         ${queryKeys}
      }
   ) {
      id     
      map
      information{
         address
         phone
         email
         facebook_link
         instagram_link
         twitter_link
         youtube_link
      }
      img_cover{
         id
         url
      }
      img_facebook{
         id
         url
      }
      img_twitter{
         id
         url
      }
      img_instagram{
         id
         url
      }
      img_youtube{
         id
         url
      } 
   }
} 
 `
}

const UPDATE_CONTACT = (
   contactInfo, imagesData
) => buildQuery(contactInfo, imagesData)

export default UPDATE_CONTACT;
