import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hideNav: false,
    hide_on_small: true
  },
  getters: {
    hide_sidebar: state => state.hideNav,
    hideOnSmall: state => state.hide_on_small
  },

  mutations: {
    navToggel(hideNav, hide_on_small) {
      if (window.innerWidth < 900) {
        this.state.hideNav = !this.state.hideNav;
      } else {
        this.state.hide_on_small = !this.state.hide_on_small;
      }
    }
  }
});
