// Require mongoose
const mongoose = require('mongoose');

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookId: {
        type: String
    },
    title: {
        type: String
    },
    authors: {
        type: Array
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model('Book', BookSchema);

// Export the Book model
module.exports = Book;
