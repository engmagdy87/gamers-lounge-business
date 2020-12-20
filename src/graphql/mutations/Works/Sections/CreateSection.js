const CREATE_WORK_SECTION = (
   { type,
      enabled,
      order,
      workId }
) => `mutation {
   createSection(
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

export default CREATE_WORK_SECTION;
