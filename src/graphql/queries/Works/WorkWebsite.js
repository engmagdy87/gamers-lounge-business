const WORK_HERO = (workId) => `
query {
   work(id: ${workId}) {
     id
     title
     description
     statistics
     img_cover{
      id
      url
     }
   }
 }
`;

const WORK_SECTIONS = (workId, first, page) => `
query {
   work(id: ${workId}) {
     sections(first: ${first}, page: ${page}, orderBy: { field: "order", order: ASC }) {
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

const WORK = ({ workId, first, page }) => {
  if (!first && !page) return WORK_HERO(workId)
  return WORK_SECTIONS(workId, first, page)
}

export default WORK;
