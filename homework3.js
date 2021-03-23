//3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  ստորակետները  և
//կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:
// const fs = require('fs').promises;

// const path = './homework3.txt'

// async function removeCommas() {
//     const homework3_text = await fs.readFile('./homework3.txt', 'utf-8');
//     const replace_text = homework3_text.replace(/,/g, '');


//     await Promise.all([
//         fs.writeFile('replace.txt', replace_text),


//     ]);

// }


// removeCommas().then(() => {
//     console.log('done');
//     fs.unlink(path)
// }).catch((err) => {
//     console.log(err);
// });


