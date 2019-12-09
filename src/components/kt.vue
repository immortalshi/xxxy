<template>
  <div>
    <el-container>
      <el-main>
        <el-main>看帖</el-main>
        <el-footer style=" background-color: #99a9bf">
          <el-input v-model="input"  placeholder="请输入内容" @focus="dialogFormVisible = true;clear()"></el-input>
        </el-footer>
      </el-main>
      <el-aside width="250px">
        <div id="usePic">大头照</div>
      </el-aside>
    </el-container>
    <el-dialog title="帖子" :visible.sync="dialogFormVisible" :close-on-press-escape="false" :close-on-click-modal="false"  ><!--模态框-->
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="正文" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.file" autocomplete="off" style="min-height: 200px" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit" style="margin: auto">发送</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'kt',
    data() {
      return {
        input:'',
        dialogFormVisible: false,
        form: {
          title:'',
          file:'',
        },
        formLabelWidth: '120px'
      };
    },
    methods:{
      clear(){
        this.form.title='';
        this.form.file=''
      },
      submit(){
        this.dialogFormVisible = false
      },
    },
  }
</script>

<style scoped>
  .el-textarea /deep/ .el-textarea__inner{
   min-height: 200px !important;
  }
  .el-menu .el-menu-item:hover{
    background-color:rgba(0,0,0,0.2);
  }
  .el-menu .el-menu-item:focus{
    background-color:rgba(0,0,0,0.2);
  }
  #usePic{
    margin: 25px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: #E9EEF3;
  }
</style>
