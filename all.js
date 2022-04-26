var express = require('express');
var app = express();
var manadb = require('./all_1');
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//在服务器上挂载静态文件夹
app.use('/public',express.static('public'));

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

var server = app.listen(8088,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});