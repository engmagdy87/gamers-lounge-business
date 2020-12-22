const SECTION = (id) => `
query {
    section(id: ${id}) {
       id
       order
       rows {
         id
         order
      }
    }
 }
`;

export default SECTION;
