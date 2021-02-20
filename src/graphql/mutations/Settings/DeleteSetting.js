const DELETE_SETTING = id => `
mutation{
    deleteSetting(id: ${id}){
      id
   }
}
`;

export default DELETE_SETTING;
