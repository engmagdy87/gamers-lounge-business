const CREATE_WORK = (
    { title,
        description,
        statistics }
) => `mutation($img_card: Upload!, $img_cover: Upload!) {
    createWork(
       input: {
          title: "${title}"
          description: "${description}"
          statistics: "${statistics}"
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
