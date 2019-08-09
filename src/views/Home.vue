<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search: <input type="text" v-model="searchTerm" list= "titles"></p>
    <p><button v-on:click="setSortAttribute('title')">Sort by title</button></p>
    <p><button v-on:click="setSortAttribute('pages')">Sort by pages</button></p>
    <datalist id="titles">
      <option v-for="book in books">{{ book.title }}</option>
    </datalist>
    <!-- <div v-for="book in orderBy(books, sortAttribute)"> -->
    <div v-for="book in orderBy(filterBy(books, searchTerm, 'title'), sortAttribute)">
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
      searchTerm: "",
      sortAttribute: 'id'
    };
  },
  created: function() {
    console.log('i am in the created');
    axios.get("/api/books").then(response => {
      console.log(response.data);
      this.books = response.data;
    });
  },
  methods: {
    setSortAttribute: function(attribute) {
      console.log(attribute);
      this.sortAttribute = attribute;
    }
  }
};
</script>