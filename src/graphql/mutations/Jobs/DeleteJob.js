const DELETE_JOB = (
    jobId
) => `
mutation{
   deleteJob(id: ${jobId}){
      id
   }
}
`;

export default DELETE_JOB;
