<template>
  <el-collapse-item class="collapse-item" style="background: linear-gradient(90deg, rgba(36,177,89,1) 0%, rgba(45,240,99,1) 100%)">
    <!-- <template slot="title" class="collapse-header">2019-11-11</template> -->
    <template slot="title" class="collapse-header">
      <slot name="header"></slot>
    </template>
    <slot name="body"></slot>
  </el-collapse-item>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
    props:{
        data:{
            type: Object
        }
    }
})
</script>
<style lang="sass" scoped>
.collapse-item
  border: 1px solid #ebeef5
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.1)
  margin-bottom: 10px
  border-radius: 4px
  .question
    margin: 0px
    color: #666666
    .answer
      margin: 0px 16px
      color: #666666
      text-decoration: underline
</style>
<style lang="sass">
#base-collapse
  .el-collapse-item__header
    background: inherit
    border-radius: 4px 4px 0px 0px
    color: white
    padding: 4px 12px
    font-size: 20px
    .el-collapse-item__wrap
      padding: 4px
</style>