const HOME_HERO_SLIDES = ({ isEnabled = null, isFeatured = null }) => `
query{
   homeSliders(first: 100, page: 1,orderBy: { field: "order", order: ASC },${
     isEnabled ? "is_enabled:true" : ""
   },${isFeatured ? "is_featured:true" : ""}) {       
       data{
        id
        title
        description
        order
        is_featured
        is_enabled
        type
        img_main{
           id
           url
        }
        vid_main{
           id
           url
           is_auto_play
        }        
       }
    }
 }
`;

export default HOME_HERO_SLIDES;
