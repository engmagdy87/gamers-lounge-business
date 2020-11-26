<template>
  <span v-if="fieldErrors !== undefined">
    <p class="error-message" v-for="(error, i) in fieldErrors" :key="i">
      {{ error }}
    </p>
  </span>
</template>

<script>
export default {
  props: ["fieldErrors"]
};
</script>
