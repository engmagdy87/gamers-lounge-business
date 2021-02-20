const RESET_ADMIN_PASSWORD = id => `mutation {
  resetAdminPassword(id: ${id}) {
      id
    }
  }
 `;

export default RESET_ADMIN_PASSWORD;
