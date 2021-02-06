const buildQuery = (teamMemberInfo, img_profile) => {
  if (!img_profile)
    return `mutation {
      updateTeamMember(
         id: ${teamMemberInfo.id},
         input: {
            name: "${teamMemberInfo.name}"
            title: "${teamMemberInfo.title}"
            order: ${teamMemberInfo.order}
            is_enabled: ${teamMemberInfo.isEnabled}
          }
      ) {
         id
      }
   } 
    `;

  return `mutation($img_profile: Upload!) {
      updateTeamMember(
      id: ${teamMemberInfo.id},
      input: {
         name: "${teamMemberInfo.name}"
         title: "${teamMemberInfo.title}"
         order: ${teamMemberInfo.order}
         is_enabled: ${teamMemberInfo.isEnabled}
         image: { img_profile: { upload: { file: $img_profile } } }
      }
   ) {
      id
   }
} 
 `;
};

const UPDATE_TEAM_MEMBER = (teamMemberInfo, img_profile) =>
  buildQuery(teamMemberInfo, img_profile);

export default UPDATE_TEAM_MEMBER;
