<template>
    <div class="header" :class="{'blackMode': blackMode}">
        <div class="logo" @click="$router.push('/')">
            eStation
        </div>
        <div class="contacts header_item" @click="$router.push('/schedules')">Contacts</div>
        <div class="account header_item" v-if="$store.state.isLogedIn" @click="$router.push('/profile')">My account</div>
        <div class="account header_item" v-else @click="$router.push('/sign/in')">Login</div>
    </div>
</template>

<script>
export default {
    props: ['blackMode']
}
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 24px 48px;
    color: #fff;
    .logo{
      align-self: flex-start;
      margin-right: auto;
      font-size: 26px;
      font-weight: bold;
      &:hover{
          cursor: pointer;
      }
    }
    &_item{
      font-size: 18px;
      font-weight: bold;
      margin-left: 16px;
      &:hover{
          cursor: pointer;
      }
    }
    .account{
      border: 1px solid #fff;
      border-radius: 4px;
      padding: 4px 16px;
      &:hover{
        background-color: rgba(255,255,255,.5);
        cursor: pointer;
      }
    }
  }

  .header.blackMode{
      color: #000;
      .account{
        border: 1px solid #000;
      }
  }
</style>