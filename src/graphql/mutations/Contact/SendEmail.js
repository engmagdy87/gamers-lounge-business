const SEND_EMAIL = ({ name, email, message }) => `
mutation{
    sendContactUsEmail(input: {
       name:"${name}"
       email:"${email}"
       message:"${message}"
    }){
       response
    }
 }
`;

export default SEND_EMAIL;
