<template lang="pug">
Container.header
  h3 logger
  Container
    .header_nav_link Home
    .header_nav_link Buy
    .header_nav_link Docs
</template>
<script>
import Container from "@/components/wrappers/Container.vue";

export default {
  name: "Header",
  components: {
    Container,
  },
};
</script>
<style lang="less">
.header {
  display: flex;
  justify-content: space-between;

  background: var(--bg_100);
  padding: 10px;
}
</style>
