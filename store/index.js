import Vue from "vue";
import Vuex from "vuex";
import Cookies from 'js-cookie'

Vue.use(Vuex);

let store
const initStore = () => {
  return (
    store ||
    (store = new Vuex.Store({
      state: {
        loadingText: "Loading",
        loadingIcon: "el-icon-loading",
        loadingBackground: "rgba(0, 0, 0, 0.7)",
        // baseUrl: "https://localhost/sqm_api/index.php?ACTION="
        baseUrl: "https://18.138.156.243/sqm_api/index.php?ACTION=",
        navigationBar: {
          isOpen: Cookies.get('isNavigationBarOpened') ? !!+Cookies.get('isNavigationBarOpened') : true,
        }
      },
      mutations: {
        TOGGLE_SIDEBAR: state => {
          state.navigationBar.isOpen = !state.navigationBar.isOpen
          if (state.navigationBar.isOpen) {
            Cookies.set('isNavigationBarOpened', 1)
          } else {
            Cookies.set('isNavigationBarOpened', 0)
          }
        }
      },
      actions: {
        toggleSideBar({ commit }) {
          commit('TOGGLE_SIDEBAR')
        },
      },
      getters: {
        isNavigationBarOpened: state => {
          return state.navigationBar.isOpen;
        }
      }
    }))
  );
};
export default initStore;
