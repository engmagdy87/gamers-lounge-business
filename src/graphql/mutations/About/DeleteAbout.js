const DELETE_ABOUT = (
    id
) => `
mutation{
    deleteAboutUs(id: ${id}){
      id
   }
}
`;

export default DELETE_ABOUT;