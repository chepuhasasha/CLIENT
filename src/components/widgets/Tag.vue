<template lang="pug">
.tag(:class='[$style[mode]]') {{ text }}
</template>
<script>
export default {
  name: "Tag",
  props: {
    text: {
      type: String,
      default: "tag",
    },
    mode: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style lang="less">
.tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
<style lang="less" module>
.default {
  background: #000;
  color: white;
}
</style>
