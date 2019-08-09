<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <div v-for="book in filterBy(books, searchTerm, 'title')">
      <h2>Title: {{ book.title }}</h2>
      <p>Pages: {{ book.pages }}
      </p>
      <p><router-link v-bind:to="/books/ + book.id">Show More Info</router-link></p>
      <p><router-link v-bind:to="'/books/' + book.id + '/edit'">Edit the Book</router-link></p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to the index!",
      books: [],
      searchTerm: ""
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