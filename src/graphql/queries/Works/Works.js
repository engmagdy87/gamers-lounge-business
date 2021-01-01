const WORKS = ({ first, page }) => `
query {
    works(first: ${first}, page: ${page}) {
       paginatorInfo{                            
          hasMorePages
          currentPage    
          total      
       }
       data {
          id
          title
          short_description
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
