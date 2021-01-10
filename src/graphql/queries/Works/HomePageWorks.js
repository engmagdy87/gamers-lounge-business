const HOME_PAGE_WORKS = ({ first, page }) => `
query {
    works(first: ${first}, page: ${page},orderBy: { field: "order", order: ASC },is_featured:true) {       
       data {
          id
          title
          short_description
          description
          is_featured          
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

export default HOME_PAGE_WORKS;
