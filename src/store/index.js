import { createStore } from 'vuex'
import axios from 'axios'
// eslint-disable-next-line
// import {toast} from 'vue3-toastify'
import "vue3-toastify/dist/index.css"
// eslint-disable-next-line
import {useCookies} from 'vue-cookies'
import router from '@/router'


// eslint-disable-next-line
//BELOW, allow front-end to accept information (also on back-end 'store'
axios.defaults.withCredentials = true
// eslint-disable-next-line
axios.defaults.headers = $cookies.get('token')
// .headers will the name of our roken
/* eslint-disable */
/* eslint-disable */
export default createStore({
  state: {
    // state
    users:null,
    fruits:null

  },
  getters: {
  },
  mutations: {
    setUsers(state,payload){
      state.users=payload
    },
    setFruits(state,payload){
      state.fruits=payload
    }
  },
  actions: {
    async fetchUsers({commit}){
      let data = await fetch('http://localhost:6060/users/')
      let users = await data.json()
      commit('setUsers',users)
    },
    async insertUser({commit},info){
      let data = await axios.post('http://localhost:6060/users/insert', info)
      console.log(data);
      },
      async loginUser({commit},username, password){
        let {data}= await axios.post('http://localhost:6060/users/signIn', username,password)
        console.log(data);
        $cookies.set('token',data.token)

        await router.push('/')
        location.reload()
      },
      async getFruits({commit}){
        let {data} = await axios.get('http://localhost:6060/fruits')
        console.log(data);
        commit('setFruits',data)
      },
      async addToCart({commit},fruits_id){
        console.log(fruits_id);
        let {data} = await axios.post('http://localhost:6060/fruits/cart',{id: fruits_id})
        
        console.log(data);
      }
  },
  modules: {
  }
})
