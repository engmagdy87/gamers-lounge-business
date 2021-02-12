const LOGIN = ({ username, password }) => `mutation {
  login(input: { username: "${username}", password: "${password}" }) {
     access_token
     user{
      id
      email
      username
      first_name
      last_name
      permissions
      roles
   }
  }
}`;

export default LOGIN;
