const UPDATE_ROW = (
   { sectionId, rowId,
      order }
) => `mutation {
   updateRow(
      id: ${rowId},
      input: { order: ${order}, section: { connect: ${sectionId} } }
   ) {
      id
   }
}

 `;

export default UPDATE_ROW;
