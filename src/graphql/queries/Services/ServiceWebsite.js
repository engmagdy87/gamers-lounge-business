const SERVICE_HERO = id => `
query {
   service(id: ${id}) {
     id
     title
     description
     order
     img_cover{
      id
      url
     }
   }
 }
`;

const SERVICE_SECTIONS = (id, first, page) => `
query {
   service(id: ${id}) {
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

const SERVICE = ({ id, first, page }) => {
  if (!first && !page) return SERVICE_HERO(id);
  return SERVICE_SECTIONS(id, first, page);
};

export default SERVICE;
