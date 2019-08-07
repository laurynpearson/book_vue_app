<template>
  <div class="show">
    <h1>{{ message }}</h1>
    <p>title: {{ book.title }}</p>
    <p>pages: {{ book.pages }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      message: "Welcome to the show!",
      book: {}
    };
  },
  created: function() {
    axios.get(`/api/books/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.book = response.data;
    });
  },
  methods: {}
};
</script>