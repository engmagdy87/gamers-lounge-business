const JOBS = () => `
query {
    jobs(first: 50, orderBy: { field: "created_at", order: DESC }) {
       paginatorInfo {
          count
          currentPage
          firstItem
          hasMorePages
          lastItem
          lastPage
          perPage
          total
       }
       data {
          id
          title
          description
          requirements
          department {
             id
             name
          }
          applications {
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
    }
 }
`;

module.exports = JOBS;
