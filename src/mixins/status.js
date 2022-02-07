export default {
  methods: {
    getStatus(ranking, alpha = 1) {
      const map = {
        500: { message: "ок", color: `rgba(63, 185, 80, ${alpha})` },
        250: { message: "warning", color: `rgba(255, 230, 0, ${alpha})` },
        100: { message: "critical", color: `rgba(255, 88, 88, ${alpha})` },
      };
      return map[ranking] ? map[ranking] : map[100];
    },
  },
};
