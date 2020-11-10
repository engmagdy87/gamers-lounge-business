<template>
  <div class="outline-box" @click="onClickAction">
    <div class="outline-box__outside">
      <div
        :class="[
          'outline-box__inside',
          isButton && 'outline-box__inside--is-button'
        ]"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      default: false
    },
    onClickAction: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
