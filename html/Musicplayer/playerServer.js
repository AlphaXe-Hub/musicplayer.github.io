//引入express
var name = "music"

const http = require('http');
const path = require('path');

const express = require("express");
const {request, response} = require("express");
//创建应用对象
const app = express();

//创建一个http服务器，既然app是一个函数，那这里就可以传入。
let server = http.createServer(app);
//注意，websocket的握手是需要依赖http服务的，所以这里要把server传入进去。
let io = require('socket.io')(server);

//创建路由规则

app.get('/', (request, response) => {
    // response.sendFile(__dirname + "/css/wolai.css");
    response.sendFile(__dirname + "/音乐播放器.html");
});

//导入静态资源
app.use(express.static(path.join(__dirname, '/')));

app.listen(8080, () => {
    console.log("服务启动，8080 port listen ver=" + name);
});
