const ROW = id => `
query {
    row(id: ${id}) {
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
`;

export default ROW;
