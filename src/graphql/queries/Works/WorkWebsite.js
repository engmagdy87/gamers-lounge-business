const WORK_HERO = (id) => `
query {
   work(id: ${id}) {
     id
     title
     short_description
     description
     statistics
     img_cover{
      id
      url
     }
   }
 }
`;

const WORK_SECTIONS = (id, first, page) => `
query {
   work(id: ${id}) {
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

const WORK = ({ id, first, page }) => {
  if (!first && !page) return WORK_HERO(id)
  return WORK_SECTIONS(id, first, page)
}

export default WORK;
