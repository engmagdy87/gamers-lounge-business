const APPLY_JOB = (
   { fullName,
      phone,
      email,
      country,
      city,
      behance_link,
      linkedin_link,
      jobId }
) => `mutation($file: Upload!) {
    applyJob(
       input: {
          full_name: "${fullName}"
          phone: "${phone}"
          email: "${email}"
          country: "${country}"
          city: "${city}"
          behance_link: "${behance_link}"
          linkedin_link: "${linkedin_link}"
          resume: $file
          job: {
             connect: ${jobId}
          }
       }
    ) {
       id    
    }
 }
 `;

export default APPLY_JOB;
