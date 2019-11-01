<template>
    <div class="form">
        <div class="header">Sign Up in the portal</div>
        <input v-model="email" type="text" placeholder="email address">
        <input v-model="name" type="text" placeholder="name">
        <input v-model="surname" type="text" placeholder="surname">
        <input v-model="phone" type="number" placeholder="phones">
        <input v-model="password" type="password" placeholder="password">
        <button type="submit" class="btn" @click="submit()">
            SIGN UP
        </button>
        <button class="btn login" @click="$router.push('/sign/in')">
            GO TO LOGIN
        </button>
    </div>
</template>

<script>
import axios from 'axios';
// import { appUrl } from '../../config/consts.js'
export default {
    data(){
        return {
            email: '',
            name: '',
            surname: '',
            phone: '',
            password: '' 
        }
    },
    methods: {
        submit() {
            // let _this = this
            if(!(this.email && this.password)){
                alert('fill the form')
                return
            }
            axios({
                method: 'post',
                url: 'http://5.101.181.188:8085/auth/passenger/signup/',
                data: {
                    username: 'dake@gmail.com',
                    first_name: 'daulet',
                    last_name: 'issatayev',
                    password: '123456'
                }
            }).then(function(r) {
                console.log(r)
                this.$store.commit('setLogedIn', true)
                this.$router.push('/profile');
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
        background-color: #fff !important;
        color: #fb7b4c !important;
        border: 1px solid #fb7b4c;
        border-radius: 3px;
    }
</style>