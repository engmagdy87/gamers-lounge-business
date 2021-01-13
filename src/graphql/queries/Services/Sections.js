const SERVICE_SECTIONS = (id) => `
query {
    service(id: ${id}) {  
       id
       title            
       sections(first: 50, orderBy: { field: "order", order: ASC }) {
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

export default SERVICE_SECTIONS;
