const UPDATE_USER_DATA = ({
  username,
  first_name,
  last_name,
  email,
  password
}) => `
mutation {
  updateProfile(input: {
      username: "${username}"
      first_name: "${first_name}"
      last_name: "${last_name}"
      email: "${email}"
      password: "${password}"
    }) {
      id
      username
      first_name
      last_name
      email
    }
  }
`;

export default UPDATE_USER_DATA;
