const UPDATE_ADMIN = ({ userId, username, roles }) => `mutation {
    updateAdmin(
      input: {
        user_id: "${userId}"
        username: "${username}"
        roles: [${roles}]
      }
    ) {
      id
    }
  }
 `;

export default UPDATE_ADMIN;
