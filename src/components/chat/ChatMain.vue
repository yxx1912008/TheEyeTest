<template>
  <div id="chatMain">
    <el-container>
      <el-header height="7.5rem">
        <p class="title">聊&nbsp;天</p>
        <!-- 用户列表-->
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>

  export default {}
</script>

<style scoped>

  * {
    margin: 0 auto;
    padding: 0;
  }

  #chatMain, el-container {
    width: 100%;
    height: 100%;
    border: 0;
  }

  .el-header {
    width: 100%;
  }

  .title {
    height: 5rem;
    line-height: 5rem;
    font-size: large;
  }

  .el-row:nth-of-type(1) {
    line-height: 5rem;

  }

  .el-footer {
    position: fixed;
    bottom: 0;
    background-color: #e3e3e3;
    width: 100%;
  }

  .el-main {
    width: 100%;
    height: 29rem;
    margin-top: 2.5rem;
    border-top: 1px solid gainsboro;
    background-color: #2c3e50;
    color: white;
    overflow: hidden;
  }

</style>
