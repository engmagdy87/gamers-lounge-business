const SPONSOR = () => `
query {
    sponsors(orderBy: { field: "order", order: ASC }, first: 200) {
        data {
            id
            name
            link
            is_enabled
            places
            order
            image {
               id
               url
            }
        }
      }
 }  
`;

export default SPONSOR;
