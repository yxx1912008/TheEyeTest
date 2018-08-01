<template>
  <div class="chat-info">
    <el-row :gutter="2">
      <el-col :span="24">
        <span class="time">2018年7月30日 17:42:32 </span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <img :src="item.iconUrl" alt="" class="user-icon">
      </el-col>
      <el-col :span="17">
        <el-card shadow="always">
          <p class="user-name-text">{{item.userName}}:</p>
          <p>{{item.chatMessange}}</p>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    props: ['item', 'index']
  }
</script>

<style scoped>
  .chat-info {
    margin-top: 3px;
  }

  .el-card {
    background-color: #a8d8f5;
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .time {
    color: #adaeb1;
    font-size: 15px;
  }

  .user-icon {
    width: 48px;
    height: 48px;
    top: 2rem;
    position: relative;
  }

  .user-name-text {
    font-weight: bold;
    text-align: left;
  }
</style>
