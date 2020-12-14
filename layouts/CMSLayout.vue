<template>
<div class="window-container">
    <navigation-bar id="navigation-bar"  :class="classObj" lineHeight="2.6em" :path="currentPath" :menu="menu"></navigation-bar>
    <el-col>
        <div class="main-page" :class="classObj">
            <c-m-s-header :style="headerStyle">
                <div slot="left">
                    <navigation-bar-toggle-button :isActive="isNavigationBarOpened" :toggleClick="toggleNavigationBarChange" class="ml-8"></navigation-bar-toggle-button>
                </div>
                <div slot="right" class="right-cms-header">
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
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import {
    NavigationBar,
    NavigationBarToggleButton,
    CMSHeader,
    Request
} from "vue_basecomponent";
export default {
    middleware: "authenticated",
    components: {
        NavigationBar,
        CMSHeader,
        NavigationBarToggleButton
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
                    this.cmsHeaderWidth :
                    this.cmsHeaderWidthWithCollapseNavigationBar,
                background: this.mainTheme
            };
        },
    },
    data() {
        return {
            currentPath: $nuxt.$route.path,
            menu: [{
                    name: this.$t('System Admin'),
                    icon: "el-icon-s-custom",
                    bgColor: 'red',
                    auth: this.checkReadPermission("/Master/Reference"),
                    children:[
                        {
                            path: "/Master/Reference",
                            name: this.$t('Reference Setting'),
                            icon: "el-icon-location",
                        }
                    ]
                },
                {
                    name: this.$t('Ordering'),
                    icon: "el-icon-s-order",
                    children: [{
                        path: "/Order/CW-AllOrder",
                        name: this.$t('Chemical Waste'),
                        icon: "el-icon-delete",
                        auth: this.checkReadPermission("/Order/CW-AllOrder"),
                    },{
                        path: "/Order/DG-AllOrder",
                        name: this.$t('Dangerous Goods'),
                        icon: "el-icon-warning",
                        auth: this.checkReadPermission("/Order/DG-AllOrder"),
                    },
                    {
                        path: "/Order/LN-AllOrder",
                        name: this.$t('Liquid Nitrogen'),
                        icon: "el-icon-refrigerator",
                        auth: this.checkReadPermission("/Order/LN-AllOrder"),
                    }]
                },
                {
                    path: "/StockTake/AllStockTake",
                    name: this.$t('Stock Take'),
                    icon: "el-icon-edit-outline",
                    auth: this.checkReadPermission("/StockTake/AllStockTake"),
                },
                {
                    name: this.$t('Stock Inventory'),
                    icon: "el-icon-box",
                    children: [
                        // {
                        //     path: "/Inventory/AllLocation",
                        //     name: this.$t('Location'),
                        //     icon: "el-icon-location"
                        // },
                        {
                            path: "/Inventory/AllDepartment",
                            name: this.$t('Department'),
                            icon: "el-icon-office-building",
                            auth: this.checkReadPermission("/Inventory/AllDepartment"),
                        }
                    ]
                },
                {
                    path: "/Master/DutySheet",
                    name: this.$t('Duty Sheet'),
                    icon: "el-icon-date",
                    auth: this.checkReadPermission("/Master/DutySheet"),
                },
                {
                    icon: "el-icon-document",
                    name: this.$t('Report'),
                    children: [{
                            path: "/Document/Monthly_Statement",
                            name: this.$t('Monthly Statement'),
                            icon: "el-icon-document-copy",
                            auth: this.checkReadPermission("/Document/Monthly_Statement"),
                        },
                        {
                            path: "/Document/FEO_Summary",
                            name: this.$t('FEO Summary'),
                            icon: "el-icon-document",
                            auth: this.checkReadPermission("/Document/FEO_Summary"),
                        },
                        // {
                        //     path: "/Document/Test",
                        //     name: this.$t('Test'),
                        //     icon: "el-icon-document"
                        // },
                        {
                            path: "/Document/Annual_Report",
                            name: this.$t('Annual Report'),
                            icon: "el-icon-data-line",
                            auth: this.checkReadPermission("/Document/Annual_Report"),
                        },
                    ]
                },
                {
                    name: this.$t('Master Setup'),
                    icon: "el-icon-s-operation",
                    children: [{
                            path: "/Master/Location",
                            name: this.$t('Location'),
                            icon: "el-icon-location",
                            auth: this.checkReadPermission("/Master/Location"),
                        },
                        {
                            path: "/Master/Department",
                            name: this.$t('Department'),
                            icon: "el-icon-office-building",
                            auth: this.checkReadPermission("/Master/Department"),
                        },
                        {
                            path: "/Master/Account",
                            name: this.$t('Account'),
                            icon: "el-icon-bank-card",
                            auth: this.checkReadPermission("/Master/Account"),
                        },
                        {
                            path: "/Master/ChemicalWaste",
                            name: this.$t('Chemical Waste'),
                            icon: "el-icon-delete",
                            auth: this.checkReadPermission("/Master/ChemicalWaste"),
                        },
                        {
                            path: "/Master/DangerousGoods",
                            name: this.$t('Dangerous Goods'),
                            icon: "el-icon-warning",
                            auth: this.checkReadPermission("/Master/DangerousGoods"),
                        },
                        {
                            path: "/Master/Nitrogen",
                            name: this.$t('Liquid Nitrogen'),
                            icon: "el-icon-refrigerator",
                            auth: this.checkReadPermission("/Master/Nitrogen"),
                        }
                    ]
                },
                
            ]
        };
    },
    methods: {
        toggleNavigationBarChange() {
            this.$store.dispatch("toggleSideBar");
        },
        handleLogOut() {
            Request.post(this, "user_logout", {token: this.$store.getters.token, ID: this.$store.getters.user.ID}, res => {
                this.$store.dispatch('setToken', "")
                this.$store.dispatch('setUser', null)
                this.$router.push({
                    path: "/login",
                });
            })
        }
    }
};
</script>

<style lang="sass" scoped>
@import "@/static/main.sass"
@import "@/static/variables.scss"
#navigation-bar
    width: $navigation-bar-width
    &.hideSidebar
        width: 64px
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