<template>
  <div class="show">
    <h1>{{ message }}</h1>
    <p>id: {{ book.id }}</p>
    <p>title: {{ book.title }}</p>
    <p>pages: {{ book.pages }}</p>
    <button v-on:click="destroyBook()">Destroy the Book</button>
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
    console.log('in created');
    axios.get('/api/books/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.book = response.data;
    });
  },
  methods: {
    destroyBook: function() {
      axios.delete('/api/books/' + this.book.id).then(response => {
        this.$router.push('/');
      });
    }
  }
};
</script>
