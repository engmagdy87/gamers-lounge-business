const CREATE_JOB = ({
  title,
  description,
  requirements,
  departmentId,
  isEnabled
}) => `mutation {
    createJob(
       input: {
          title: "${title}"
          description: "${description}"
          requirements: "${requirements}"
          is_enabled: ${isEnabled}
          department: { connect: ${departmentId} }
       }
    ) {
       id
    }
 }
 `;

export default CREATE_JOB;
