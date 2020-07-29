<template>
  <footer class="footer-wrapper">
    <div>
      <a v-for="(sponsor, index) in sponsors" :key="index" :href="sponsor.link">
        <img
          v-if="sponsor.images.img_logo !== null"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["sponsors"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
</style>
