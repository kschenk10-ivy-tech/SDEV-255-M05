const fs = require("fs");

// Reading files
fs.readFile("./docs/blo2g.txt", function (err, data) {
  if (err) return console.log(err);

  console.log(data.toString());
});

console.log("Last Line");

// Writing files
// 1. Writing the existed file
fs.writeFile("./docs/blog.txt", "Hello World!", function () {
  console.log("File sudah diperbarui.");
});

// 2. Writing unexisted file
fs.writeFile("./docs/blog2.txt", "Haiiii!", function () {
  console.log("File baru sudah dibuat & juga sudah diperbarui.");
});

// Create & Delete Directories
if (!fs.existsSync("./asset")) {
  fs.mkdir("./asset", function (err) {
    if (err) return console.log(err);
    console.log("Folder sudah dibuat.");
  });
} else {
  fs.rmdir("./asset", function (err) {
    if (err) return console.log(err);
    console.log("Folder sudah terhapus");
  });
}

// Delete files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", function (err) {
    if (err) return console.log(err);
    console.log("File sudah terhapus");
  });
}
