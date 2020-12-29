const SECTION = (id) => `
query {
    section(id: ${id}) {
       id
       order
       rows(orderBy: { field: "order", order: ASC }) {
         id
         order
      }
    }
 }
`;

export default SECTION;
