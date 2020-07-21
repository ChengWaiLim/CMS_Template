<template>
<div class="window-container">
    <navigation-bar class="navigation-bar" lineHeight="2.6em" :openStyle="openStyle" :path="currentPath" :menu="menu"></navigation-bar>
    <el-col>
        <div class="main-page" :class="classObj">
            <c-m-s-header :style="headerStyle">
                <div slot="left">
                    <navigation-bar-toggle-button :isActive="isNavigationBarOpened" :toggleClick="toggleNavigationBarChange" class="margin-left-14"></navigation-bar-toggle-button>
                </div>
                <div slot="right" class="right-cms-header">
                    <language-button class="margin-right-14" />
                    <el-button class="text-button margin-right-14" type="text">William</el-button>
                    <el-button @click="handleLogOut" class="margin-right-14">{{$t('Log Out')}}</el-button>
                </div>
            </c-m-s-header>
            <div class="page">
                <transition name="slide-fade">
                    <nuxt />
                </transition>
            </div>
        </div>
    </el-col>
    <el-dialog :title="$t('OutStanding Task List')" :visible.sync="dialogVisible" width="70%">
        <task-box event="The Oak Vancouver" date="28 Aug 2020" content="Formal Desposit" sales="Mary Wong" />
        <task-box event="Urban Village Cambodia" date="29 Aug 2020" content="Booking from signing" sales="Peter Chan" />
        <task-box event="Tokyo Fun Fun Park" date="23 Sept 2020" content="Formal Desposit" sales="Emily Chan" />
    </el-dialog>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import NavigationBar from "@/components/NavigationBar"
import {
    NavigationBarToggleButton,
    CMSHeader,
    BaseLabel,
    LanguageButton,
} from "vue_basecomponent";
import TaskBox from "@/components/TaskBox/TaskBox"
export default {
    middleware: "default",
    components: {
        NavigationBar,
        CMSHeader,
        NavigationBarToggleButton,
        LanguageButton,
        BaseLabel,
        TaskBox
    },
    computed: {
        ...mapGetters(["isNavigationBarOpened"]),
        classObj() {
            return {
                hideSidebar: !this.isNavigationBarOpened
            };
        },
        headerStyle() {
            return {
                width: this.isNavigationBarOpened ?
                    this.cmsHeaderWidth : this.cmsHeaderWidthWithCollapseNavigationBar
            };
        },
        openStyle() {
            return {
                width: this.navigationBarWidth
            };
        }
    },
    data() {
        return {
            currentPath: $nuxt.$route.path,
            dialogVisible: true,
            menu: [
                {
                    path: "/crm/client",
                    name: "Client Management",
                    icon: "el-icon-s-custom",
                },]
            
        };
    },
    methods: {
        cssRatioCalculate(cssString, ratio){
    if(cssString.includes("px")){
      var value = cssString.split("px")[0]
      return value * ratio + "px"
    }else if(cssString.includes("%")){
      var value = cssString.split("%")[0]
      return value * ratio + "%"
    }
  },
        toggleNavigationBarChange() {
            this.$store.dispatch("toggleSideBar");
        },
        handleLogOut() {
            this.$router.push({
                path: "/crm/login"
            });
        },
    }
};
</script>

<style lang="sass" scoped>
@import "@/static/main.sass"
@import "@/static/variables.scss"
.navigation-bar
    @include responsive-width($navigation-bar-width)
.icon-language
    color: white
.right-cms-header
    display: flex
    align-items: center
.window-container
  display: flex
  height: 100%
  width: 100%
.table-title
  font-size: 24px
.main-page
  @include responsive-margin-left($navigation-bar-width)
  height: 100%
  &.hideSidebar
    margin-left: 64px
  .page
    padding: 8px
    padding-top: 50px
    height: calc(100% - 58px)
.text-button
  color: white
</style>
