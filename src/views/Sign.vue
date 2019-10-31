<template>
  <div class="sign">
    <transition name="fade">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '' 
        }
    },
    methods: {
        submit() {
            if(!(this.email && this.password)){
                alert('fill the form')
                return
            }
            this.$store.commit('setLogedIn', true)
            this.$router.push('/profile');
        }
    }
}
</script>

<style lang="scss">
    .sign{
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
            padding: 24px 24px;
            background: #fff;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            .header{
                font-weight: bold;
                font-size: 16px;
            }
            input{
                margin-top: 14px;
                height: 50px;
                font-size: 14px;
                padding-left: 12px; 
                font-size: 16px;
            }
            .btn{
                margin-top: 14px;
                box-shadow: none;
                padding: 7px 12px 8px;
                border-radius: 3px 3px 3px 3px;
                touch-action: manipulation;
                background-color: #fb7b4c;
                border-color: #fb7b4c;
                color: white;
                text-align: center;
            }
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