const fs = require("fs");

// 1. Cara pertama (Read Stream)
const readStream1 = fs.createReadStream("./docs/blog3.txt");

readStream1.on("data", function (chunk) {
  console.log("CHUNK BARU DITERIMA");
  console.log(chunk.toString());
});

// 2. Cara kedua (Read Stream, menggunakan 'utf8' pada argument kedua)
const readStream2 = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });

readStream2.on("data", function (chunk) {
  console.log("CHUNK BARU DITERIMA");
  console.log(chunk);
});

// 3. Write Stream (Menggunakannya untuk melakukan copy data dari file yg satu ke file yg lain)
const readStream3 = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });
const writeStream1 = fs.createWriteStream("./docs/blog4.txt");

readStream3.on("data", function (chunk) {
  console.log("CHUNK BARU DITERIMA");
  console.log(chunk);

  writeStream1.write("---------CHUNK BARU---------\n");
  writeStream1.write(chunk);
});

// 4. Melakukan copy data dengan cara yang lebih mudah
const readStream4 = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });
const writeStream2 = fs.createWriteStream("./docs/blog4.txt");

readStream4.pipe(writeStream2);
