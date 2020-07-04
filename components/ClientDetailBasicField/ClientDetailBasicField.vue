<template>
  <p>
    <el-row>
        <el-col :span="8">
            <i :class="icon"></i>
            <span>{{title}}</span>
        </el-col>
        <el-col :span="16">
            <base-label :value="value" :color="color"></base-label>
        </el-col>
    </el-row>
  </p>
</template>

<script lang="js">
import Vue from "vue";
import BaseLabel from "@/components/BaseLabel/BaseLabel.vue"
export default Vue.extend({
    components: {
        BaseLabel
    },
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true,
        },
    }
})
</script>

<style lang="sass" scoped>
p
    font-size: 24px
i
    color: #666666
.label
    display: inline
    padding: .2em .6em .3em
    font-weight: 700
    line-height: 1
    color: #fff
    text-align: center
    vertical-align: baseline
    border-radius: .25em
    background-color: #337ab7
span
     text-overflow: ellipsis
</style>
