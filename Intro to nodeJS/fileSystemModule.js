let fs = require("fs")
//read
// let buffer = fs.readFileSync('abc.js')
// console.log("" + buffer);
//create
// fs.openSync("abc.txt", "w")

//write
// fs.writeFileSync("abc.txt", "Put content from wrtieFileSync")

//update
// fs.appendFileSync("abc.txt", " appended from appendFileSync")

//delete
// fs.unlinkSync("abc.txt")

//create dir
// fs.mkdirSync('Dir from mkdir')
// fs.writeFileSync("Dir from mkdir/new.txt", "Some content")
// let content = fs.readdirSync('Dir from mkdir');
// console.log(content);

// content.map((c) => {
//     console.log("Content of each file " + fs.readFileSync("Dir from mkdir/" + c));
//     console.log("Deleting the created content ");
//     fs.unlinkSync("Dir from mkdir/" + c)
// })

// console.log("Deleting Dir");
// //delete dir
// fs.rmdirSync('Dir from mkdir')

//is file exist at path ->true/false
// console.log(fs.existsSync('abx.js'))

//is file or folder
console.log(fs.lstatSync('abc.js').isFile())


