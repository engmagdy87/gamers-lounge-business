const DELETE_ADMIN = id => `mutation {
    deleteAdmin(id: ${id}) {
      id
    }
  }
 `;

export default DELETE_ADMIN;
