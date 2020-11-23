const CREATE_JOB = (
   { title,
      description,
      requirements,
      departmentId }
) => `mutation {
    createJob(
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

export default CREATE_JOB;
