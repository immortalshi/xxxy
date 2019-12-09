<template>
  <el-tabs type="border-card" lazy="true">
    <el-tab-pane label="写文章">
      <div class="tab-body">
        <div style="margin: 10px 0;height: 20px; float:left ">正文：</div>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          show-word-limit
        >
        </el-input>
        <el-button type="primary" size="large" round>主要按钮</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="我的文章"><div class="tab-body">暂无文章</div></el-tab-pane>
    <el-tab-pane label="垃圾箱">
      <div class="tab-body">
        垃圾箱
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: 'myArticle',
    data() {
      return {
        text: '',
        textarea: ''
      };
    },
    methods: {
    }
  }
</script>
<style scoped>
  .el-main/deep/{
    line-height: 0px;
  }
  .tab-body{
    min-height: 40px;
    max-height: 620px;
    text-align: left;
    margin: 0px;
    padding: 0px;
  }

  /deep/ .el-textarea__inner{
    height:540px;
  }
</style>
