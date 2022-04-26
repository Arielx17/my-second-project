var mysql  = require('mysql');  
var dbconfig = require("./database");
//使用连接池
var pool = mysql.createPool(dbconfig.mysql);

//注册
exports.InsertInfo = function(name,psw,phone,email,rName,rAdd,callback) {
    var  addSql = 'INSERT INTO Userinfo(userName,password,phoneNum,email,rName,rAddress) VALUES(?,?,?,?,?,?)';
    var  addSqlParams = [name,psw,phone,email,rName,rAdd]; 
    pool.getConnection(function(err, connection) {
      //定义查询语句
      connection.query(addSql, addSqlParams, function(err,result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
          //result = JSON.stringify(result);
          console.log(result.insertId);
          // 释放连接
          callback(err, JSON.stringify(result));
          connection.release();
      })
    });
  }

  //登陆
  exports.login =function(name,psw,callback){
    var addSql="select userName,password from userinfo where userName = '"+name+"' and password = '"+psw+"'";
    pool.getConnection(function(err, connection) {
    connection.query(addSql,[name,psw], function (err,result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
          //console.log(result);
          // 释放连接
          callback(err, JSON.stringify(result));
          connection.release();
      })
    })
}

//在购物车里打印商品
exports.addgoods =function(callback){
  pool.getConnection(function(err, connection) {
    var addSql="select * from t_goods,t_order where t_goods.goodsId=t_order.goodsId";
  connection.query(addSql,function (err,result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
        console.log(result);
        // 释放连接
        callback(err, JSON.stringify(result));
        connection.release();
    })
  })
}

//获取用户
exports.user =function(callback){
  pool.getConnection(function(err, connection) {
    var addSql="select userName from userinfo";
  connection.query(addSql,function (err,result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
        console.log(result);
        // 释放连接
        callback(err, JSON.stringify(result));
        connection.release();
    })
  })
}

//删
exports.deletegoods = function(id, callback) {
  pool.getConnection(function(err, connection) {
    //定义查询语句
    console.log(id);
    var sql = "delete FROM t_order where goodsId=" + id;
    connection.query(sql,function(err,result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
        result = JSON.stringify(result);
        console.log(result);
        // 释放连接
        callback(err,result);
        connection.release();
        
    })
  });
}

