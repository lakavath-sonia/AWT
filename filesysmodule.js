var fs = require("fs");
fs.readFile("file.txt", function(err, data) {
    console.log(data.toString());
})
fs.writeFile("file.txt", "3rd year students", function(err, data) {
    console.log("data inserted");
})
fs.appendFile("file.txt", "cvr college", function(err, data) {
    console.log("data appended");
})

//console.log("file appended");

//fs.rename("file.txt", '3it_b', function(err, data) {
//  console.log("file renamed");
//})