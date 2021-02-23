const UPDATE_JOB = ({
  jobId,
  title,
  description,
  requirements,
  departmentId,
  isEnabled
}) => `mutation {
    updateJob(
        id: ${jobId},
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

export default UPDATE_JOB;
