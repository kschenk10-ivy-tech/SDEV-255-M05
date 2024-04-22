const Blog = require('../models/blog');

const blog_index = function(req, res) {
    Blog.find()
    .sort({createdAt: -1})
    .then(result => {
      res.render('blogs/index', {title: 'All Blogs', blogs: result})
    })
    .catch(err => console.log(err));
}

const blog_post = function(req, res) {
     const newBlog = new Blog(req.body);
  
    newBlog.save()
    .then(result => res.redirect('/blogs'))
    .catch(err => console.log(`Post Gagal - ${err}`));
}

const blog_form_render = function(req, res) {
    res.render('blogs/create', {title: "Create New Blog"});
}

const blog_single = function(req, res) {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => res.render('blogs/details', {title: 'Blog Details', blog: result}))
    .catch(err => res.status(404).render('404', {title: 'Blog Not Found'}));
}

const blog_delete = function(req, res) {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result => res.json({redirect: `/blogs`}))
    .catch(err => console.log(err));
}

module.exports = {
    blog_index,
    blog_post,
    blog_form_render,
    blog_single,
    blog_delete
}