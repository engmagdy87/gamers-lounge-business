<template>
  <div class="breadcrumb-wrapper">
    <div
      v-for="(item, index) in tree"
      :key="index"
      class="breadcrumb-wrapper__item"
    >
      <router-link :to="item.path">
        <span class="breadcrumb-wrapper__link">{{ item.title }} </span>
      </router-link>
      <span
        class="breadcrumb-wrapper__separator"
        v-if="index !== tree.length - 1"
        >|</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["tree"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/breadcrumb.scss";
</style>
