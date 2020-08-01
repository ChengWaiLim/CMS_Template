<template>
<div class="window-container">
    <navigation-bar class="navigation-bar" lineHeight="2.6em" :openStyle="openStyle" :path="currentPath" :menu="menu"></navigation-bar>
    <el-col>
        <div class="main-page" :class="classObj">
            <c-m-s-header :style="headerStyle">
                <div slot="left">
                    <navigation-bar-toggle-button :isActive="isNavigationBarOpened" :toggleClick="toggleNavigationBarChange" class="ml-8"></navigation-bar-toggle-button>
                </div>
                <div slot="right" class="right-cms-header">
                    <language-button class="mr-8" />
                    <el-button class="text-button mr-8" type="text">William</el-button>
                    <el-button @click="handleLogOut" class="mr-8">{{$t('Log Out')}}</el-button>
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
import {
    BaseLabel,
    NavigationBar,
    CMSHeader,
    NavigationBarToggleButton,
    LanguageButton
} from "vue_basecomponent";
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
            menu: [{
                    name: this.$t("Master Set up"),
                    icon: "el-icon-collection",
                    children: [{
                            path: "/crm/system_parameter",
                            name: this.$t("System Parameter"),
                            icon: "el-icon-set-up"
                        },
                        {
                            path: "/crm/developer",
                            name: this.$t("Developers Master"),
                            icon: "el-icon-office-building"
                        },
                        {
                            path: "/crm/project",
                            name: this.$t("Project Master"),
                            icon: "el-icon-s-management"
                        },
                        {
                            path: "/crm/client",
                            name: this.$t("Client Master"),
                            icon: "el-icon-s-order"
                        },
                        {
                            path: "/crm/staff",
                            name: this.$t("Staff Master"),
                            icon: "el-icon-user",
                        },
                    ]
                },
                {
                    path: "/crm/campaign",
                    name: this.$t("Campaign Management"),
                    icon: "el-icon-s-cooperation"
                },
                {
                    name: this.$t("Event Management"),
                    icon: "el-icon-location",
                    children: [{
                            path: "/crm/event",
                            name: this.$t("Event"),
                            icon: "el-icon-location",
                        }, {
                            path: "/crm/opportunity",
                            name: this.$t("Opportunity Management"),
                            icon: "el-icon-document",
                        }, {
                            path: "/crm/booking",
                            name: this.$t("Customer Management"),
                            icon: "el-icon-s-order"
                        },
                        {
                            path: "/crm/payment_schedule",
                            name: this.$t("Payment Management"),
                            icon: "el-icon-date"
                        }

                    ]
                },
                {
                    path: "/crm/client",
                    name: this.$t("Sales Processing"),
                    icon: "el-icon-s-custom",
                },
                {
                    path: "/crm/dashboard",
                    name: this.$t("Dashboard & Reports"),
                    icon: "el-icon-s-marketing"
                },
            ]
        };
    },
    methods: {
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
@import "@/static/variables.scss"
.navigation-bar
    width: $navigation-bar-width
.icon-language
    color: white
.right-cms-header
    display: flex
    align-items: center
.window-container
    display: flex
    height: 100%
    width: 100%
.main-page
    margin-left: $navigation-bar-width
    height: 100%
    &.hideSidebar
        margin-left: 64px
    .page
        padding: .5em
        padding-top: 3em
        height: calc(100% - 3em)
    .text-button
        color: white
</style>
