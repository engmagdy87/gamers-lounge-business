<template>
  <div class="custom-switch-wrapper">
    <div class="custom-switch-wrapper__outside">
      <div class="custom-switch-wrapper__inside">
        <div
          :class="[
            'custom-switch-wrapper__inside__icon',
            isMenuActive ? 'custom-switch-wrapper__inside__icon--active' : ''
          ]"
          role="button"
          @click="setIsMenuActive(true)"
        >
          <img :src="isMenuActive ? activeMenuIcon : inactiveMenuIcon" />
        </div>
        <div
          :class="[
            'custom-switch-wrapper__inside__icon',
            !isMenuActive ? 'custom-switch-wrapper__inside__icon--active' : ''
          ]"
          role="button"
          @click="setIsMenuActive(false)"
        >
          <img :src="!isMenuActive ? activeListIcon : inactiveListIcon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isMenuActive", "setIsMenuActive"],
  data() {
    return {
      activeListIcon: "website/img/active-list.svg",
      inactiveListIcon: "website/img/inactive-list.svg",
      activeMenuIcon: "website/img/active-menu.svg",
      inactiveMenuIcon: "website/img/inactive-menu.svg"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/variables.scss";

$notchSize: 10px;

.custom-switch-wrapper {
  width: 90px;
  height: 50px;

  &__outside {
    position: relative;
    width: 100%;
    height: 100%;
    background: $primary;
    clip-path: polygon(
      0% $notchSize,
      $notchSize 0%,
      calc(100% - #{$notchSize}) 0%,
      100% $notchSize,
      100% calc(100% - #{$notchSize}),
      calc(100% - #{$notchSize}) 100%,
      $notchSize 100%,
      0% calc(100% - #{$notchSize})
    );
  }

  &__inside {
    display: flex;
    position: absolute;
    top: $border-thickness;
    left: $border-thickness;
    right: $border-thickness;
    bottom: $border-thickness;
    background: $accent;
    clip-path: polygon(
      0% $notchSize,
      $notchSize 0%,
      calc(100% - #{$notchSize}) 0%,
      100% $notchSize,
      100% calc(100% - #{$notchSize}),
      calc(100% - #{$notchSize}) 100%,
      $notchSize 100%,
      0% calc(100% - #{$notchSize})
    );

    &__icon {
      width: 50%;
      display: flex;
      cursor: pointer;
      clip-path: polygon(
        0% $notchSize,
        $notchSize 0%,
        calc(100% - #{$notchSize}) 0%,
        100% $notchSize,
        100% calc(100% - #{$notchSize}),
        calc(100% - #{$notchSize}) 100%,
        $notchSize 100%,
        0% calc(100% - #{$notchSize})
      );

      &--active {
        background-color: $primary;
      }
      img {
        margin: auto;
      }
    }
  }

  &__icon {
    width: 45px;
    height: 50px;

    &__outside {
      position: relative;
      width: 100%;
      height: 100%;
      background: $primary;
      clip-path: polygon(
        0% $notchSize,
        $notchSize 0%,
        calc(100% - #{$notchSize}) 0%,
        100% $notchSize,
        100% calc(100% - #{$notchSize}),
        calc(100% - #{$notchSize}) 100%,
        $notchSize 100%,
        0% calc(100% - #{$notchSize})
      );
    }

    &__inside {
      position: absolute;
      top: $border-thickness;
      left: $border-thickness;
      right: $border-thickness;
      bottom: $border-thickness;
      background: $accent;
      clip-path: polygon(
        0% $notchSize,
        $notchSize 0%,
        calc(100% - #{$notchSize}) 0%,
        100% $notchSize,
        100% calc(100% - #{$notchSize}),
        calc(100% - #{$notchSize}) 100%,
        $notchSize 100%,
        0% calc(100% - #{$notchSize})
      );
    }
  }
}
</style>
