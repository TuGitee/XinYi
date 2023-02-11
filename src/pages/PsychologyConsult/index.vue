<template>
  <div class="psychology-consult">
    <h3 class="psychology-consult-title">心理咨询</h3>
    <div class="psychology-consult-coding">
      <p>功能正在开发中...</p>
      <p>敬请期待</p>
    </div>
    <div class="psychology-consult-error">
      <p>请先使用其他功能</p>
      <p>如对您的体验造成影响</p>
      <p>敬请谅解</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.psychology-consult {
  margin: auto;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  &-title {
    width: fit-content;
    padding: 0 20px;
    font-size: 26px;
    line-height: 2;
    font-weight: bold;
    color: @font-color-dark;
    font-family: "楷体";
    border: 2px dashed @color;
    margin: 10px auto 40px;
    border-radius: 10px;
    user-select: none;
  }
  &-coding {
    margin-top: 80px;
    line-height: 1.5;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 20px;
    color: @color;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    p {
      text-align: center;
    }
  }
  &-error {
    margin-top: 80px;
    line-height: 1.5;
    letter-spacing: 3px;
    font-size: 16px;
    color: @grey-dark;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 30px;
    p {
      text-align: center;
    }
  }
}
</style>