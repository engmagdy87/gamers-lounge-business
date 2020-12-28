const WORK = ({ workId, first, page }) => `
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
     sections(first: ${first}, page: ${page}, orderBy: { field: "order", order: ASC }) {
       paginatorInfo{                            
         hasMorePages            
       } 
       data {
         id
         order
         type
         enabled
         rows {
           id
           order
           columns {
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

export default WORK;
