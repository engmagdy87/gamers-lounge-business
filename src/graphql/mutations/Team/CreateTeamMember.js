const CREATE_TEAM_MEMBER = ({ name, title, order, isEnabled }) => `
mutation($img_profile: Upload!) {
   createTeamMember(
     input: {
       name: "${name}"
       title: "${title}"
       order: ${order}
       is_enabled: ${isEnabled}
       image: { img_profile: { upload: { file: $img_profile } } }
     }
   ) {
     name
     title
     order
     is_enabled
     img_profile {
       id
       url
     }
   }
 }
`;

export default CREATE_TEAM_MEMBER;
