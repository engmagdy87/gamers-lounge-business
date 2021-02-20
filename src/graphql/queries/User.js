const IS_USER_AUTHENTICATED = () => `
query{
    me{
      id
      username
      roles
      permissions
    }
 }
`;

export default IS_USER_AUTHENTICATED;
