const DELETE_COLUMN = (
    columnId
) => `
mutation{
    deleteColumn(id: ${columnId}){
      id
   }
}
`;

export default DELETE_COLUMN;