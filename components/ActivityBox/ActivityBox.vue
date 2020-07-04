<template>
  <div class="activity-box">
    <div class="column">
      <div class="up-row">
        <span class="title">Event</span>
        <base-label
          value="2020-01-01"
          color="#5cb85c"
        ></base-label>
      </div>
      <div class="divider margin-top-8" />
      <span
        class="content"
      >Participated in XXX Event</span>
      <div class="bottom-row margin-bottom-16">
        <base-label
          value="Sales"
          color="#A44A3F"
        ></base-label>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import Vue from "vue";
import BaseLabel from "@/components/BaseLabel/BaseLabel"
export default Vue.extend({
    components:{
        BaseLabel
    }
})
</script>
<style lang="sass" scoped>
.activity-box
    border-radius: .25em
    margin-bottom: 16px
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
    border: 1px solid #ebeef5
.up-row
    display: flex
    justify-content: space-between
    padding-left: 12px
    padding-right: 12px
    padding-top: 16px
    align-items: center
.divider
    border: 1px solid #EEEEEE
.content
    margin: 16px  14px
.margin-bottom-16
    margin-bottom: 16px
.bottom-row
    display: flex
    justify-content: flex-end
    padding-left: 12px
    padding-right: 12px
    padding-top: 16px
    align-items: center
.column
  display: flex
  justify-content: space-between
  flex-direction: column
.title
  font-weight: bold
  font-size: 18px
.margin-top-8
    margin-top: 8px
</style>