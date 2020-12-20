const DELETE_WORK_SECTION = (
    workSectionId
) => `
mutation{
    deleteSection(id: ${workSectionId}){
      id
   }
}
`;

export default DELETE_WORK_SECTION;