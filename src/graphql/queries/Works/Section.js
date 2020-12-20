const SECTION = (id) => `
query {
    section(id: ${id}) {
       id
       order
       type
       enabled
    }
 }
 
`;

export default SECTION;
