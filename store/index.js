import Vue from "vue";
import Vuex from "vuex";
import BaseStore from "vue_basecomponent/util/BaseStore";
Vue.use(Vuex);
// var baseUrlEntry = "http://147.8.140.26/hku_api/index.php";
// var frontEntry = "http://147.8.140.26/HKU_Safety_System/";
var baseUrlEntry = "http://localhost/hku_api/index.php";
var frontEntry = "http://localhost:3000/HKU_Safety_System/";

let store
const initStore = () => {
    return (
        store || (store = new BaseStore({ baseUrlEntry: baseUrlEntry, frontEntry: frontEntry, api_key: "liwehpgir1ybqfa98oegrt3su4o8awifybv8wyvioyi5gubytvos789nup09bwltvy28" }, {}))
    );
};
export default initStore;