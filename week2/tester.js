const fs = requie("fs")
const path = require("path")

const mypath = path.join(__dirname, "pages", "example.txt")
console.log(mypath)

// fs.readFile(path.join(_dirname, "pages", "example.txt"), "utf8", (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.readdir(path.join(__dirname, "pages"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    data.forEach(item => {
        console.log(data);
        fs.readFile(path.join(__dirname, "pages"), "utf8")
    });
});