<template>
  <div id="chatMain">
    <div class="chat-header">
      <div id="title">
        <p>聊&nbsp;天</p>
      </div>
      <!-- 用户列表-->
      <UserList></UserList>
    </div>
    <ChatBox class="chatBoxMain"></ChatBox>
    <div class="chat-footer">发送消息</div>
  </div>
</template>

<script>
  import UserList from './UserList'
  import ChatBox from './ChatBox'

  export default {
    components: {
      UserList, ChatBox
    }
  }
</script>

<style scoped>

  #chatMain {
    width: 100%;
    height: 100%;
    border: hidden;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .chat-header {
    width: 100%;
    height: 19%;
    margin: 0;
    padding: 0;
  }

  #title {
    height: 2rem;
    line-height: 2rem;
    font-size: large;
    border-bottom: gray 1px solid;
    padding: 0;
    margin: 0;
  }

  .chat-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    border-top: thin solid gray;
  }

  .chatBoxMain {

  }
</style>
