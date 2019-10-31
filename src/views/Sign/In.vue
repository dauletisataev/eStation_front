<template>
    <div class="form">
        <div class="header">Login to the portal</div>
        <input v-model="email" type="text" placeholder="email address">
        <input v-model="password" type="password" placeholder="password">
        <button type="submit" class="btn" @click="submit()">
            LOGIN
        </button>
        <button class="btn signup" @click="$router.push('/sign/up')">
            GO TO SIGNUP
        </button>
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

<style lang="scss" scoped>
    .signup{
        background-color: #fff !important;
        color: #fb7b4c !important;
        border: 1px solid #fb7b4c;
        border-radius: 3px;
    }
</style>