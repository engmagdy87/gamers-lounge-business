const buildQuery = (workInfo, imagesData) => {
  const {
    title,
    shortDescription,
    isFeatured,
    isEnabled,
    description,
    statistics,
    order,
    is_admin_mode_enabled
  } = workInfo;

  let queryParams = "($img_card: Upload!,";
  let imagesKeys = `images: {
            img_card: { upload: { file: $img_card } }`;

  if (imagesData.img_cover) {
    queryParams += "$img_cover: Upload!,";
    imagesKeys += "img_cover: { upload: { file: $img_cover } }";
  }
  if (imagesData.img_slider) {
    queryParams += "$img_slider: Upload!,";
    imagesKeys += "img_slider: { upload: { file: $img_slider } }";
  }

  queryParams += ")";

  if (imagesKeys === "images: {") imagesKeys = "";
  else imagesKeys += "}";

  return `mutation${queryParams} {
      createWork(
         input: {
            is_admin_mode_enabled: ${is_admin_mode_enabled}
            title: "${title}"
            short_description: "${shortDescription}"
            description: "${description}"
            is_featured: ${isFeatured}
            is_enabled: ${isEnabled}
            statistics: "${statistics}"
            order: ${order}
            ${imagesKeys}
         }
      ) {
         id
      }
   } 
    `;
};

const CREATE_WORK = (workInfo, imagesData) => buildQuery(workInfo, imagesData);

export default CREATE_WORK;
