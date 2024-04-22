const { people, ages } = require("./people");

console.log(people, ages);

const { platform, homedir } = require("os");
console.log(platform(), homedir());
