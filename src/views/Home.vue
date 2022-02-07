<template lang="pug">
.home
  h1 h1
  h2 h2
  h3 h3
  span span
  p text text text
  Status(:ranking='500' mode='s')
  Status(:ranking='250' mode='m')
  Status(:ranking='100' mode='l')
</template>

<script>
import Container from "../components/wrappers/Container.vue";
import Tag from "../components/widgets/Tag.vue";
import Status from "../components/widgets/Status.vue";

export default {
  name: "Home",
  components: {
    Container,
    Tag,
    Status,
  },
};
</script>
