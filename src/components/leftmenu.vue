
<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple" style="font-size: 24px;color: red;text-align: left">潇湘汐苑</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div  class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px"><!--侧边栏-->
        <el-row class="tac">
          <el-col :span="24" style="min-height: 336px; text-align: left">
            <el-menu

              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              router
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="/">
                <i class="el-icon-s-grid"></i>
                <span slot="title">首页</span>
              </el-menu-item>


              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>个人信息</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="message">
                    <i class="el-icon-s-order"></i>
                    <span>我的资料</span>
                  </el-menu-item>
                  <el-menu-item index="collection">
                    <i class="el-icon-star-on"></i>
                    <span>我的收藏</span>
                  </el-menu-item>
                  <!--<el-menu-item index="presents">
                    <i class="el-icon-present"></i>
                    <span>我的礼物</span>
                  </el-menu-item>-->
                  <!--<el-menu-item index="bin">
                    <i class="el-icon-delete-solid"></i>
                    <span>垃圾箱</span>
                  </el-menu-item>-->
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="kt">
                <i class="el-icon-chat-line-square"></i>
                <span slot="title">聊天室</span>
              </el-menu-item>
              <el-menu-item index="myArticle">
                <i class="el-icon-document-add"></i>
                <span slot="title">我要投稿</span>
              </el-menu-item>

              <!--<el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-s-custom"></i>
                  <span>干部竞选</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="chief">
                    &lt;!&ndash;<i class="el-icon-s-order"></i>&ndash;&gt;
                    <span>社长</span>
                  </el-menu-item>
                  <el-menu-item index="secretary">
                    &lt;!&ndash;<i class="el-icon-star-on"></i>&ndash;&gt;
                    <span>秘书长</span>
                  </el-menu-item>
                  <el-menu-item index="study">
                    &lt;!&ndash;<i class="el-icon-present"></i>&ndash;&gt;
                    <span>学习部长</span>
                  </el-menu-item>
                  <el-menu-item index="logistics">
                    &lt;!&ndash;<i class="el-icon-delete-solid"></i>&ndash;&gt;
                    <span>后勤部长</span>
                  </el-menu-item>
                  <el-menu-item index="outreach">
                    &lt;!&ndash;<i class="el-icon-delete-solid"></i>&ndash;&gt;
                    <span>外联部长</span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>-->

              <el-menu-item index="library" >
                <i class="el-icon-collection"></i>
                <span>图书馆</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
        <el-footer style="color: #E9EEF3">作者：伟大的石仙人</el-footer>
      </el-container>
    </el-container>
<!--    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
  </el-container>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    /*  skip(a){
        this.$router.push({path: a})
      }
    },
/*    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },*/
  }}
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
    min-height: 650px;
    max-height: 1000px;
    padding: 0px;
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

</style>
