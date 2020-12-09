const DELETE_VIDEO = (
    imageId
) => `
mutation{
    deleteVideo(id: ${imageId}){
      id
   }
}
`;

export default DELETE_VIDEO;