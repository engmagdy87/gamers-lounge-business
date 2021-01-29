const CREATE_ABOUT = ({ mission, vision }) => `
mutation($img_cover: Upload!){
   createAboutUs(input: {
      mission: "${mission}"
      vision: "${vision}"
      image: { img_cover: { upload: { file: $img_cover } } }
   }){
      id
      mission
      vision
      img_cover{
       id
       url
      }      
   }
}
`;

export default CREATE_ABOUT;
