const CREATE_WORK = (
   { title,
      shortDescription,
      description,
      statistics,
      order }
) => `mutation($img_card: Upload!, $img_cover: Upload!) {
    createWork(
       input: {
          title: "${title}"
          short_description: "${shortDescription}"
          description: "${description}"
          statistics: "${statistics}"
          order: ${order}
          images: {
             img_card: { upload: { file: $img_card } }
             img_cover: { upload: { file: $img_cover } }
          }
       }
    ) {
       id
    }
 }
 `;

export default CREATE_WORK;
