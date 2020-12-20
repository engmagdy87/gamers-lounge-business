const UPDATE_WORK_ROW = (
   { workSectionId, workRowId,
      order }
) => `mutation {
   updateRow(
      id: ${workRowId},
      input: { order: ${order}, section: { connect: ${workSectionId} } }
   ) {
      id
   }
}

 `;

export default UPDATE_WORK_ROW;
