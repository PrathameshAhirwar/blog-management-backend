const mongoose = require('mongoose');

// Define blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'], // Ensures title is provided
        trim: true // Removes leading/trailing spaces
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [20, 'Content must be at least 20 characters']
    },
    tags: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export the Blog model
module.exports = mongoose.model('Blog', blogSchema);
