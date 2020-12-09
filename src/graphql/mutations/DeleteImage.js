const DELETE_IMAGE = (
    imageId
) => `
mutation{
    deleteImage(id: ${imageId}){
      id
   }
}
`;

export default DELETE_IMAGE;