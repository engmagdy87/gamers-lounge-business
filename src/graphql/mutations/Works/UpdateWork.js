const buildQuery = (workInfo, imagesData) => {
  const {
    id,
    is_admin_mode_enabled,
    title,
    isFeatured,
    isEnabled,
    shortDescription,
    description,
    statistics,
    order
  } = workInfo;

  let queryParams = "(";
  let imagesKeys = `images: {`;

  if (imagesData) {
    if (imagesData.img_card) {
      queryParams += "$img_card: Upload!,";
      imagesKeys += "img_card: { upload: { file: $img_card } }";
    }
    if (imagesData.img_cover) {
      queryParams += "$img_cover: Upload!,";
      imagesKeys += "img_cover: { upload: { file: $img_cover } }";
    }
    if (imagesData.img_slider) {
      queryParams += "$img_slider: Upload!,";
      imagesKeys += "img_slider: { upload: { file: $img_slider } }";
    }
  }

  if (queryParams === "(") queryParams = "";
  else queryParams += ")";

  if (imagesKeys === "images: {") imagesKeys = "";
  else imagesKeys += "}";

  return `mutation${queryParams} {
     updateWork(
       id: ${id},
       input: {
          is_admin_mode_enabled: ${is_admin_mode_enabled}
          title: "${title}"
          is_featured: ${isFeatured}
          is_enabled: ${isEnabled}
          short_description: "${shortDescription}"
          description: "${description}"
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

const UPDATE_WORK = (workInfo, imagesData) => buildQuery(workInfo, imagesData);

export default UPDATE_WORK;
