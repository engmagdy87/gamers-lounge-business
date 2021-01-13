const DELETE_WORK = (
    id
) => `
mutation{
    deleteWork(id: ${id}){
      id
   }
}
`;

export default DELETE_WORK;