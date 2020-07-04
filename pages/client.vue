<template>

  <div class="container">
    <transition name="fade">
    <base-table
      title="Clients Management"
      tableName="Client"
      :columnList="columnList"
      :manipulationColumn="{width: 150}"
      :isBatchSelection="false"
      ref="base_table"
      :customRefresh="handleCustomRefresh"
      :rowClick="handleRowClick"
    >
    </base-table>
    </transition>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import {Request, BaseTable} from "vue_basecomponent";
import CMSLayout from "@/layouts/CMSLayout.vue";

export default Vue.extend({
  layout: "CMSLayout",
  components:{
    BaseTable
  },
  methods:{
    async handleCustomRefresh(){
      var result = await Request.getAsync(this, "get_client_with_sales_name", {});
        return result.data;
    },
    handleRefresh(){
      this.$refs.base_table.handleRefresh()
    },
    handleRowClick(row, column, event){
      this.$router.push({ path: "/crm/client_detail", query: {ID: row.ID}});
    }
  },
  data() {
    return {
      columnList: [
        {
          label: "Title",
          prop: "title",
          type: String,
          width: 80
        },
        {
          label: "First Name",
          prop: "firstName",
          type: String,
          width: 200
        },
        {
          label: "Last Name",
          prop: "lastName",
          type: String,
          width: 200
        },
        {
          label: "Mobile Phone",
          prop: "mobile",
          type: String,
          width: 140
        },
        {
          label: "Email",
          prop: "email",
          type: String,
          width: 250
        },
        {
          label: "Sales",
          prop: "Staff.name",
          type: String,
          width: 150,
          disabled: true
        }
      ],
      dataList: []
    };
  }
});
</script>
