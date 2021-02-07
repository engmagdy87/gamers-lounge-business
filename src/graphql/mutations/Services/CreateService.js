const buildQuery = (serviceInfo, imagesData) => {
  const { title, description, order, isFeatured, isEnabled } = serviceInfo;

  let queryParams = "($img_card: Upload!,$img_cover: Upload!,";
  let imagesKeys = `images: {
            img_card: { upload: { file: $img_card } }
            img_cover: { upload: { file: $img_cover } }`;

  if (imagesData.img_slider) {
    queryParams += "$img_slider: Upload!,";
    imagesKeys += "img_slider: { upload: { file: $img_slider } }";
  }

  queryParams += ")";

  if (imagesKeys === "images: {") imagesKeys = "";
  else imagesKeys += "}";

  return `mutation${queryParams} {
      createService(
         input: {
            is_admin_mode_enabled: true
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

const CREATE_SERVICE = (serviceInfo, imagesData) =>
  buildQuery(serviceInfo, imagesData);

export default CREATE_SERVICE;
