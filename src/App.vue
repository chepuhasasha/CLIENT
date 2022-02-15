<template lang="pug">
.app(:class='[theme]')
  //- Header
  h1 {{ theme }}
  router-view
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      theme: (state) => state.theme,
    }),
  },
};
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.grid {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(24, 1fr);
}
</style>
