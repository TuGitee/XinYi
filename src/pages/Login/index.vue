<template>
  <div class="login">
    <div class="login-header">
      <div class="login-header-title">登录</div>
      <div class="login-header-subtitle">
        登录后可查看后台内容，如需登录，请联系管理员！
      </div>
    </div>
    <div class="login-input">
      <form>
        <div class="login-input-item">
          <div class="login-input-item-title">用户名</div>
          <div class="login-input-item-input">
            <input
              type="text"
              v-model="username"
              @keyup.enter="login"
              placeholder="请输入用户名"
            />
          </div>
        </div>
        <div class="login-input-item">
          <div class="login-input-item-title">密码</div>
          <div class="login-input-item-input">
            <input
              type="password"
              current-password="true"
              v-model="password"
              placeholder="请输入密码"
              @keyup.enter="login"
            />
          </div>
        </div>
        <div class="login-input-item">
          <div class="login-input-item-button">
            <button @click="login">登录</button>
          </div>
        </div>
      </form>
    </div>
    <CardItem v-if="isShow" :item="item" @mask="handleShow" />
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
export default {
  name: "Login",
  components: {
    CardItem,
  },
  data() {
    return {
      username: "",
      password: "",
      isShow: false,
      item: {
        title: "注意！",
        content: ["用户名或密码错误，请联系管理员！"],
      },
    };
  },
  methods: {
    login() {
      if (this.username === "xinyiAdmin" && this.password === "uestc") {
        this.$router.push({ name: "BackEnd" });
      } else {
        this.isShow = true;
      }
    },
    handleShow() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-title {
      font-size: 30px;
      font-weight: 600;
      color: @font-color;
      border-radius: 10px;
      font-family: "楷体";
      padding: 10px 20px;
      border: 2px dashed @color;
    }
    &-subtitle {
      font-size: 14px;
      margin-top: 10px;
      width: 80%;
      padding: 20px;
      color: @font-color-light;
    }
  }
  &-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 10px;
      &-title {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 16px;
        color: @font-color;
        padding: 20px;
      }
      &-input {
        width: 300px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        input {
          width: 80%;
          height: 40px;
          border: 1px solid @color;
          border-radius: 10px;
          padding: 0 10px;
          line-height: 1;
        }
      }
      &-button {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        button {
          width: 300px;
          height: 40px;
          border: none;
          border-radius: 10px;
          padding: 0 10px;
          line-height: 1;
          background: @color-light;
          color: @white;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>