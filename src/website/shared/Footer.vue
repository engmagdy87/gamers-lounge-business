<template>
  <footer class="footer-wrapper">
    <div
      v-for="(sponsor, index) in sponsors"
      :key="index"
      @click="redirectTo(sponsor.link)"
      role="button"
      style="cursor:pointer;"
    >
      <img
        v-if="sponsor.images.img_logo !== null"
        :src="sponsor.images.img_logo.path"
        :alt="sponsor.name"
      />
    </div>
  </footer>
</template>

<script>
export default {
  props: ["sponsors"],
  methods: {
    redirectTo(url) {
      if (url.includes("http")) window.open(url, "_blank");
      else window.open(`http://${url}`, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
</style>
