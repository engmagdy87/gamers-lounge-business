const WORKS = () => `
query {
    works(first: 6) {
       data {
          id
          title
          description
          statistics
          sections(first: 2, orderBy: { field: "order", order: ASC }) {
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
 }
`;

export default WORKS;
