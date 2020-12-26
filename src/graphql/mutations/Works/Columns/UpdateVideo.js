const UPDATE_VIDEO = (
    { videoId,
        isAutoPlay }
) => `
mutation {
    updateVideo(id: ${videoId}, input: {
      is_auto_play: ${isAutoPlay}
    }) {
      id
    }
  }
`;

export default UPDATE_VIDEO;