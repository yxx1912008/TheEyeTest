<template>
  <div class="login">
    <el-container>
      <el-header>
        <p>登&nbsp;录</p>
      </el-header>
      <el-main>
        <el-card class="box-card">
          <img src="/static/headIcon/angry-birds.png" alt="" class="icon_head">
          <el-form label-position="left" center=true>
            <el-form-item label="名称" label-width="40px">
              <el-input placeholder="请输入您的名称" size="medium" v-model="userName"></el-input>
            </el-form-item>
            <el-form-item>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round @click="loginChat">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      loginChat: function () {

        var userName = this.userName;
        if (!userName) {
          this.$message({
            message: '用户名称不能为空',
            type: 'error',
            center: true
          });
          return
        }

        var tableNo = this.$route.params.tableNo;
        if (!tableNo) {
          this.$message({
            message: '桌号不能为空',
            type: 'error',
            center: true
          });
          return;
        }

        //跳转到聊天主界面
        this.$router.push('/ChatMain')

        //请求后台参数
        /*      this.$http.post('/login/luckydeer-websocket/websocket/user/register.do', {
                userName: userName,
                tableNo: tableNo
              }, {
                emulateJSON: true
              }).then(function (resp) {
                console.log(resp);
                if (resp.body.status !== 1) {
                  this.$message({
                    message: resp.body.showMessage,
                    type: 'error',
                    center: true
                  });
                  return;
                }
                this.$message({
                  message: resp.body.showMessage,
                  type: 'success',
                  center: true
                });
              }).catch(function () {
                this.$message({
                  message: "系统异常，稍后再试",
                  type: 'success',
                  center: true
                });
                return
              })*/
      }
    }
  }
</script>

<style scoped>

  .login {
    width: 100%;
    height: 100%;
    border: 0;
  }

  /*容器的宽高*/
  .el-container {
    width: 100%;
    height: 100%;
  }

  /*头部文字*/
  .el-header {
    top: 3.5rem;
    line-height: 3.5rem;
  }

  .box-card {
    width: 18rem;
    height: 18rem;
    padding: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .icon_head {
    width: 4rem;
    height: 4rem;
  }

  .el-form {
    width: 12rem;
    height: auto;
    margin-top: 2rem;
    margin-left: 1.8rem;
  }

</style>
