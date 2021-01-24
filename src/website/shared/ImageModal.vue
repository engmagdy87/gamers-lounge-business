<template>
  <div ref="imageModal" class="image-modal">
    <span class="close" @click="closeModal">&times;</span>
    <img
      class="image-modal__previous"
      src="/images/next.svg"
      alt="previous"
      @click="setImageIndex('prev')"
    />
    <img class="image-modal-content" :src="imageUrl" />
    <img
      class="image-modal__next"
      src="/images/next.svg"
      alt="next"
      @click="setImageIndex('next')"
    />
  </div>
</template>

<script>
export default {
  props: ["showImageModal", "setShowImageModal", "imageUrl", "setImageIndex"],
  methods: {
    closeModal() {
      this.setShowImageModal(false);
    }
  },
  watch: {
    showImageModal() {
      if (this.showImageModal) this.$refs.imageModal.style.display = "flex";
      else this.$refs.imageModal.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.image-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 300; /* Sit on top */
  //   padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
  &__next {
    width: 50px;
    cursor: pointer;
    margin: 20px;
  }
  &__previous {
    width: 50px;
    transform: rotate(180deg);
    cursor: pointer;
    margin: 20px;
  }
}

/* Modal Content (image) */
.image-modal-content {
  margin: auto;
  display: block;
  max-width: 70vw;
  max-height: 100vh;
}

/* Add Animation */
.image-modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoom {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .image-modal-content {
    width: 100%;
  }
}
</style>
