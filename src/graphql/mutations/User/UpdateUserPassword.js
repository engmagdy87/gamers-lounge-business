const UPDATE_USER_PASSWORD = ({
  password,
  newPassword,
  newPasswordConfirmation
}) => `
mutation {
  updateProfile(input: {
      password: "${password}"
      new_password: "${newPassword}"
      new_password_confirmation: "${newPasswordConfirmation}"
    }) {
      id
    }
  }
`;

export default UPDATE_USER_PASSWORD;
