<template>
  <div class="chatBox">
    <ChatInfo v-for="(item,index) in chatList" :item="item" :index="index">
    </ChatInfo>
  </div>
</template>

<script>
  import ChatInfo from './ChatInfo'
  import {mapState} from 'vuex'

  export default {
    components: {
      ChatInfo
    },
    computed: {
      ...mapState(['chatList'])
    }
  }
</script>

<style scoped>


  .chatBox {
    width: 100%;
    height: 70%;
    background-color: white;
    overflow-y: auto
  }
</style>
