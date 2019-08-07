<template>
  <div class="New">
    <h1>{{ message }}</h1>
    <p>Title: <input type="text" v-model="newBookTitle"></p>
    <p>Pages: <input type="text" v-model="newBookPages"></p>
    <button v-on:click="makeBook()">Make a New Book</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the New!",
      newBookTitle: "",
      newBookPages: ""
    };
  },
  created: function() {},
  methods: {
    makeBook: function() {
      console.log('in make book');
      var newBook = {
        title: this.newBookTitle,
        pages: this.newBookPages
      };
      axios.post('/api/books', newBook).then(response => {
        console.log('in the callback for create');
        console.log(response.data);
        this.$router.push('/');
      });
    }
  }
};
</script>