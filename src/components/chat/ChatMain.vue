<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="5rem" height="100%">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

  .el-container:nth-of-type(0) {
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
  }

  .el-header {
    background-color: gainsboro;
  }

  .el-aside {
    background-color: #2c3e50;
    color: white;
  }


</style>
