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
  props: ["image", "setShowDeleteDialogFlag"],
  methods: {
    fireDeleteModal() {
      this.setShowDeleteDialogFlag(true, this.image.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.preview-image {
  width: 200px;
  object-fit: cover;
  margin-top: 20px;
  img {
    width: 100%;
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
