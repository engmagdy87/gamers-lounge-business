const SERVICE = (id) => `
query {
    service(id: ${id}) {    
       id 
       title
       description
       img_cover{
         id
         url
      }
       sections(first: 50) {
          data {
            id
            title
            description_first
            description_second
            media_type_first
            media_type_second
            type
            order            
            img_content_first{
               id
               url
            }
            img_content_second{
               id
               url
            }
            vid_content_first{
               id
               url
            }
            vid_content_second{
               id
               url
            }
          }
       }
    }
 }
`;

export default SERVICE;
