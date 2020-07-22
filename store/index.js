import Vue from "vue";
import Vuex from "vuex";
import Cookies from 'js-cookie'

Vue.use(Vuex);
var baseUrlEntry = "http://localhost/sqm_api/index.php";
// var baseUrlEntry = "https://18.138.156.243/sqm_api/index.php";

let store
const initStore = () => {
  return (
    store ||
    (store = new Vuex.Store({
      state: {
        loadingText: "Loading",
        loadingIcon: "el-icon-loading",
        loadingBackground: "rgba(0, 0, 0, 0.7)",
        baseUrlEntry: baseUrlEntry,
        baseUrl: baseUrlEntry + "?ACTION=",
        navigationBar: {
          isOpen: Cookies.get('isNavigationBarOpened') ? !!+Cookies.get('isNavigationBarOpened') : true,
        },
        locale: Cookies.get('locale') || 'en',
      },
      mutations: {
        TOGGLE_SIDEBAR: state => {
          state.navigationBar.isOpen = !state.navigationBar.isOpen
          if (state.navigationBar.isOpen) {
            Cookies.set('isNavigationBarOpened', 1)
          } else {
            Cookies.set('isNavigationBarOpened', 0)
          }
        },
        SET_LOCALE: (state, locale) => {
          state.locale = locale
          Cookies.set('locale', locale)
        },
      },
      actions: {
        toggleSideBar({ commit }) {
          commit('TOGGLE_SIDEBAR')
        },
        setLocale({ commit }, locale) {
          commit('SET_LOCALE', locale)
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
