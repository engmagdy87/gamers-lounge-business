const buildQuery = (serviceInfo, imagesData) => {
  const {
    id,
    title,
    description,
    order,
    isFeatured,
    isEnabled,
    is_admin_mode_enabled
  } = serviceInfo;

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
   updateService(
      id: ${id},
      input: {
         is_admin_mode_enabled: ${is_admin_mode_enabled}
         title: "${title}"
         description: "${description}"
         order: ${order}
         is_featured: ${isFeatured}
         is_enabled: ${isEnabled}
         ${imagesKeys}
      }
   ) {
      id
   }
} 
 `;
};

const UPDATE_SERVICE = (serviceInfo, imagesData) =>
  buildQuery(serviceInfo, imagesData);

export default UPDATE_SERVICE;
