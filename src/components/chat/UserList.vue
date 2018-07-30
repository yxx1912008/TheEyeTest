<template>
  <ul class="user-list">
    <UserInfo v-for="(item,index) in userInfos" :item="item" :index="index">
    </UserInfo>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import UserInfo from './UserInfo'

  export default {
    computed: {
      ...mapState(['userInfos'])
    },
    components: {
      UserInfo
    }
  }
</script>

<style scoped>
  .user-list {
    height: 5rem;
    width: 100%;
    list-style: none;
    border-bottom: thin gray solid;
  }

</style>
