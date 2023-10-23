import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    inputValue: '',
    posts: [],
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getInputValue(state) {
      return state.inputValue
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setInputValue(state, inputValue) {
      state.inputValue = inputValue
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${state.inputValue}`)
        commit('setPosts', response.data.result)
      } catch (e) {
        console.error(e)
      }
    }
  },
  modules: {
  }
})
