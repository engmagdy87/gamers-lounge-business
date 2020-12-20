const WORKS = () => `
query {
    works(first: 20) {
       data {
          id
          title
          description
          statistics
          img_card{
            id
            url
          }
          img_cover{
             id
             url
          }
       }
    }
 }
`;

export default WORKS;
