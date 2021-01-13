const DELETE_SECTION = (
    sectionId
) => `
mutation{
    deleteSection(id: ${sectionId}){
      id
   }
}
`;

export default DELETE_SECTION;