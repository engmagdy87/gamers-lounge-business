const buildQuery = (contactInfo, imagesData) => {
  if (!imagesData)
    return `mutation {
      createContactUs(
         input: {
            map: "${contactInfo.map}"
            information: {
               address: "${contactInfo.address}"
               email: "${contactInfo.email}" 
               phone: "${contactInfo.phone}"
               facebook_link: "${contactInfo.facebookLink}"
               instagram_link: "${contactInfo.instagramLink}"
               twitter_link: "${contactInfo.twitterLink}"
               twitch_link: "${contactInfo.twitchLink}"
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
            twitch_link
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
         img_twitch{
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
   createContactUs(
      input: {
         map: "${contactInfo.map}"
         information: {
            address: "${contactInfo.address}"
            email: "${contactInfo.email}" 
            phone: "${contactInfo.phone}"
            facebook_link: "${contactInfo.facebookLink}"
            instagram_link: "${contactInfo.instagramLink}"
            twitter_link: "${contactInfo.twitterLink}"
            twitch_link: "${contactInfo.twitchLink}"
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
         twitch_link
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
      img_twitch{
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
};

const CREATE_CONTACT = (contactInfo, imagesData) =>
  buildQuery(contactInfo, imagesData);

export default CREATE_CONTACT;
