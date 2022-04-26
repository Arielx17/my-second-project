var express = require('express');
var app = express();
var goodsdb = require('./edit');
var newsdb = require('./zhuce');
var manadb = require('./all_1');
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/public', express.static('public'));
//婷婷
app.get('/editmana.html', function (req, res) {
   res.sendFile( __dirname + "/" + "editmana.html" );
});

app.get('/goods', function (req, res) {
  res.sendFile( __dirname + "/" + "goodsdetail.html" );
});

app.get('/all', function (req, res) {
  res.sendFile( __dirname + "/" + "allgoods.html" );
});

app.get('/add', function (req, res) {
  res.sendFile( __dirname + "/" + "editmana1.html" );
});

app.get('/goodsdetail', function (req, res) {
  res.sendFile( __dirname + "/" + "editmana1.html" );
});

app.get('/shouye', function (req, res) {
  res.sendFile( __dirname + "/" + "homepage.html" );
});

app.get('/guanyu', function (req, res) {
  res.sendFile( __dirname + "/" + "aboutus.html" );
});

app.get('/zixun', function (req, res) {
  res.sendFile( __dirname + "/" + "ifmpage.html" );
});

app.get('/clock', function (req, res) {
  res.sendFile( __dirname + "/" + "clock.html" );
});

app.get('/showgoods', function (req, res) {
   goodsdb.showgoods(function(err, result){
    res.end(result);
   });
});

app.get('/getdetail', function (req, res) {
  goodsdb.getDetail(req.query.goodsId,function(err, result){
   res.end(result);
  });
});

app.get('/delete', function (req, res) {
  goodsdb.deletegoods(req.query.goodsId, function(err, result){
   res.end(result);
  });
});

app.post('/insertgoods', urlencodedParser, function (req, res) {
  goodsdb.insertgoods(req.body.name, req.body.price, req.body.stock, req.body.info, function(err, result){
    res.end(result);
  });
})

app.post('/updategoods', urlencodedParser, function (req, res) {
  goodsdb.updategoods(req.body.name, req.body.price, req.body.stock, req.body.info,req.body.id, function(err, result){
    res.end(result);
  });
})

app.post('/addcart', urlencodedParser, function (req, res) {
  goodsdb.addcart(req.body.id, req.body.num, function(err, result){
    res.end(result);
  });
})

//张张
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
    newsdb.InsertInfo(req.body.name, req.body.psw, req.body.phone, 
        req.body.email, req.body.rName,req.body.rAdd, function(err, result){
      res.end(result);
  });
  })

  app.post('/login', urlencodedParser, function (req, res) {
    newsdb.login(req.body.name, req.body.psw, function(err, result){
      res.end(result);
  });
  })

  app.get('/addgoods', urlencodedParser, function (req, res) {
    newsdb.addgoods(function(err, result){
      res.end(result);
  });
  })

  app.get('/user', urlencodedParser, function (req, res) {
    newsdb.user(function(err, result){
      res.end(result);
  });
  })

  app.get('/deletegoods', function (req, res) {
    newsdb.deletegoods(req.query.id, function(err, result){
     res.end(result);
    });
  });

  //菲菲
//传给管理员登录
app.get('/manager.html',function(req,res){
  res.sendFile(__dirname + "/" + "manager.html");
});

//传给用户管理
app.get('/usermana.html',function(req,res){
  res.sendFile(__dirname + "/" + "usermana.html");
});

//传给用户数据
app.get('/userdata.html',function(req,res){
  res.sendFile(__dirname + "/" + "userdata.html");
});

//传给订单管理
app.get('/ordermana.html',function(req,res){
  res.sendFile(__dirname + "/" + "ordermana.html");
});

//输入管理员登录信息
app.post('/insert_manager',urlencodedParser,function(req,res){
  //输出JSON格式
  console.log('name-request' + req.body.name);
  manadb.Insert_manager(req.body.name,req.body.pwd,req.body.type,function(err,result){
      res.end(result);
  });
});

//用户管理_get
app.get('/get_usermana', function(req,res){
  manadb.showAll_usermana(function(err,result){
      res.end(result);
  });
});
//用户管理_getdetail
app.get('/getdetail_usermana', function(req,res){
  manadb.getDetail_usermana(req.query.id,function(err,result){
      res.end(result);
  });
});
//用户管理_getone
app.get('/getone_usermana', function(req,res){
  //console.log('name-request' + req.query.userName);
  manadb.select_usermana(req.query.userName,function(err,result){
      res.end(result);
  });
});
//用户管理_delete
app.get('/delete_usermana',function(req,res){
  manadb.delete_usermana(req.query.id,function(err,result){
      res.end(result);
  });
});
//用户管理_insert
app.post('/insert_usermana',urlencodedParser,function(req,res){
  //输出JSON格式
  console.log('name-request' + req.body.name);
  manadb.Insert_usermana(req.body.name,req.body.pwd,req.body.type,function(err,result){
      res.end(result);
  });
});
//用户管理_update
app.post('/update_usermana',urlencodedParser,function(req,res){
  manadb.update_usermana(req.body.name,req.body.pwd,req.body.id,function(err,result){
      res.end(result);
  })
})

//订单管理
app.get('/get_ordermana', function(req,res){
  manadb.showAll_ordermana(function(err,result){
      res.end(result);
  });
});
app.get('/getone_ordermana', function(req,res){
  manadb.select_ordermana(req.body.userName,function(err,result){
      res.end(result);
  });
});
app.get('/delete_ordermana',function(req,res){
  manadb.delete_ordermana(req.query.id,function(err,result){
      res.end(result);
  });
});
app.post('/insert_ordermana',urlencodedParser,function(req,res){
  //输出JSON格式
  console.log('name-request' + req.body.name);
  manadb.Insert_ordermana(req.body.name,req.body.pwd,req.body.type,function(err,result){
      res.end(result);
  });
});
app.post('/update_ordermana',urlencodedParser,function(req,res){
  manadb.update_ordermana(req.body.name,req.body.pho,req.body.adr,req.body.good,req.body.id,function(err,result){
      res.end(result);
  });
});
var server = app.listen(8087, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})