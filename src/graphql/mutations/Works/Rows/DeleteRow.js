const DELETE_WORK_ROW = (
    workRowId
) => `
mutation{
    deleteRow(id: ${workRowId}){
      id
   }
}
`;

export default DELETE_WORK_ROW;