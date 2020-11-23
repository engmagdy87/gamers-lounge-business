const CREATE_DEPARTMENT = (name) => `mutation {
    createDepartment(input: { name: "${name}" }) {
       id
       name
    }
 }
 `;

export default CREATE_DEPARTMENT;
