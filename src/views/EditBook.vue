<template>
  <div class="Edit">
    <h1>{{ message }}</h1>
    <div v-for="error in errors">
      {{error}}
    </div>
    <form v-on:submit.prevent="updateBook()">
      <p>Title: <input type="text" v-model="book.title"></p>
      <p>Pages: <input type="text" v-model="book.pages"></p>
      <input type="submit" value="Update Your Book">
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      message: "Welcome to the Edit!",
      book: {
        title: "",
        pages: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get('/api/books/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.book = response.data;
    });
  },
  methods: {
    updateBook: function() {
      console.log('updating post');
      this.book;
      axios.patch('/api/books/' + this.book.id, this.book).then(response => {
        this.$router.push('/');
        // console.log('updated the book');
        // this.$router.push('/books/' + this.book.id);
      }).catch(error => {
        console.log('in the .catch');
        console.log(error.response);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>