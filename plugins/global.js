import Vue from "vue";
import variables from "@/static/variables.scss";
Vue.mixin({
    computed: {
        mainTheme(){
            return variables["main-theme"]
        },
        mainThemePlain(){
            return variables["main-theme-plain"]
        },
        navigationBarWidth(){
            return variables["navigation-bar-width"]
        },
        cmsHeaderWidth(){
            return variables["cms-header-width"]
        },
        cmsHeaderWidthWithCollapseNavigationBar(){
            return variables["cms-header-width-with-collapse-navigation-bar"]
        }
    }
})
