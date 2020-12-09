const DELETE_SERVICE = (
    serviceId
) => `
mutation{
    deleteService(id: ${serviceId}){
      id
   }
}
`;

export default DELETE_SERVICE;