<template>
  <div class="preview-video">
    <div class="close" role="button" @click="fireDeleteModal">
      &times;
    </div>
    <video preload="auto" autoplay muted loop style="width: 100%;">
      <source :src="video.url" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  props: ["video", "setShowDeleteDialogFlag", "openedFor", "videoIndex"],
  methods: {
    fireDeleteModal() {
      this.setShowDeleteDialogFlag(
        true,
        this.video.id,
        this.openedFor,
        this.videoIndex,
        "video"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.preview-video {
  width: 150px;
  max-width: 150px;
  min-width: 150px;
  display: inline-block;
  margin: 5px;
  background-color: gainsboro;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  img {
    object-fit: contain;
    height: 150px;
    width: 150px;
  }
}

/* The Close Button */
.close {
  color: black;
  float: right;
  font-size: 30px;
  float: right;
  cursor: pointer;
  width: 20px;
  margin-bottom: 0;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}
</style>
