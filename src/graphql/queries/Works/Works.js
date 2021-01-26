const WORKS = ({ first, page }) => `
query {
    works(first: ${first}, page: ${page},orderBy: { field: "order", order: ASC }) {
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
          is_featured
          statistics
          order
          img_card{
            id
            url
          }
          img_cover{
            id
            url
          }
          img_slider{
            id
            url
          }
       }
    }
 }
`;

export default WORKS;
