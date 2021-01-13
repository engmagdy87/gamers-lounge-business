const CREATE_SERVICE = (
   { title,
      description,
      order,
      isFeatured }
) => `mutation($img_card: Upload!, $img_cover: Upload!) {
    createService(
       input: {
          title: "${title}"
          description: "${description}"
          order: ${order}
          is_featured: ${isFeatured}
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

export default CREATE_SERVICE;
