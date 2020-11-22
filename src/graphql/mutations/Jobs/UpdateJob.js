const UPDATE_JOB = (
   { jobId,
      title,
      description,
      requirements,
      departmentId }
) => `mutation {
    updateJob(
        id: ${jobId},
        input: {
          title: "${title}"
          description: "${description}"
          requirements: "${requirements}"
          department: { connect: ${departmentId} }
       }
    ) {
       id
    }
 }
`;

export default UPDATE_JOB;
