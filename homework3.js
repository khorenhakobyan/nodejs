//3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին:
//_transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:

// const { Readable, Duplex, Writable, Transform } = require('stream');
// const fs = require('fs');

// const readStream = fs.createReadStream('task_3.txt ', {
//     highWaterMark: 4
// })
// const writeStreamToFile = fs.createWriteStream('homeworkr5.txt');
// readStream.pipe().pipe(writeStream);
// process.stdin.pipe(transform).pipe(writeStreamToFile);


// class RemoveSpecialChars extends Transform {
//     readStream;
//     constructor() {
//         super();
//     }

//     _transform(chunk, encoding, cb) {
//         let data = String(chunk);
//         if (this.readStream.match(/[`~,.<>;':"\/\[\]\|{}()-=_+]/)) {
//             data = readStream.replace(/[^a-zA-Z ]/g, "")
//         }

//     }
//     flush(cb) {
//         if (this.readStream) {
//             try {
//                 this.push(JSON.parse(this.readStream));
//             }
//             catch (err) {

//             }
//         }
//         cb();
//     }

// }
// const SpecialCharsObj = new RemoveSpecialChars([1, 2, 3, 4]);


// readStream.on('data', (char) => {
//     console.log(char.toString())
// })