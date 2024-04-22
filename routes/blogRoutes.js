const express = require('express');
const {blog_index, blog_post, blog_form_render, blog_single, blog_delete} = require('../controllers/blogController')

const router = express.Router();
router.get('/', blog_index);
  
router.post('/', blog_post)

router.get('/create', blog_form_render)
  
router.get('/:id', blog_single)
  
router.delete('/:id', blog_delete)


module.exports = router;
  