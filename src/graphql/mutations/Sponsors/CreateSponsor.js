const CREATE_SPONSOR = (
    { name,
        link,
        isEnabled,
        order,
        places
    }
) => `mutation($img_main: Upload!){
    createSponsor(input: {
        name: "${name}"
        link: "${link}"
        is_enabled: ${isEnabled}
        order: ${order}
        places: [${places}]
        image: { img_main: { upload: { file: $img_main } } }
      }){
       id
    }
 }
  `;

export default CREATE_SPONSOR;
