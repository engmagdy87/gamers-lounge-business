const ROW = (id) => `
query {
    row(id: ${id}) {
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
`;

export default ROW;
