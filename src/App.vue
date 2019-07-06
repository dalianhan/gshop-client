<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    name:"app",
    data(){
      return{
        msg:'App Component'
      }
    },
    components:{
      FooterGuide
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

