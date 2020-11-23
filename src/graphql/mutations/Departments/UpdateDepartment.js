const UPDATE_DEPARTMENT = ({ id, name }) => `mutation{
   updateDepartment(id: ${id}, input: { name: "${name}" }){
      id      
   }
}
`;

export default UPDATE_DEPARTMENT;
