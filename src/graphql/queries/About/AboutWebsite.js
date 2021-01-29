const ABOUT_HERO = () => `
query{
    aboutUs{
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

const ABOUT_SECTIONS = (first, page) => `
query {
    aboutUs {
     sections(enabled:true,first: ${first}, page: ${page}, orderBy: { field: "order", order: ASC }) {
       paginatorInfo{                            
         hasMorePages            
       } 
       data {
         id
         order
         type
         enabled
         rows(orderBy: { field: "order", order: ASC }) {
           id
           order
           columns(orderBy: { field: "order", order: ASC }) {
             id
             order
             type
             content
             ratio
             fillable
             img_content {
               id
               url
             }
             vid_content {
               id
               url
               is_auto_play
             }
           }
         }
       }
     }
   }
 }
`;

const ABOUT = ({ id, first, page }) => {
    if (!first && !page) return ABOUT_HERO(id)
    return ABOUT_SECTIONS(id, first, page)
}

export default ABOUT;
