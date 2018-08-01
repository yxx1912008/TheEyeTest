<template>
  <div id="chatMain" v-loading="showLoading">
    <div class="chat-header">
      <div id="title">
        <p>聊&nbsp;天</p>
      </div>
      <!-- 用户列表-->
      <UserList></UserList>
    </div>
    <ChatBox></ChatBox>
    <ChatMainFoot :sendGroupMsg="sendGroupMsg"></ChatMainFoot>
  </div>
</template>

<script>
  import UserList from './UserList'
  import ChatBox from './ChatBox'
  import ChatMainFoot from './ChatMainFoot'
  import {WEBSOCKET_URL} from '../constant/Config'

  export default {
    data() {
      return {
        showLoading: false,
        websocket: null
      }
    },
    components: {
      UserList, ChatBox, ChatMainFoot
    },
    methods: {
      websocketClose: function () {
        this.websocket.close();
      },
      onmessage: function (event) {
        console.log(event.data)
        var result = JSON.parse(event.data)
        //判断接收消息的类型
        switch (result.dataType) {
          //成功消息
          case 'SUCESS_MSG':
            this.$message.success(result.showMessage);
            break;
          //用户列表
          case 'USER_LIST':
            this.$store.dispatch('updateUserInfos', JSON.parse(result.data))
            break;
          case 'ON_LINE_NOTICE':
            this.$message(result.data);
            break
          case 'GROUP_MSG':
            console.log(`您收到一条组群消息:${result.data.chatMessange}`)
            this.$store.dispatch('addChatBox', result.data)
            break;
        }
      },
      //用户发送信息
      sendGroupMsg: function (messange) {
        console.log(`用户输入的信息是:${messange}`)
        var userName = this.$route.params.userName;
        var tableNo = this.$route.params.tableNo;
        const groupMessange = {
          userName: userName,
          tableNo: tableNo,
          msgType: 'GROUP_MSG',
          messange: messange
        }
        this.websocket.send(JSON.stringify(groupMessange))
      }
    }
    ,
    mounted() {

      //判断当前浏览器是否支持WebSocket
      if (!'WebSocket' in window) {
        this.$router.back();
        this.$message.error('您的浏览器不支持！');
        return
      }

      var userName = this.$route.params.userName;
      var tableNo = this.$route.params.tableNo;
      //1.加载动画
      this.showLoading = true;
      //2.连接websocket
      var socketUrl = WEBSOCKET_URL + userName + '/' + tableNo
      this.websocket = new WebSocket(socketUrl);
      //连接成功建立的回调方法
      this.websocket.onopen = () => {
        this.showLoading = false
      }

      //连接发生错误的回调方法
      this.websocket.onerror = () => {
        this.$message.error('服务器连接发生错误');
        setTimeout(() => {
          this.$router.back()
        }, 1000)
      };

      //接收到消息的回调方法
      this.websocket.onmessage = event => {
        this.onmessage(event);
      }


    },
    destroyed: function () {
      //为了避免后台服务器在页面非正常关闭后出错
      this.websocketClose();
    }
  }
  ;
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


</style>
