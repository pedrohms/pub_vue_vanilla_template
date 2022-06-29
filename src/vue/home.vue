<script>
export default {
  data() {
    return {
      msg: "Hi mom!",
    };
  },
};
</script>
<template>
  <div>
    {{ msg }}
  </div>
</template>
<style scoped>
  .example {
    color: v-bind("color");
  }
</style>
