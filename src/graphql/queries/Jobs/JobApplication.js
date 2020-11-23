const JOB_APPLICATION = (id) => `
query{
    jobApplication(id: ${id}){
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
`;

module.exports = JOB_APPLICATION;
