<template lang="pug">
component(
  :is="tag"
  :class="$style[mode]"
  :style='{gridArea: position, ...custom}'
  ) 
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
    position: {
      type: String,
      default: "1 / 1 / 5 / 5",
    },
    mode: {
      type: String,
      default: "default",
    },
    custom: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="less" module>
.default {
}
.view {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(24, 1fr);
}
.C1 {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  background: var(--bg_0);
  border: var(--border_0);
}
.C2 {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  background: var(--bg_100);
  border: var(--border_0);
}
.C3 {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  background: var(--bg_100);
  border: var(--border_0);
}
</style>
