const DELETE_HOME_HERO_SLIDE = slideId => `
mutation{
    deleteHomeSlider(id: ${slideId}){
      id
   }
}
`;

export default DELETE_HOME_HERO_SLIDE;
