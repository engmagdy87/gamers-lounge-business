const DELETE_DEPARTMENT = (id) => `mutation {
    deleteDepartment(id: ${id}) {
       id       
    }
 } 
 `;

export default DELETE_DEPARTMENT;
