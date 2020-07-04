
<template>
  <el-collapse id="base-collapse" class="roi-collapse">
    <div v-if="type == 'roi'">
      <collapse-item v-for="(item, index) in data" :key="index">
        <p slot="header">{{item["createdDate"]}}</p>
        <div slot="body">
          <div class="padding-8" v-for="(value, key) in item['answer']" :key="key">
            <h1 class="question">{{key}}</h1>
            <div class="answer-list" v-if="Array.isArray(value)">
              <div class="answer-box" v-for="valueItem in value" :key="valueItem">
                {{valueItem}}
              </div>
            </div>
            <h1 class="answer" v-else>{{value}}</h1>
          </div>
          <!-- <h1 class="question">Question 1:</h1>
          <h1 class="answer">Answer</h1>
          <h1 class="question">Question 2:</h1>
          <h1 class="answer">Answer</h1>
          <h1 class="question">Question 3:</h1>
          <h1 class="answer">Answer</h1>
          <h1 class="question">Question 4:</h1>
          <h1 class="answer">Answer</h1>
          <h1 class="question">Question 5:</h1>
          <h1 class="answer">Answer</h1> -->
        </div>
      </collapse-item>
    </div>
  </el-collapse>
</template>
<script lang="js">
import Vue from "vue";
import Request from "@/util/request";
import CollapseItem from "@/components/CollapseItem/CollapseItem";
export default Vue.extend({
  components:{
    CollapseItem
  },
  mounted(){
    switch(this.type){
      case "roi":
        Request.get(this, "get_roi_by_clientID", {clientID:this.clientID }, res => {
          this.data = res.data
          console.log(this.data);
          
        })
      break;
    }
  },
  props:{
    headerColor:{
      type: String,
      required: false,
    },
    type:{
      type: String,
      required: false
    },
    clientID:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      data: {}
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
    margin: 0px 8px
    font-size: 24px
    color: #666666
    text-decoration: underline
  .padding-8
    padding: 8px
  .answer-list
    display: flex
    .answer-box
      padding: 4px
      margin: 4px
      border-radius: 10px
      color: white
      background: #0080FF
      font-size: 24px
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