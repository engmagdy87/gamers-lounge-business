const ABOUT = ({ first, page }) => `
query {
    aboutUs {
     id
     mission
     vision
     img_cover{
      id
      url
     }
     sections(first: ${first}, page: ${page}, orderBy: { field: "order", order: ASC }) {
       paginatorInfo{                            
         hasMorePages            
       } 
       data {
         id
         order
         type
         enabled
       }
     }
   }
 }
`;

export default ABOUT;
