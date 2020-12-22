const WORK = (id) => `
query {
   work(id: ${id}) {
     id
     title
     description
     statistics
     sections(first: 5, orderBy: { field: "order", order: ASC }) {
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
             }
           }
         }
       }
     }
   }
 }
`;

export default WORK;
