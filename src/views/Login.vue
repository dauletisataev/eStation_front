<template>
  <div class="login">
      <div class="form">
          <div class="header">Login to the portal</div>
          <input type="text" placeholder="email address">
          <input type="password" placeholder="password">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .login{
        width: 100%;
        height: 100vh;
        background-image: url('../assets/background_train.jpg');
        background-size:     cover;
        background-repeat:   no-repeat;
        background-position: center center;
        display: flex;
        justify-content: center;
        align-items: center;
        .form{
            width: 300px;
            padding: 42px 24px;
            background: #fff;
        }
    }
</style>