const DELETE_SERVICE_SECTION = (
    serviceSectionId
) => `
mutation{
    deleteServiceSection(id: ${serviceSectionId}){
      id
   }
}
`;

export default DELETE_SERVICE_SECTION;