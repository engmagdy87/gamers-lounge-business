const WORKS = ({ first, page, isEnabled = null }) => `
query {
    works(first: ${first}, page: ${page},orderBy: { field: "order", order: ASC },${isEnabled ? 'is_enabled:true' : ''}) {
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
          is_enabled
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
