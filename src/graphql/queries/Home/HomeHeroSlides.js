const HOME_HERO_SLIDES = ({ isEnabled = null }) => `
query{
   homeSliders(first: 100, page: 1,orderBy: { field: "order", order: ASC },${
     isEnabled ? "is_enabled:true" : ""
   }) {       
       data{
        id
        title
        description
        order
        is_featured
        is_enabled
        type
        url
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
