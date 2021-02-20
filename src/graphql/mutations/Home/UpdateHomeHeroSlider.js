const buildQuery = (heroSlideInfo, imagesData, videosData) => {
  const {
    slideId,
    title,
    description,
    order,
    url,
    isEnabled,
    type,
    isAutoPlay
  } = heroSlideInfo;

  let queryParams = "(";
  let imagesKeys = "images: {";
  let videosKeys = "videos: {";

  if (imagesData.img_main.length > 0) {
    queryParams += "$img_main: [Upload!],";
    imagesKeys += "img_main: { upload: { file: $img_main } }";
  }

  if (videosData.vid_main.length > 0) {
    queryParams += "$vid_main: [Upload!],";
    videosKeys += `vid_main: { upload: { file: $vid_main, is_auto_play:${isAutoPlay} } }`;
  }

  if (queryParams === "(") queryParams = "";
  else queryParams += ")";

  if (imagesKeys === "images: {") imagesKeys = "";
  else imagesKeys += "}";

  if (videosKeys === "videos: {") videosKeys = "";
  else videosKeys += "}";

  return `mutation${queryParams} {
      updateHomeSlider(
          id:${slideId}
          input: {
             title: "${title}"
             description: "${description}"
             order: ${order}
             url: "${url}"
             is_featured: false
             is_enabled: ${isEnabled}
             type: ${type}
             ${imagesKeys}
             ${videosKeys}
          }
       ) {
          id
       }
    } 
     `;
};

const UPDATE_HOME_HERO_SLIDE = (heroSlideInfo, imagesData, videosData) =>
  buildQuery(heroSlideInfo, imagesData, videosData);

export default UPDATE_HOME_HERO_SLIDE;
