<template>
  <div class="background">
    <div class="row">
      <div class="container-left center-item">
        <div class="header">
          <img src="~@/assets/company_logo.png" />
        </div>
        <login-container-box class="login-container-box" title="Login">
          <div class="login-input-div">
            <login-input
              class="mb-12"
              v-model="data.loginName"
              :placeholder="$t('Username')"
            ></login-input>
            <login-input
              type="password"
              v-model="data.password"
              class="mb-12"
              :placeholder="$t('Password')"
            ></login-input>
          </div>
          <el-button @click="handleLogIn" round>Login</el-button>
        </login-container-box>
        <p class="footer">
          {{ $t("Powered By Clear Future Technologies Limited 2020") }}
        </p>
      </div>
      <div class="container-right center-item">
        <div class="city-image">
          <div class="blue-layer">
            <h2>{{ $t("Welcome to") }}</h2>
            <h1>{{ $t("CHEMICAL MANAGEMENT SYSTEM") }}</h1>
            <p>{{ $t("Login to Access Dashboard") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import Vue from "vue";
import {LoginContainerBox, LoginInput, Request} from "vue_basecomponent";
export default Vue.extend({
  middleware: "login",
    components:{
        LoginContainerBox, LoginInput
    },
    methods: {
      handleLogIn() {
            Request.post(this, "user_login", {
                loginName: this.data.loginName,
                password: this.hashPassword(this.data.password)
            }, res => {
                this.$store.dispatch('setToken', res.data.token)
                this.$store.dispatch('setUser', res.data.user)
                this.$router.push({
                    path: "/Master/Location",
                });
            })
        }
    },
    data(){
      return {
        data: {}
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
  animation: fade-in 5s ease
  h2
    font-size: 2rem
  h1
    font-size: 2.6rem
.header
  width: 100%
  justify-content: center
  display: flex
.footer
  font-size: 1rem
  color: rgba(157,157,218,1)
  font-family: sans-serif
  font-weight: bold
  text-align: right
.login-container-box
  width: 60%
  height: 18em
  position: relative
  animation: login-container-box-animation 2s ease
  .login-input-div
    width: 76%
    display: flex
    flex-direction: column
    justify-content: center

@keyframes login-container-box-animation
  0%
    left: -100%
  100%
    left: 0%
</style>