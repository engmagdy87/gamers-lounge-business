const JOBS = ({ isEnabled = null }) => `
query {
    jobs(first: 50, orderBy: { field: "created_at", order: DESC },${
      isEnabled ? "is_enabled:true" : ""
    }) {
       data {
          id
          title        
          description
          requirements
          is_enabled
          department {
            id 
            name
          }
       }
    }
 }
`;

export default JOBS;
