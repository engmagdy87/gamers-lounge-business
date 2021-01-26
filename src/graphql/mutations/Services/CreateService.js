const buildQuery = (serviceInfo, imagesData) => {
   const { title,
      description,
      order,
      isFeatured } = serviceInfo;

   let queryParams = '(';
   let imagesKeys = `images: {
            img_card: { upload: { file: $img_card } }
            img_cover: { upload: { file: $img_cover } }`


   if (imagesData.img_slider.length > 0) {
      queryParams += '$img_slider: Upload,';
      imagesKeys += 'img_slider: { upload: { file: $img_slider } }'
   }

   if (queryParams === '(') queryParams = ''
   else queryParams += ')'

   if (imagesKeys === 'images: {') imagesKeys = ''
   else imagesKeys += '}'

   return `mutation${queryParams} {
      createService(
         input: {
            title: "${title}"
            description: "${description}"
            order: ${order}
            is_featured: ${isFeatured}
            ${imagesKeys}
         }
      ) {
         id
      }
   } 
    `
}

const CREATE_SERVICE = (
   serviceInfo, imagesData
) => buildQuery(serviceInfo, imagesData)

export default CREATE_SERVICE;
