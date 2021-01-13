const UPDATE_SECTION = (
   { sectionId, type,
      enabled,
      order,
      id,
      sectionType }
) => `mutation {
   updateSection(
      id: ${sectionId},
      input: {
         type: ${type}
         enabled: ${enabled}
         order: ${order}
         sectionable: { connect: { type: ${sectionType}, id: ${id} } }
      }
   ) {
      id
   }
}

 `;

export default UPDATE_SECTION;
