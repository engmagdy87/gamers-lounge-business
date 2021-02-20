const ADMINS = () => `
  query {
    admins(first: 100) {
      data {
        id
        email
        username
        first_name
        last_name
        permissions
        roles
      }
    }
  }
`;

export default ADMINS;
