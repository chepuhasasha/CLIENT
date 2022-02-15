<template lang="pug">
Container(mode='view')
  Container(mode='C1')
    Container(mode='C2')
      Container(mode='C3')
  h1 test
</template>

<script>
import Container from "../components/wrappers/Container.vue";

export default {
  name: "Home",
  components: {
    Container,
  },
};
</script>

<style lang="less"></style>
