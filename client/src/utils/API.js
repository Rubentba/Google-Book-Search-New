import axios from 'axios';
// import APIKEY from '../config/keys';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
    // Queries API books
    searchBooks: function (query) {
        return axios.get(URL + query);
    },
    // Gets the book with the given id
    getBook: function () {
        return axios.get('/api/books/');
    },
    // Gets the book with the given id
    getBookById: function (id) {
        return axios.get('/api/books/' + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete('/api/books/' + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post('/api/books', bookData);
    }
};
