<template>
    <div class="profile">
        <div class="header">
            <h3 class="name">
                Profile
            </h3>
            <div class="logout">
                <div class="logout--icon">
                <img src="@/assets/icons/logout.svg" alt="logout">
                </div>
                <div class="logout--text" @click="logOut()">
                    ВЫЙТИ
                </div>
            </div>
        </div>
        <div class="tabs">
            <div class="tab" :class="{'active': currentRouteName === 'trips'}" @click="$router.push('/profile/trips')">
                Upcoming trips
            </div>
            <div class="tab" :class="{'active': currentRouteName === 'orders'}" @click="$router.push('/profile/orders')">
                My orders
            </div>
            <div class="tab" :class="{'active': currentRouteName === 'info'}" @click="$router.push('/profile/info')">
                Profile Info
            </div>
        </div>
        <div class="content" >
            <transition name="fade">
                <router-view />
            </transition>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTabIndex: 0
        }
    },
    mounted() {
        console.log(this.currentRouteName)
        if(this.$route.name === 'profile')
            this.$router.push('/profile/trips')
    },
    computed: {
        currentRouteName() {
            return this.$route.name
        } 
    },
    methods: {
        logOut() {
            this.$store.commit('setLogedIn', false)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
$break-small: 500px;
$break-medium: 800px;
$break-large: 1200px;
.profile{
  // overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background: #F9F9F9;
  padding: 100px 175px;
    background-image: url('../assets/background_train.jpg');
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
    padding: 80px 48px;
    min-width: 500px;
    width: 100%;
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name{
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 37px;
      color: #fff;
      @media screen and (max-width: $break-small) {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .logout{
      display: flex;
      align-items: center;
      &:hover{
        cursor: pointer;
      }
      &--icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
      }
      &--text{
        margin-left: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
      }
    }
  }

  .tabs{
    margin-top: 16px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(51, 50, 50, 0.08);
    .tab{
      height: 48px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      margin-left: 16px;
      display: flex;
      align-items: center;
      &:hover{
        cursor: pointer;
      }
      &.active{
        border-bottom: 1px solid #fff;
        margin-bottom: -1px;
      }
      &:first-of-type{
        margin-left: 0px;
      }
    }
  }
  .content{
      margin-top: 40px;
  }
}

.fade-leave-active {
  transition-duration: 0s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter-active{
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>