const fs = require("fs");
const os = require("os");
//const arrFiles = ["homework1.js", "homework2.js", "homework3.js", "homework4.js"]
const dateNow = new Date()
const name = `${os.platform()}_${dateNow.getHours()}_${dateNow.getMinutes()}_${dateNow.getSeconds()}`



fs.readFile('homework4.js', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});
+
    fs.readFile('homework3.js', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    });
+
    fs.readFile('homework2.js', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    });
+
    fs.readFile('homework1.js', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    });

fs.writeFile(name, function (data) {
    console.log(data)
})
