const CREATE_ADMIN = ({
  username,
  password,
  passwordConfirmation,
  roles
}) => `mutation {
    createAdmin(
      input: {
        username: "${username}"
        password: "${password}"
        password_confirmation: "${passwordConfirmation}"
        roles: [${roles}]
      }
    ) {
      id
    }
  }
 `;

export default CREATE_ADMIN;
