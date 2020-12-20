const WORK_SECTIONS = (id) => `
query {
    work(id: ${id}) {  
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

export default WORK_SECTIONS;
