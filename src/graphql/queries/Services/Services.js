const SERVICES = ({ first, page, isEnabled = null }) => `
query{
    services(first: ${first}, page: ${page},orderBy: { field: "order", order: ASC },${
  isEnabled ? "is_enabled:true" : ""
}) {    
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
          is_enabled
          is_admin_mode_enabled
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
