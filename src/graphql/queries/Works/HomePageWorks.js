const HOME_PAGE_WORKS = () => `
query {
    works(first: 100, page: 1,orderBy: { field: "order", order: ASC },is_featured:true,is_enabled:true) {       
       data {
          id
          title
          description                    
          img_slider{
            id
            url
          }          
       }
    }
 }
`;

export default HOME_PAGE_WORKS;
