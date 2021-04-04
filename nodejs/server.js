const http = require("http"); // server creatided
const express = require("express");
const router = require('./router')

const app = express();

app.use(express.json())
router(app)


http.createServer(app).listen(2021);
//միդլվերը դա նախատեսվախ է հաջորդ use-ին փոխանցելու համար: 
//կարա կիրառվի վալիդացիայի համար ,եթե հասկան ճիշտ է փոխանցի 
//մյուս ռաուտին:
