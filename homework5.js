//5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի
//այն ֆայլերը իրենց պարունակություններով որոնք 1kB մեծ են :
// const fs = require('fs-extra').promises;
// const { Readable, Transform, Writable, Duplex } = require('stream');
// const source = './homework5';
// const destination = './newDir'

// async function transformFile() {
//     const readData = await fs.readdir("./homework5", function (err, files) {
//         if (err) {
//             return console.error(err);
//         }
//         files.forEach(function (file) {
//             console.log(file);
//         });
//     });
//     await Promise.all([
//         fs.mkdir('newDir', function (err) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("Directory created successfully!");
//         })



//     ]);


// }
// transformFile().then(() => {
//     console.log('done');
//     fs.copyFile(source, destination, function (err) {
//         if (err) {
//             console.log("err")
//         }
//         console.log('Copy completed!')

//     })

// }).catch((err) => {
//     console.log(err);
// });
