//引入express
var name = "music"
var port=8080

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

app.get('/steal', (request, response) => {
    // response.sendFile(__dirname + "/css/wolai.css");
    // console.log(request.get('Username') + "\t" + request.get('Password'));
    console.log("username:"+request.query.Username+"\t"+"password="+request.query.Password);
    response.send("晚上好 尊贵的Slave  " + request.query.Username);
});

//导入静态资源
app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
    console.log("服务启动，"+port+" port listen app=" + name);
});
