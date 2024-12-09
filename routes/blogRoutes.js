const express = require('express');
const {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController');
const router = express.Router();

// CRUD Routes
router.post('/blogs', createBlog); // Create
router.get('/blogs', getBlogs); // Read all
router.get('/blogs/:id', getBlogById); // Read single
router.put('/blogs/:id', updateBlog); // Update
router.delete('/blogs/:id', deleteBlog); // Delete

module.exports = router;
