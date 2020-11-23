const LOGIN = ({ username, password }) => `mutation {
  login(input: { username: "${username}", password: "${password}" }) {
     access_token     
  }
}`;

export default LOGIN;
