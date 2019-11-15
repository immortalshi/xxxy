<template>
  <div id="app">
    <leftmenu></leftmenu>
    <!--<router-view></router-view>-->
  </div>
</template>

<!--<script>
  export default {
    name: 'App',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      skip(a){
        this.$router.push(a)
      }
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: #323A4B;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
    max-height: 1060px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    min-height: 650px;
    max-height: 1000px;
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
  }
  .bg-purple-light {

  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  body > .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside

</style>-->





<script>
  import leftmenu from './components/leftmenu'
export default {
  name: 'App',
  components: {
    'leftmenu':leftmenu
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
