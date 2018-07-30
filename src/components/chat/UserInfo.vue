<template>
  <li>
    <img :src="item.iconUrl" alt="" class="userIcon">
    <p>{{item.userName}}</p>
  </li>
</template>

<script>
  export default {
    props: ['item', 'index'],
  }
</script>

<style scoped>
  li {
    float: left;
    margin-left: 20px;
    margin-top: 5px;
  }

  .userIcon {
    width: 48px;
    height: 48px;
  }
</style>
