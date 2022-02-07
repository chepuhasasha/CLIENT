<template lang="pug">
.default
  Header
  router-view
</template>
<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
