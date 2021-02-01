const DELETE_CONTACT = (
    id
) => `
mutation{
    deleteContactUs(id: ${id}){
      id
   }
}
`;

export default DELETE_CONTACT;