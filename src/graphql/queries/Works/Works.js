const WORKS = ({ first, page }) => `
query {
    works(first: ${first}, page: ${page}) {
       paginatorInfo{                            
          hasMorePages
       }
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
