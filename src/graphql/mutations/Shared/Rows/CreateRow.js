const CREATE_ROW = (
   { order,
      sectionId }
) => `mutation {
   createRow(input: { order: ${order}, section: { connect: ${sectionId} } }) {
      id
   }
}
 `;

export default CREATE_ROW;
