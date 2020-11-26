const JOBS = () => `
query {
    jobs(first: 50, orderBy: { field: "created_at", order: DESC }) {
       data {
          id
          title        
          description
          requirements
          department {
            id 
            name
          }
       }
    }
 }
`;

export default JOBS;
