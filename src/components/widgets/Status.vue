<template lang="pug">
.status(:title='getStatus(ranking).message' :style='{ background: getStatus(ranking).color }' :class='[$style[mode]]')
</template>
<script>
import status from "@/mixins/status.js";

export default {
  name: "Status",
  mixins: [status],
  props: {
    ranking: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      default: "m",
    },
  },
};
</script>
<style lang="less">
.status {
  border-radius: 50%;
}
</style>
<style lang="less" module>
.s {
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  max-width: 12px;
  max-height: 12px;
}
.m {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
}
.l {
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;
}
</style>
