<template>
    <div>
        <h1>Log in</h1>
        <input type="text" placeholder="username" v-model="username"> <br><br>
        <input type="text" placeholder="password" v-model="password">
        <button v-if="!$cookies.get('token')" @click="loginUser()">Log in</button>
    </div>
    
</template>
<script>
export default {
    name: 'LogInView',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        loginUser(){
            this.$store.dispatch('loginUser', this.$data)
            // console.log(this.username, this.password);
            // location.reload()
        }
    }
}
</script>
<style>
    
</style>