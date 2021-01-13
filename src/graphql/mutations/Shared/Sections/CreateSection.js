const CREATE_SECTION = (
   { type,
      enabled,
      order,
      id,
      sectionType }
) => `mutation {
   createSection(
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

export default CREATE_SECTION;
