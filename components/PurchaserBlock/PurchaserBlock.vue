<template>
  <div>
    <h1 class="margin-bottom">{{formName}}</h1>
    <base-selector
      ref="titleInput"
      class="margin-bottom"
      title="Title"
      :options="titleList"
      placeholder
    ></base-selector>
    <custom-row>
      <base-input slot="first" :titleStyle="titleStyle" class="margin-bottom" title="Last Name" ref="lastNameInput"></base-input>
      <base-input slot="second" :titleStyle="titleStyle" class="margin-bottom" title="First Name" ref="firstNameInput"></base-input>
    </custom-row>
    <custom-row>
      <base-input  slot="first" :titleStyle="titleStyle" class="margin-bottom" title="ID Number" ref="idNumberInput"></base-input>
      <base-date-picker slot="second" :titleStyle="titleStyle" type="date" class="margin-bottom" title="Date of Birth" ref="birthInput"></base-date-picker>
    </custom-row>
    <custom-row>
      <base-input slot="first" :titleStyle="titleStyle" class="margin-bottom" title="Passport Number" ref="passportNumberInput"></base-input>
      <base-input slot="second" :titleStyle="titleStyle" class="margin-bottom" title="Nationality" ref="nationalityInput"></base-input>
    </custom-row>
    <base-input  :titleStyle="titleStyle" class="margin-bottom" title="Address" ref="addressInput"></base-input>
    <custom-row>
      <base-input slot="first" :titleStyle="titleStyle" class="margin-bottom" title="Contact Nos" ref="mobileInput"></base-input>
      <base-input slot="second" :titleStyle="titleStyle" class="margin-bottom" title="Email" ref="emailInput"></base-input>
    </custom-row>
  </div>
</template>
<script>
import CustomRow from "@/components/CustomRow/CustomRow.vue";
import {BaseSelector, BaseInput, BaseDatePicker} from "vue_basecomponent/BasicFormIndex.js";
export default {
  components: {
    BaseInput,
    BaseSelector,
    BaseDatePicker,
    CustomRow
  },
  props: {
    formName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: false
    },
    firstName: {
      type: String,
      required: false
    },
    mobile: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  mounted() {
    this.$refs.lastNameInput.value = this.lastName
    this.$refs.firstNameInput.value = this.firstName
    this.$refs.titleInput.value = this.title
    this.$refs.mobileInput.value = this.mobile
    this.$refs.emailInput.value = this.email
  },
  data() {
    return {
      titleStyle: {"font-size": "22px"},
      titleList: [
        { label: "Ms.", value: "Ms." },
        { label: "Dr.", value: "Dr." },
        { label: "Mr.", value: "Mr." },
        { label: "Mrs.", value: "Mrs." },
        { label: "Mdm.", value: "Mdm." }
      ]
    }
  }
};
</script>
<style scoped lang="sass">
.margin-bottom
  margin-bottom: 40px
</style>