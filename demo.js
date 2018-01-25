#!/usr/bin/env node
var fs = require('fs');
dirName = process.argv[2]
if (fs.existsSync(dirName)) {
    console.log("error: dir exists");
    process.exit(1);
}
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')
    fs.writeFileSync("./index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>")
    fs.writeFileSync("css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = 'Hello World' alert(string)")
    console.log("success")
    process.exit(0)
