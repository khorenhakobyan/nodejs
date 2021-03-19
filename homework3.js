// 3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

//const promise = require("promise");
const promise = require("fs").promisees;
//const http = require("http");

 async function readTxt() {
    const readData = await promise.readFile("./input.txt").toString();
    const onePart = readData.slice(0, readData.length / 2);
    const secondPart = readData.slice(readData.length / 2);
    await promise.writeFile('output1.txt', onePart);
    await promise.writeFile('output2.txt', secondPart);


}
readTxt().then(()=>{
    console.log("already read")
}).catch((err)=>{
    console.log(err)
})