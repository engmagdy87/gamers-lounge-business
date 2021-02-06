const DELETE_TEAM = id => `
mutation{
    deleteTeamMember(id: ${id}){
      id
   }
}
`;

export default DELETE_TEAM;
