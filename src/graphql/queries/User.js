const IS_USER_AUTHENTICATED = () => `
query{
    me{
       id
    }
 }
`;

export default IS_USER_AUTHENTICATED;
