<template>
  <div class="preview-image">
    <div class="close" role="button" @click="fireDeleteModal">
      &times;
    </div>
    <img :src="image.path" alt="preview" />
  </div>
</template>

<script>
export default {
  props: ["image", "setShowDeleteDialogFlag", "openedFor", "imageIndex"],
  methods: {
    fireDeleteModal() {
      this.setShowDeleteDialogFlag(
        true,
        this.image.id,
        this.openedFor,
        this.imageIndex
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.preview-image {
  width: 150px;
  max-width: 150px;
  min-width: 150px;
  display: inline-block;
  margin: 5px;
  background-color: gainsboro;
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
