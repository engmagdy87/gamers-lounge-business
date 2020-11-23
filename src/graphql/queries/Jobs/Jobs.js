const JOBS = () => `
query {
    jobs(first: 50, orderBy: { field: "created_at", order: DESC }) {
       data {
          id
          title        
          department {
             name
          }
       }
    }
 }
`;

module.exports = JOBS;
