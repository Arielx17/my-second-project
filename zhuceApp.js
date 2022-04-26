var express = require('express');
var app = express();
var newsdb = require('./zhuce');
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public', express.static('public'));

app.get('/zhuce', function (req, res) {
  res.sendFile( __dirname + "/" + "注册.html" );
});

app.get('/denglu', function (req, res) {
  res.sendFile( __dirname + "/" + "登录.html" );
});

app.get('/car', function (req, res) {
  res.sendFile( __dirname + "/" + "购物车.html" );
});

app.get('/self', function (req, res) {
  res.sendFile( __dirname + "/" + "个人主页.html" );
});

app.post('/InsertInfo', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    newsdb.InsertInfo(req.body.name, req.body.psw, req.body.phone, 
        req.body.email, req.body.rName,req.body.rAdd, function(err, result){
      res.end(result);
  });
  })

  app.post('/login', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    newsdb.login(req.body.name, req.body.psw, function(err, result){
        //console.log(result);
        // 释放连接
      res.end(result);
  });
  })

  app.get('/addgoods', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    newsdb.addgoods(function(err, result){
        //console.log(result);
        // 释放连接
      res.end(result);
  });
  })

  app.get('/user', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    newsdb.user(function(err, result){
        //console.log(result);
        // 释放连接
      res.end(result);
  });
  })

  app.get('/deletegoods', function (req, res) {
    newsdb.deletegoods(req.query.id, function(err, result){
     res.end(result);
    });
  });

   
  var server = app.listen(8087, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
  })