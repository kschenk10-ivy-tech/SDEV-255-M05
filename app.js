// Include third party library
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// Express App
const app = express();

// Connect to MongoDB
const dbURI = "mongodb+srv://anthrofax:cTG8Ojvjm1zd3ygN@anthrofax.bzf9t83.mongodb.net/node-tutorial";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => {
  app.listen(3000,  function() {
    console.log('Siap menerima permintaan.')
    })
})
.catch(err => console.log(`Halo Salah, Error Message : ${err}`));

// Register View Engine
// app.set digunakan untuk mengatur konfigurasi pada app
app.set("view engine", "ejs");
// app.set("view", "myview", "ejs"); //Syntax untuk mendaftarkan View Engine, tapi view folder nya memiliki nama yang berbeda (bukan "views")

// Middleware & Static files
app.use(express.static('public')); //Untuk mendaftarkan folder yang dapat diakses dari frontent (Mengatur folder tertentu menjadi public)

// Hal di atas perlu dilakukan, karena sisi client/frontend tidak dapat mengakses file yang ada di server/backend dengan mudah, jadi file static seperti img, style, tidak dapat diakses di client jika kita tidak mendaftarkannya secara eksplisit menjadi public. Untuk melakukannya kita bisa menggunakan express.static() method

app.use(express.urlencoded({extended: true})); //Untuk melakukan enkode data yang dikirim oleh form pada sisi client/frontend, Memformat data menjadi object dan ditampung pada req.body pada route action yang diatur pada form client nya - Untuk Post Request 

// Jika tidak melakukan hal tersebut, data yang dikirim dari form akan undefined


app.use(morgan('dev')); //Untuk melakukan log detail di setiap request yang dilakukan

// -------------------------- NODE EXPRESS ROUTES -------------------------- //

// Mongoose & Mongo Sandbox Routes
/*
app.get('/add-blog', function(req, res) {
  const newBlog = new Blog({
    title: 'Hiprofax',
    snippet: 'Polusi Jakarta menduduki polusi terburuk di dunia saat ini.',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi cum facere, quidem vel unde nostrum molestias sapiente soluta suscipit tempora placeat dolores, voluptatum eveniet totam consequatur voluptas accusamus dignissimos tenetur.'
  })

  newBlog.save()
  .then(result => res.send(result))
  .catch(err => console.log(err));
})

app.get('/all-blogs', function(req, res) {
  Blog.find()
  .then(result => res.send(result))
  .catch(err => console.log(err));
})

// app.get('/single-blog', function(req, res) {
//   Blog.findById()
// })

*/

// Old Home Page
/*
app.get("/", function (req, res) {
  // res.sendFile("./views/index.html", { root: __dirname });
  //Dengan menggunakan send() method,
  // 1. Sudah otomatis melakukan tugas dari method write() & end(),
  // 2. Melakukan tugas dari method setHeader() dan otomatis menentukan type content nya menyesuaikan apa yang kita jadikan argument pada method send() tersebut.
  // 3.  Menentukan respond status berdasarkan apa yang terjadi setelah kita mengirimkan request.

  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];
  res.render("index", { title: "Home", blogs });
});
*/

// New Home Page
app.get('/', function(req, res) {
  res.redirect('/blogs');
})

app.get("/about", function (req, res) {
  // res.sendFile("./views/about.html", { root: __dirname });

  // res.render() digunakan untuk menghandle response dengan cara merendernya.
  // Parameter 1: file html yang ingin dirender, tulisakan nama filenya tanpa ekstensinya (Otomatis mencari ke folder 'views')
  // Parameter 2: Untuk mengirimkan data ke file html, (Seperti konsep pengiriman data pada blade route)
  res.render("about", { title: "Test" });
});

/*
app.get("/about-us", function (req, res) {
  res.redirect("/about"); //Sudah otomatis mengatur status code nya menjadi 301
});
*/

app.use('/blogs', blogRoutes)

app.use(function (req, res) {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });

  res.status(404).render("404", { title: "404" });
});