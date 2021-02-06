const TEAM = (isEnabled = null) => `
query{
    teamMembers(orderBy: { field: "order", order: ASC },${
      isEnabled ? "is_enabled:true" : ""
    }){
       id
       name
       title
       order
       is_enabled
       img_profile{
          id
          url
       }
    }
 }
`;

export default TEAM;
