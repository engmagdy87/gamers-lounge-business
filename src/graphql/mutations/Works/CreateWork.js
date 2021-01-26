const buildQuery = (workInfo, imagesData) => {
   const { title,
      shortDescription,
      isFeatured,
      description,
      statistics,
      order } = workInfo;

   let queryParams = '($img_card: Upload!,$img_cover: Upload!,';
   let imagesKeys = `images: {
            img_card: { upload: { file: $img_card } }
            img_cover: { upload: { file: $img_cover } }`


   if (imagesData.img_slider.length > 0) {
      queryParams += '$img_slider: Upload,';
      imagesKeys += 'img_slider: { upload: { file: $img_slider } }'
   }

   queryParams += ')'

   if (imagesKeys === 'images: {') imagesKeys = ''
   else imagesKeys += '}'

   return `mutation${queryParams} {
      createWork(
         input: {
            title: "${title}"
            short_description: "${shortDescription}"
            description: "${description}"
            is_featured: ${isFeatured}
            statistics: "${statistics}"
            order: ${order}
            ${imagesKeys}
         }
      ) {
         id
      }
   } 
    `
}

const CREATE_WORK = (
   workInfo, imagesData
) => buildQuery(workInfo, imagesData)

export default CREATE_WORK;
