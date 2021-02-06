const buildQuery = (sponsorInfo, img_main) => {
  if (!img_main)
    return `mutation {
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

  return `mutation($img_main: Upload!) {
    updateSponsor(
       id: ${sponsorInfo.id},
       input: {
          name: "${sponsorInfo.name}"
          link: "${sponsorInfo.link}"
          is_enabled: ${sponsorInfo.isEnabled}
          order: ${sponsorInfo.order}
          places: [${sponsorInfo.places}]                                       
          image: { img_main: { upload: { file: $img_main } } }
       }
    ) {
       id
    }
 } 
  `;
};

const UPDATE_SPONSOR = (sponsorInfo, img_main) =>
  buildQuery(sponsorInfo, img_main);

export default UPDATE_SPONSOR;
