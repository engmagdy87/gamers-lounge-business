const DELETE_SERVICE = (
    id
) => `
mutation{
    deleteService(id: ${id}){
      id
   }
}
`;

export default DELETE_SERVICE;