const DELETE_WORK = (
    workId
) => `
mutation{
    deleteWork(id: ${workId}){
      id
   }
}
`;

export default DELETE_WORK;