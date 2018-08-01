<template>
  <div class="chat-footer">
    <el-form :inline="true" size="medium">
      <el-form-item>
        <el-input v-model="userInput" placeholder="请输入信息"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发送</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    props: ['sendGroupMsg'],
    data() {
      return {
        userInput: ''
      }
    },
    methods: {
      onSubmit: function () {

        if (!this.userInput) {
          this.$message.error('聊天内容不能为空');
          return
        }
        this.sendGroupMsg(this.userInput)
        this.userInput = ''
      }
    }
  };
</script>

<style scoped>
  .chat-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    border-top: thin solid gray;
    background-color: white;
  }

  .el-form {
    margin-top: 0.8rem;
  }
</style>
