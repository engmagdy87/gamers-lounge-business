const CREATE_WORK_ROW = (
   { order,
      workSectionId }
) => `mutation {
   createRow(input: { order: ${order}, section: { connect: ${workSectionId} } }) {
      id
   }
}
 `;

export default CREATE_WORK_ROW;
