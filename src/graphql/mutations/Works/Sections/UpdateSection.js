const UPDATE_WORK_SECTION = (
   { workSectionId, type,
      enabled,
      order,
      workId }
) => `mutation {
   updateSection(
      id: ${workSectionId},
      input: {
         type: ${type}
         enabled: ${enabled}
         order: ${order}
         sectionable: { connect: { type: OUR_WORk, id: ${workId} } }
      }
   ) {
      id
   }
}

 `;

export default UPDATE_WORK_SECTION;
