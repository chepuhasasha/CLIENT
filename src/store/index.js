import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "default", // - light, dark, default
  },
  mutations: {
    SET_THEME(state, value) {
      state.theme = value;
    },
  },
  actions: {
    setTheme({ commit }, value) {
      commit("SET_THEME", value);
    },
  },
  modules: {},
});
