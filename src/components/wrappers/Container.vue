<template lang="pug">
component.container(:is="tag", :class="[$style[mode]]") 
  slot
</template>
<script>
export default {
  name: "Container",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang="less">
.container {
  display: flex;
}
</style>
<style lang="less" module>
.default {
}
</style>
