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
       sections(enabled:true,first: 200, page: 1) {
          paginatorInfo{
            hasMorePages
            total
        }
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
         total         
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
             vid_extenral
             is_vid_extenral_enabled
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
  if (!first && !page) return ABOUT_HERO(id);
  return ABOUT_SECTIONS(first, page);
};

export default ABOUT;
