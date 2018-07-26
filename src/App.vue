<template>
  <div id="app">
    <Login></Login>
    <router-view/>
  </div>
</template>

<script>
  import Login from './components/chat/Login'

  export default {
    components: {
      Login
    }
  }
</script>

<style>


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: hidden;
  }
</style>
