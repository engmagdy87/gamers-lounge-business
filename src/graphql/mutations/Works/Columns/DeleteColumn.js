const DELETE_WORK_COLUMN = (
    workColumnId
) => `
mutation{
    deleteColumn(id: ${workColumnId}){
      id
   }
}
`;

export default DELETE_WORK_COLUMN;