<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="book in books">
      <h2>Title: {{ book.title }}</h2>
      <p>Number of Pages: {{ book.pages }}</p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the index!",
      books: []
    };
  },
  created: function() {
    console.log('i am in the created');
    axios.get("/api/books").then(response => {
      console.log(response.data);
      this.books = response.data;
    });
  },
  methods: {}
};
</script>