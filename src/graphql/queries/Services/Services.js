const SERVICES = ({ first, page }) => `
query{
    services(first: ${first}, page: ${page},orderBy: { field: "order", order: ASC }) {    
       paginatorInfo{                            
          hasMorePages
          currentPage    
          total      
       }  
       data{
          id
          title
          description
          order
          is_featured
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

export default SERVICES;
