<template>
    <div class="main">
      <p class="sign" align="center">{{title}}</p>
          <slot></slot>
        <!-- <input class="un" type="text" align="center" placeholder="Username" />
        <input class="un" type="password" align="center" placeholder="Password" /> -->
        <!-- <a class="submit" align="center">Sign in</a> -->
    </div>
</template>
<script lang="js">
export default{
    props: {
        title:{
            type: String,
            required: true,
        } 
    }
}
</script>
<style scoped lang="sass">
@import "../sass/main.sass"
</style>