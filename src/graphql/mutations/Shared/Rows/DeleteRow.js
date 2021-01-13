const DELETE_ROW = (
    rowId
) => `
mutation{
    deleteRow(id: ${rowId}){
      id
   }
}
`;

export default DELETE_ROW;