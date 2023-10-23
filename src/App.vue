<template>
  <div class="container">
    <div class="search-block">
      <input :value="getInputValue" @input="setInputValue($event.target.value)" v-focus class="input" type="text"
        placeholder="Search jokes...">
      <span class="list-info">Found jokes: {{ getPosts.length }}</span>
    </div>
    <ul class="list">
      <li v-for="post in getPosts" class="list-item" :key="post.id">
        <a class="list-link" :href="post.url">
          <p class="item-text">
            {{ post.value }}
          </p>
          <div class="item-info">
            <span class="item-id">{{ post.id }}</span>
            <span class="item-date">{{ post.created_at }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      fetchPosts: 'fetchPosts'
    }),
    setInputValue(value) {
      this.$store.commit('setInputValue', value)
    }
  },
  computed: {
    ...mapGetters({
      getPosts: 'getPosts',
      getInputValue: 'getInputValue'
    }),
  },
  watch: {
    getInputValue: function () {
      if(this.getInputValue.length >= 3) {
        this.fetchPosts()
      }
    }
  }
}
</script>
