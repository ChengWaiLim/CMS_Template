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
        },
        ratio(){
            if(screen.width < 480)
                return variables["phone-width-ratio"]
            else if (screen.width < 760)
                return variables["small-pad-width-ratio"]
            else if (screen.width < 960)
                return variables["pad-width-ratio"]
            else
                return variables["pc-width-ratio"]
        }
    },
    
})
