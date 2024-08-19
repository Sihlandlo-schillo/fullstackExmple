<template>
    <div>
        <h1>Sign Up</h1>
        <label><input type="text" placeholder="first name" v-model="name"></label> <br><br>
        <label><input type="text" placeholder="last name" v-model="surname"></label><br><br>
        <label><input type="text" placeholder="age" v-model="age"></label><br><br>
        <label><input type="text" placeholder="fav coding lang" v-model="language"></label><br><br>
        <label><input type="text" placeholder="favorite car" v-model="car"></label><br><br>
        <label><input type="text" placeholder="eye colour" v-model="eye"></label><br><br>
        <h2>Your Login Details</h2>
        <label><input type="text" placeholder="username" v-model="username"></label><br><br>
        <label><input type="text" placeholder="password" v-model="password"></label><br>
        <button @click="insertUser()">Submit</button>
    </div>
</template>
<script>
export default {
    name:'SignUpView',
    data(){
        return{
            name:'',
            surname:'',
            age:'',
            language:'',
            car:'',
            eye:'',
            username:'',
            password:''
        }
    },
    methods:{
        insertUser(){
            this.$store.dispatch('insertUser',this.$data)
        }
    }
    
}
</script>
<style>
    
</style>