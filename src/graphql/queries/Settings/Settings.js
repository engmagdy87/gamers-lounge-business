const SETTINGS = ({ isService, isWork, isHome, isProfile }) => {
  const serviceQuery = isService
    ? `img_services_cover{
        id
        url
     }`
    : "";
  const workQuery = isWork
    ? `img_works_cover{
        id
        url
     }`
    : "";
  const homeQuery = isHome
    ? `img_home_cover{
        id
        url
     }`
    : "";
  const profileQuery = isProfile
    ? `img_profile_cover{
        id
        url
     }`
    : "";

  return `
query{
    setting{
       id
       ${serviceQuery}       
       ${homeQuery}       
       ${workQuery}       
       ${profileQuery}       
    }
 }  
`;
};

export default SETTINGS;
