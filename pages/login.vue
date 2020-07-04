<template>
  <div class="background">
    <div class="row">
      <div class="container-left center-item">
        <div class="header">
          <img src="~@/assets/company_logo.png"/>
        </div>
        <login-container-box class="login-container-box" title="Log in">
          <login-input class="margin-bottom-24" placeholder="Username"></login-input>
          <login-input type="password" class="margin-bottom-24" placeholder="Password"></login-input>
          <el-button @click="handleLogIn" round>Log in</el-button>
        </login-container-box>
        <p class="footer">Powered By Clear Future Technologies Limited 2020</p>
      </div>
      <div class="container-right center-item">
        <div class="city-image">
          <div class="blue-layer"> 
            <h2>Welcome to</h2>
            <h1>CLIENT MANAGEMENT SYSTEM</h1>
            <p>Login to Access Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import Vue from "vue";
import {LoginContainerBox, LoginInput} from "vue_basecomponent"
export default Vue.extend({
    components:{
        LoginContainerBox, LoginInput
    },
    methods: {
      handleLogIn(){
        this.$router.push({ path: "/client"});
      }
    }
})
</script>
<style scoped lang="sass">
@import "@/static/variables.scss"
.background
  position: absolute
  width: 100%
  height: 100%
.el-button
  background: $main-theme
  color: white
  width: 60%
.margin-bottom-24
  margin-bottom: 24px
.city-image
  width: 100%
  height: 100%
  background-image: url("~@/assets/city_background.jpg")
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
.center-item
  display: flex
  justify-content: space-between
  align-items: center
  flex-direction: column

.row
  display: flex
  justify-content: center
  align-items: center
  height: 100%
.container-left
  height: 100%
  width: 40%
.container-right
  height: 100%
  width: 60%
.blue-layer
  color: white
  height: 100%
  font-family: sans-serif
  font-weight: bold
  background: $main-theme
  display: flex
  flex-direction: column
  justify-content: center
  text-align: center
  padding-left: 24px
  animation: fade-in 5s ease
  h2
    font-size: 48px
  h1
    font-size: 62px
  p
    position: relative
.header
  width: 100%
.footer
  color: rgba(157,157,218,1)
  font-family: sans-serif
  font-weight: bold
  text-align: right
.login-container-box
  position: relative
  animation: login-container-box-animation 2s ease

@keyframes login-container-box-animation
  0%
    left: -100%
  100%
    left: 0%



</style>