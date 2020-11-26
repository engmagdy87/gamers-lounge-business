const JOB = (id) => `
query {
    job(id: ${id}) {
       id
       title
       description
       requirements
       department {
          id
          name
       }
       applications {
          id
          full_name
          phone
          email
          country
          city
          behance_link
          linkedin_link
          resume
       }
    }
 }  
`;

export default JOB;
