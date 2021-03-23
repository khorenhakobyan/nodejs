//2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս,
//օր, ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):

// const fs = require('fs');
// const dateNow = new Date();
// const realTime = `${dateNow.getMonth()}_${dateNow.getDay()}_${dateNow.getHours()}_${dateNow.getMinutes()}_${dateNow.getSeconds()}`;
// fs.rename('./file.txt', realTime, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('File Renamed')
// })