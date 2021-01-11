const HOME_PAGE_WORKS = () => `
query {
    works(first: 100, page: 1,orderBy: { field: "order", order: ASC },is_featured:true) {       
       data {
          id
          title
          short_description                    
          img_card{
            id
            url
          }          
       }
    }
 }
`;

export default HOME_PAGE_WORKS;
