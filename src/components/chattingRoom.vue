<template>
<div>
  <el-container>
  <el-header style="background-color:rgba(0,0,0,0.1); height: 61px;padding: 0px">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item @click="skip('/kt')">看帖</el-menu-item>
      <el-menu-item @click="skip('/jp')">精品</el-menu-item>
      <el-menu-item @click="skip('/tp')">图片</el-menu-item>
      <el-menu-item @click="skip('/sp')">视屏</el-menu-item>
    </el-menu>
  </el-header>
  <el-container>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
    <el-footer style=" background-color: #99a9bf">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        @focus="openModel()"
        clearable>
      </el-input>
    </el-footer>
</el-container>
</div>
</template>

<script>
  export default {
    name: 'chattingRoom',
    data() {
      return {
        activeIndex: '1',
        input:'',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      skip(a){
        this.$router.push({path: a})
      },
      openModel(){

      }
    }
  }

</script>

<style scoped>
  /deep/ .el-main{
    margin: 0px;
    padding: 0px;
  }
  .el-menu .el-menu-item:hover{
    background-color:rgba(0,0,0,0.2);
  }
  .el-menu .el-menu-item:focus{
    background-color:rgba(0,0,0,0.2);
  }
</style>
