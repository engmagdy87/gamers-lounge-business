const DELETE_SPONSOR = (
    id
) => `
mutation{
    deleteSponsor(id: ${id}){
      id
   }
}
`;

export default DELETE_SPONSOR;