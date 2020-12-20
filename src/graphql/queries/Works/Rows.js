const SECTION = (id) => `
query {
    section(id: ${id}) {
       id
       order
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
 
`;

export default SECTION;
